import type { HeightSpec, VirtualItemProps } from "@/types/virtualScroll.type";
import { createElement } from "react";
import { beforeEach, describe, expect, it } from "vitest";
import { getItemHeights, getTranslateY, getVirtualRange, renderVirtualContent } from ".";

// 가짜 컴포넌트 생성 함수
const createItem = (name: string): React.ReactElement<VirtualItemProps> =>
  createElement("div", { name, className: name });

describe("Virtual Scroll Utils Test", () => {
  let children: React.ReactElement<VirtualItemProps>[];
  let heights: Record<string, HeightSpec>;

  beforeEach(() => {
    children = [
      createItem("a"),
      createItem("b"),
      createItem("c"),
      createItem("d"),
      createItem("e"),
      createItem("f"),
      createItem("g"),
      createItem("h"),
      createItem("i"),
    ];

    heights = {
      a: { height: 100 },
      b: { height: 150 },
      c: { height: 200 },
      d: { height: 250 },
      e: { height: 300 },
      f: { height: 350 },
      g: { height: 400 },
      h: { height: 450 },
      i: { height: 500 },
    };
  });

  it("getItemHeights 함수는 children으로 넘겨준 컴포넌트의 name(className 아님)을 기반으로 각 heightSpec을 찾아 height 목록을 반환한다.", () => {
    const totalHeight = getItemHeights({
      children,
      heights,
      width: 500,
    });

    // 전체 높이: 100 + 150 + 200 + 250 + 300 + 350 + 400 + 450 + 500 = 2700
    expect(totalHeight.reduce((acc, cur) => acc + cur, 0)).toBe(2700);
    expect(totalHeight).toEqual([100, 150, 200, 250, 300, 350, 400, 450, 500]);
  });

  it("getItemHeights 함수는 heightSpec으로 height이 아닌 aspectRatio를 넘겨주면 width / aspectRatio로 계산해서 height 목록을 반환한다.", () => {
    const aspectChildren = [createItem("x"), createItem("y")];

    const aspectHeights: Record<string, HeightSpec> = {
      x: { aspectRatio: 2 }, // width / 2
      y: { height: 120 },
    };

    const totalHeight = getItemHeights({
      children: aspectChildren,
      heights: aspectHeights,
      width: 400,
    });

    // 전체 높이: (400 / 2) + 120 = 200 + 120 = 320
    expect(totalHeight.reduce((acc, cur) => acc + cur, 0)).toBe(320);
  });

  it("getItemHeights 함수는 heightSpec으로 height도 aspectRatio도 넘겨주지 않으면 에러를 던진다.", () => {
    const badChildren = [createItem("z")];
    const badHeights: Record<string, HeightSpec> = {
      z: {},
    };

    expect(() =>
      getItemHeights({
        children: badChildren,
        heights: badHeights,
        width: 500,
      }),
    ).toThrow("No height or aspect ratio for: z");
  });

  it("getVirtualRange 함수는 스크롤 위치와 높이를 기반으로 가상화할 컴포넌트의 시작과 끝 인덱스를 반환한다.", () => {
    const itemHeights = getItemHeights({
      children,
      heights,
      width: 500,
    });

    const { renderStart, renderEnd } = getVirtualRange({
      scrollTop: 0,
      height: 300,
      overscan: 0,
      itemHeights,
    });

    // 스크롤 위치 0에서 시작하는 컴포넌트의 인덱스는 0
    expect(renderStart).toBe(0);

    // 높이가 300인 컴포넌트에서 시작하는 인덱스는 3
    // 100 + 150 = 250 < 300, 100 + 150 + 200 = 450 > 300
    expect(renderEnd).toBe(3);
  });

  it("getVirtualRange 함수는 스크롤 위치를 500으로 넘기면 스크롤 위치를 기반으로 시작과 끝 인덱스를 반환한다.", () => {
    const itemHeights = getItemHeights({
      children,
      heights,
      width: 500,
    });

    const { renderStart, renderEnd } = getVirtualRange({
      scrollTop: 500,
      height: 300,
      overscan: 0,
      itemHeights,
    });

    // 스크롤 위치 500에서 시작하는 컴포넌트의 인덱스는 3
    // 100 + 150 + 200 = 450 < 500
    expect(renderStart).toBe(3);

    // 높이가 300인 컴포넌트에서 시작하는 인덱스는 5
    // 250 < 300, 250 + 300 = 550 > 300
    expect(renderEnd).toBe(5);
  });

  it("getVirtualRange 함수는 overscan에 2를 넘기면 시작과 끝 인덱스가 2 증가한다.", () => {
    const itemHeights = getItemHeights({
      children,
      heights,
      width: 500,
    });

    const { renderStart, renderEnd } = getVirtualRange({
      scrollTop: 500,
      height: 300,
      overscan: 2,
      itemHeights,
    });

    // 스크롤 위치 500에서 시작하는 컴포넌트의 인덱스는 3 하지만 overscan이 2이므로 1
    expect(renderStart).toBe(1);

    // 높이가 300인 컴포넌트에서 시작하는 인덱스는 5 하지만 overscan이 2이므로 7
    expect(renderEnd).toBe(7);
  });

  it("getVirtualRange 함수는 overscan으로 시작 인덱스가 음수가 되면 0으로 반환한다.", () => {
    const itemHeights = getItemHeights({
      children,
      heights,
      width: 500,
    });

    const { renderStart, renderEnd } = getVirtualRange({
      scrollTop: 0,
      height: 300,
      overscan: 2,
      itemHeights,
    });

    // 스크롤 위치 0에서 시작하는 컴포넌트의 인덱스는 0 하지만 overscan이 2이므로 -2
    expect(renderStart).toBe(0);

    // 높이가 300인 컴포넌트에서 시작하는 인덱스는 3 하지만 overscan이 2이므로 5
    expect(renderEnd).toBe(5);
  });

  it("getVirtualRange 함수는 overscan으로 끝 인덱스가 itemHeights.length보다 크면 itemHeights.length로 반환한다.", () => {
    const itemHeights = getItemHeights({
      children,
      heights,
      width: 500,
    });

    const { renderStart, renderEnd } = getVirtualRange({
      scrollTop: 0,
      height: 300,
      overscan: 10,
      itemHeights,
    });

    // 스크롤 위치 0에서 시작하는 컴포넌트의 인덱스는 0
    expect(renderStart).toBe(0);

    // 높이가 300인 컴포넌트에서 시작하는 인덱스는 3 하지만 overscan이 10이므로 13
    expect(renderEnd).toBe(9);
  });

  it("getTranslateY 함수는 시작 인덱스 이전의 높이 목록을 기반으로 translateY를 계산한다.", () => {
    const itemHeights = getItemHeights({
      children,
      heights,
      width: 500,
    });
    const translateY = getTranslateY(itemHeights, 3);

    // 100 + 150 + 200 = 450
    expect(translateY).toBe(450);
  });

  it("renderVirtualContent 함수는 전체 높이와 translateY를 계산하고, 시작과 끝 인덱스를 기반으로 자식 컴포넌트를 렌더링한다.", () => {
    const containerSize = {
      width: 500,
      height: 300,
    };

    const { totalHeight, translateY, visible } = renderVirtualContent({
      children,
      heights,
      containerSize,
      scrollTop: 0,
      overscan: 0,
    });

    // 전체 높이: 100 + 150 + 200 + 250 + 300 + 350 + 400 + 450 + 500 = 2700
    expect(totalHeight).toBe(2700);

    // translateY: 0
    expect(translateY).toBe(0);

    // 시작 인덱스: 0, 끝 인덱스: 3
    expect(visible.length).toBe(3);
    expect(visible[0].props.name).toBe("a");
    expect(visible[1].props.name).toBe("b");
    expect(visible[2].props.name).toBe("c");
  });
});
