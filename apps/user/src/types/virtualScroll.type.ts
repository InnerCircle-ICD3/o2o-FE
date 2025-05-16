import type { PropsWithChildren } from "react";

export interface HeightSpec {
  height?: number;
  aspectRatio?: number;
}

export interface VirtualScrollProps extends PropsWithChildren {
  overscan?: number;
  heights: Record<string, HeightSpec>;
  onBottom?: () => void;
}

export interface VirtualItemProps extends PropsWithChildren {
  name: string;
}
