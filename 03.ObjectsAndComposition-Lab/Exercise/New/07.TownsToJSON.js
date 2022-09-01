function solve(inputArr = []) {
    let resultArr = [];
    inputArr.shift();

    for (const info of inputArr) {
        let [town, latitude, longitude] = info.split(/[| ][ | ]/).filter(x => x);
        resultArr.push({
            Town: town,
            Latitude: Number(Number(latitude).toFixed(2)),
            Longitude: Number(Number(longitude).toFixed(2)),
        });
    }
    //console.log(JSON.stringify(resultArr));
    return JSON.stringify(resultArr);
}
console.log(solve(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
))