import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";

// Use the vitest-specific entry point so jest-dom imports expect from vitest,
// not from a non-existent global (jest-dom's main export assumes Jest globals).
import "@testing-library/jest-dom/vitest";

// RTL does NOT auto-cleanup in vitest without globals mode.
// Register cleanup manually so each test starts with a clean DOM.
afterEach(() => {
  cleanup();
});
