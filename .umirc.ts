import { defineConfig } from "umi";

export default defineConfig({
  // base: '/mime',
  // publicPath: '/mime/',
  // base: '.',
  // publicPath: '/mime/',
  base: '/mime',
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  // publicPath: 'https://tanabalu.github.io/mime/',
  routes: [
    { path: "/", component: "./Home" },
    // { path: "/docs", component: "docs" },
  ],
  npmClient: 'npm',
  history: { type: 'hash' },
  hash: true,
});
