import { randomUUID } from "node:crypto";
import type { HeightSpec } from "@/types/virtualScroll.type";
import { act, cleanup, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import VirtualScroll, { VirtualItem } from ".";

const generateItems = (count: number) =>
  Array.from({ length: count }, (_, i) => (
    <VirtualItem key={randomUUID()} name={`item-${i}`}>
      <div style={{ height: "100px" }}>Item {i}</div>
    </VirtualItem>
  ));

const heights: Record<string, HeightSpec> = Object.fromEntries(
  Array.from({ length: 100 }, (_, i) => [`item-${i}`, { height: 100 }]),
);

describe("Virtual Scroll Component Test", () => {
  beforeEach(() => {
    let mockCallback: IntersectionObserverCallback;

    class IntersectionObserver {
      readonly root: Element | null = null;
      readonly rootMargin: string = "0px";
      readonly thresholds: ReadonlyArray<number> = [];

      constructor(callback: IntersectionObserverCallback) {
        mockCallback = callback;
      }

      observe(target: Element) {
        mockCallback(
          [
            {
              isIntersecting: true,
              target,
              intersectionRatio: 1,
              time: 0,
              boundingClientRect: {} as DOMRectReadOnly,
              intersectionRect: {} as DOMRectReadOnly,
              rootBounds: {} as DOMRectReadOnly,
            },
          ],
          this,
        );
      }

      unobserve() {}
      disconnect() {}
      takeRecords() {
        return [];
      }
    }

    class ResizeObserver {
      callback: ResizeObserverCallback;

      constructor(callback: ResizeObserverCallback) {
        this.callback = callback;
      }

      observe(target: Element) {
        this.callback(
          [
            {
              target,
              contentRect: {
                width: 500,
                height: 300,
                top: 0,
                left: 0,
                bottom: 300,
                right: 500,
                x: 0,
                y: 0,
                toJson: () => {},
              },
            },
          ] as unknown as ResizeObserverEntry[],
          this,
        );
      }

      disconnect() {}
      unobserve() {}
    }

    global.ResizeObserver = ResizeObserver;
    global.IntersectionObserver = IntersectionObserver;
  });

  afterEach(() => {
    cleanup();
  });

  it("초기 렌더링 시 일부 아이템만 렌더링된다.", () => {
    render(
      <div style={{ height: "300px" }}>
        <VirtualScroll heights={heights}>{generateItems(100)}</VirtualScroll>
      </div>,
    );

    const items = screen.queryAllByText(/Item \d+/);
    expect(items.length).toBe(5); // overscan 2 포함
    expect(items[0].textContent).toBe("Item 0");
  });

  it("스크롤 시 overscan이 적용된 아이템이 렌더링된다.", async () => {
    render(
      <div style={{ height: "300px", overflowY: "auto" }}>
        <VirtualScroll heights={heights} overscan={5}>
          {generateItems(100)}
        </VirtualScroll>
      </div>,
    );

    const items = screen.queryAllByText(/Item \d+/);
    expect(items.length).toBe(8); // overscan 5 포함
  });

  it("스크롤 시 다른 아이템이 렌더링된다.", async () => {
    const { container } = render(
      <div style={{ height: "300px", overflowY: "auto" }}>
        <VirtualScroll heights={heights} overscan={0}>
          {generateItems(100)}
        </VirtualScroll>
      </div>,
    );

    const el = container.querySelector(".virtual-scroll") as HTMLElement;

    act(() => {
      el.scrollTop = 500;
      el.dispatchEvent(new Event("scroll"));
    });

    await waitFor(() => {
      const items = screen.queryAllByText(/Item \d+/);
      expect(items[0].textContent).toBe("Item 4");
    });
  });

  it("observer가 화면에 들어오고 onBottom이 있다면 호출된다.", async () => {
    const onBottom = vi.fn();

    const { container } = render(
      <div style={{ height: "300px", overflowY: "auto" }}>
        <VirtualScroll heights={heights} onBottom={onBottom}>
          {generateItems(100)}
        </VirtualScroll>
      </div>,
    );

    const el = container.querySelector(".virtual-scroll") as HTMLElement;

    act(() => {
      el.scrollTop = 500;
      el.dispatchEvent(new Event("scroll"));
    });

    await waitFor(() => {
      expect(onBottom).toHaveBeenCalled();
    });
  });

  it("observer가 화면에 들어오고 onBottom이 없다면 호출되지 않는다.", async () => {
    const onBottom = vi.fn();

    const { container } = render(
      <div style={{ height: "300px", overflowY: "auto" }}>
        <VirtualScroll heights={heights} onBottom={undefined}>
          {generateItems(100)}
        </VirtualScroll>
      </div>,
    );

    const el = container.querySelector(".virtual-scroll") as HTMLElement;

    act(() => {
      el.scrollTop = 500;
      el.dispatchEvent(new Event("scroll"));
    });

    await waitFor(() => {
      expect(onBottom).not.toHaveBeenCalled();
    });
  });

  it("VirtualItem 컴포넌트는 children을 렌더링한다.", () => {
    const { container } = render(
      <VirtualItem name="test-item">
        <div>Test Item</div>
      </VirtualItem>,
    );

    const item = container.querySelector("div");
    expect(item).toBeDefined();
    expect(item?.textContent).toBe("Test Item");
  });
});
