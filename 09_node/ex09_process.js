process.stdout.write('Liking the course?\n')
process.stdin.on('data', function(data){
    process.stdout.write(`Your answer: ${data.toString()} Thanks!\n`)
    process.exit()
})