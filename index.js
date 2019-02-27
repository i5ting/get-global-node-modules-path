const path = require('path')
const child_process = require('child_process')
const debug = require('debug')('get-global-node_modules-path')
module.exports = function (cmd) {
    const a = child_process.execSync("which " + cmd + " |xargs ls -l|awk '{print $9\":\"$11}'")
    const p = a.toString().replace('\n', "").split(":")
    
    debug(p)
    
    let finalPath=""
    if(/yarn/.test(p)){
        const realPath = path.resolve(p[0].replace(cmd, ""), p[1])
        debug(realPath)
        finalPath = realPath.split('node_modules')[0]+"node_modules"
        debug(finalPath)
    } else {
        const realPath = path.resolve(p[0].replace(cmd, ""), p[1])
        debug(realPath)
        finalPath = realPath.split('node_modules')[0] + "node_modules/"+ cmd + "/node_modules"
        debug(finalPath)
    }
  
    return finalPath
}