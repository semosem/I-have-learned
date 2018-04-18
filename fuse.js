const {
  FuseBox,
  CSSPlugin,
  WebIndexPlugin,
  Sparky,
  ImageBase64Plugin
} = require("fuse-box");
const { src, task, watch, context } = require("fuse-box/sparky");

const fuse = FuseBox.init({
  homeDir: "src",
  output: "dist/$name.js",
  plugins: [
    CSSPlugin(),
    ImageBase64Plugin(),
    WebIndexPlugin({
      title: "React-TypeScript",
      template: "src/index.html",
      path: "/static/"
    })
  ]
});

fuse.dev();

fuse
  .bundle("static/bundle")
  .instructions("> index.tsx")
  .watch()
  .hmr();

Sparky.task("default", () => {
  fuse.run();
});
