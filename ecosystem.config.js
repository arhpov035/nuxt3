module.exports = {
  apps: [
    {
      name: 'tortam',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs'
    }
  ]
}
