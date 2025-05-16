import type { HeightSpec, VirtualItemProps } from "@/types/virtualScroll.type";
import type { ReactElement } from "react";

export const getItemHeights = ({
  children,
  heights,
  width,
}: {
  children: ReactElement<VirtualItemProps>[];
  heights: Record<string, HeightSpec>;
  width: number;
}) => {
  return children.map((child) => {
    const name = child.props.name || "";
    if (!name) throw new Error(`No matching class in heights for: ${name}`);

    const spec = heights[name];

    if (spec.height) return spec.height;
    if (spec.aspectRatio) {
      return width / spec.aspectRatio;
    }

    throw new Error(`No height or aspect ratio for: ${name}`);
  });
};

export const getVirtualRange = ({
  scrollTop,
  height,
  overscan,
  itemHeights,
}: {
  scrollTop: number;
  height: number;
  overscan: number;
  itemHeights: number[];
}) => {
  let startIdx = 0;
  let offset = 0;

  while (startIdx < itemHeights.length && offset + itemHeights[startIdx] < scrollTop) {
    offset += itemHeights[startIdx];
    startIdx++;
  }

  let endIdx = startIdx;
  let visibleHeight = 0;

  while (endIdx < itemHeights.length && visibleHeight < height) {
    visibleHeight += itemHeights[endIdx];
    endIdx++;
  }

  const renderStart = Math.max(0, startIdx - overscan);
  const renderEnd = Math.min(itemHeights.length, endIdx + overscan);

  return {
    renderStart,
    renderEnd,
  };
};

export const getTranslateY = (itemHeights: number[], startIdx: number) => {
  return itemHeights.slice(0, startIdx).reduce((a, b) => a + b, 0);
};

export const renderVirtualContent = ({
  children,
  heights,
  containerSize,
  scrollTop,
  overscan,
}: {
  children: ReactElement<VirtualItemProps>[];
  heights: Record<string, HeightSpec>;
  containerSize: {
    width: number;
    height: number;
  };
  scrollTop: number;
  overscan: number;
}) => {
  const { width, height } = containerSize;

  const itemHeights = getItemHeights({ children, heights, width });
  const totalHeight = itemHeights.reduce((acc, cur) => acc + cur, 0);
  const { renderStart, renderEnd } = getVirtualRange({
    scrollTop,
    height,
    overscan,
    itemHeights,
  });
  const translateY = getTranslateY(itemHeights, renderStart);

  return {
    totalHeight,
    translateY,
    visible: children.slice(renderStart, renderEnd),
  };
};
