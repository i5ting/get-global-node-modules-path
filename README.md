# get-global-node_modules-path

举例：在使用全局命令的时候，

## Install

    $ npm i -S get-global-node_modules-path

## 测试

### 支持yarn: 扁平

```
const p = require('get-global-node_modules-path')('surge')
console.log(p)

DEBUG=get-global-node_modules-path node test
  get-global-node_modules-path [ '/usr/local/bin/surge',
  get-global-node_modules-path   '../../../Users/youku/.config/yarn/global/node_modules/.bin/surge' ] +0ms
  get-global-node_modules-path /Users/youku/.config/yarn/global/node_modules/.bin/surge +3ms
  get-global-node_modules-path /Users/youku/.config/yarn/global/node_modules +0ms
/Users/youku/.config/yarn/global/node_modules
```

查看结果

```
$ ls /Users/youku/.config/yarn/global/node_modules/|grep surge
surge
surge-ignore
```
### 支持npm：自管

```
const p = require('get-global-node_modules-path')('je')
console.log(p)

DEBUG=get-global-node_modules-path node test
    get-global-node_modules-path [ '/Users/youku/.nvm/versions/node/v8.15.0/bin/umi',
  get-global-node_modules-path   '../lib/node_modules/umi/bin/umi.js' ] +0ms
  get-global-node_modules-path /Users/youku/.nvm/versions/node/v8.15.0/lib/node_modules/umi/bin/umi.js +3ms
  get-global-node_modules-path /Users/youku/.nvm/versions/node/v8.15.0/lib/node_modules/umi/node_modules +0ms
/Users/youku/.nvm/versions/node/v8.15.0/lib/node_modules/umi/node_modules
```

依赖模块

```
$ ls /Users/youku/.nvm/versions/node/v8.15.0/lib/node_modules/umi/node_modules|grep umi
babel-preset-umi
eslint-config-umi
umi-build-dev
umi-core
umi-history
umi-mock
umi-notify
umi-test
umi-url-pnp-loader
umi-utils

```