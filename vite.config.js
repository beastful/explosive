import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    //Specifies that the output of the build will be a library.
    lib: {
      //Defines the entry point for the library build. It resolves 
      //to src/index.ts,indicating that the library starts from this file.
      entry: path.resolve(__dirname, "src/main.js"),
      name: "explosive",
      //A function that generates the output file
      //name for different formats during the build
      fileName: (format) => `index.${format}.js`,
    },
    //Generates sourcemaps for the built files,
    //aiding in debugging.
    sourcemap: true,
    //Clears the output directory before building.
    emptyOutDir: true,
  },
});