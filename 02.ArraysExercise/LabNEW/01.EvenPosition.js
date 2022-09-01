function solve(commands){
    let result = [];

    for (let index = 1; index <= commands.length; index++) {
        commands[index-1] === 'add' ? result.push(index) : result.pop();
    }
    result.length === 0 ? console.log('Empty') : console.log(result.join('\n'))
}

solve(['remove', 
'remove', 
'remove']
)