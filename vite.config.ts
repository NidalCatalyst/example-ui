import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/lib/main.ts"),
      name: "ExampleUI",
      fileName: "example-ui",
    },
    rollupOptions: {
      // Make sure to externalize dependencies that shouldn't be bundled into your library
      external: ["react", "react-dom"],
      output: {
        // Provide global variables to use in the UMD build for externalized dependencies
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
