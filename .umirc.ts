import { defineConfig } from "umi";

export default defineConfig({
  // base: '/mime',
  // publicPath: '/mime/',
  // base: '.',
  // publicPath: '/mime/',
  // base: process.env.NODE_ENV === 'production' ? '/mime' : '/',
  // publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  publicPath: process.env.NODE_ENV === 'production' ? '/mime/' : '/',
  // publicPath: 'https://tanabalu.github.io/mime/',
  routes: [
    { path: "/", component: "./Home" },
    // { path: "/docs", component: "docs" },
  ],
  codeSplitting: {
    jsStrategy: 'granularChunks',
  },
  npmClient: 'npm',
  history: { type: 'hash' },
  hash: true,
});
