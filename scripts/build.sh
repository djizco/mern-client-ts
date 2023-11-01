export NODE_ENV=production

webpack --mode=production --progress --config ./config/webpack.prd.config.ts

unset NODE_ENV
