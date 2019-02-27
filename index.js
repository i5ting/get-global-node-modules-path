const path = require('path')
module.exports = function(cmd){
    const a = require('child_process').execSync("which " + cmd + " |xargs ls -l|awk '{print $9\":\"$11}'")
    const p = a.toString().replace('\n', "").split(":")
    console.log(p)

    const o = path.resolve(p[0].replace(cmd, ""), p[1])
    console.log(o.split('node_modules')[0]+"node_modules")

}