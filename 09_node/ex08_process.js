function hasParam(param) {
    return process.argv.indexOf(param) !== -1
}

if(hasParam('production')){
    console.log("ATTENTION")
} else {
    console.log("SUSA")
}