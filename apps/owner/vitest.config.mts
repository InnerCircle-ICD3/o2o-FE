import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./src/test/setup.ts"],
    // TODO: Remove this after initial test coverage setup
    coverage: {
      provider: "v8",
      reporter: ["text", "json-summary", "html", "lcov"],
      reportsDirectory: "./coverage",
      include: ["src/app/page.tsx", "src/components/**/*.tsx", "src/stores/**/*.ts"],
      exclude: ["**/*.d.ts", "**/*.test.ts", "**/*.test.tsx", "src/mocks/**", "src/test/**"],
    },
  },
});
