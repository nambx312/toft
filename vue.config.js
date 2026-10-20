const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  publicPath: process.env.VERCEL
    ? '/'
    : process.env.NODE_ENV === 'production'
      ? '/toft/'
      : '/',
})