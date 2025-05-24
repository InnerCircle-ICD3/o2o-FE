import Page from "@/app/(bottomNav)/page";
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

test("Page", () => {
  render(<Page />);
  console.log("test");
  expect(screen.getByRole("heading", { level: 1, name: "Home" })).toBeDefined();
});
