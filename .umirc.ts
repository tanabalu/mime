import { defineConfig } from "umi";

export default defineConfig({
  base: '/mime/',
  publicPath: '/mime/',
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
  ],
  npmClient: 'npm',
});
