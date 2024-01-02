import { defineConfig } from "umi";

export default defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '/mime/' : '/',
  routes: [
    { path: "/", component: "./Home" },
  ],
  npmClient: 'npm',
  history: { type: 'hash' },
  hash: true,
});
