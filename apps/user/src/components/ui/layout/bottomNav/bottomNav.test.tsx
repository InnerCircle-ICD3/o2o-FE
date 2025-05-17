import { cleanup, render, screen } from "@testing-library/react";
import * as navigation from "next/navigation";
import { type Mock, afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import BottomNav from ".";

vi.mock("next/navigation", async () => ({
  useSelectedLayoutSegment: vi.fn(),
}));

describe("BottomNav", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it("children이 main 영역에 렌더링되어야 한다", () => {
    render(
      <BottomNav>
        <p>테스트 children</p>
      </BottomNav>,
    );

    expect(screen.getByText("테스트 children")).not.toBeNull();
  });

  it("ROUTE에 정의된 항목들이 모두 렌더링되어야 한다", () => {
    render(
      <BottomNav>
        <div />
      </BottomNav>,
    );

    expect(screen.getByText("홈")).not.toBeNull();
    expect(screen.getByText("찜")).not.toBeNull();
    expect(screen.getByText("지도")).not.toBeNull();
    expect(screen.getByText("주문내역")).not.toBeNull();
    expect(screen.getByText("마이")).not.toBeNull();
  });

  it("현재 segment에 따라 active 스타일이 적용되어야 한다", () => {
    (navigation.useSelectedLayoutSegment as Mock).mockReturnValue("my-orders");

    render(
      <BottomNav>
        <div />
      </BottomNav>,
    );
    const activeLink = screen.getByText("주문내역").closest("a") as HTMLAnchorElement;
    expect(activeLink.className).toContain("active");
  });
});
