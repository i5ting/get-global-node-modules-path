# get-global-node-modules-path

举例：在使用全局命令的时候，

## Install

    $ npm i -S get-global-node-modules-path

## 测试

### 支持yarn: 扁平

```
const p = require('get-global-node-modules-path')('surge')
console.log(p)

DEBUG=get-global-node-modules-path node test
  get-global-node-modules-path [ '/usr/local/bin/surge',
  get-global-node-modules-path   '../../../Users/youku/.config/yarn/global/node-modules/.bin/surge' ] +0ms
  get-global-node-modules-path /Users/youku/.config/yarn/global/node-modules/.bin/surge +3ms
  get-global-node-modules-path /Users/youku/.config/yarn/global/node-modules +0ms
/Users/youku/.config/yarn/global/node-modules
```

查看结果

```
$ ls /Users/youku/.config/yarn/global/node-modules/|grep surge
surge
surge-ignore
```
### 支持npm：自管

```
const p = require('get-global-node-modules-path')('je')
console.log(p)

DEBUG=get-global-node-modules-path node test
    get-global-node-modules-path [ '/Users/youku/.nvm/versions/node/v8.15.0/bin/umi',
  get-global-node-modules-path   '../lib/node-modules/umi/bin/umi.js' ] +0ms
  get-global-node-modules-path /Users/youku/.nvm/versions/node/v8.15.0/lib/node-modules/umi/bin/umi.js +3ms
  get-global-node-modules-path /Users/youku/.nvm/versions/node/v8.15.0/lib/node-modules/umi/node-modules +0ms
/Users/youku/.nvm/versions/node/v8.15.0/lib/node-modules/umi/node-modules
```

依赖模块

```
$ ls /Users/youku/.nvm/versions/node/v8.15.0/lib/node-modules/umi/node-modules|grep umi
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