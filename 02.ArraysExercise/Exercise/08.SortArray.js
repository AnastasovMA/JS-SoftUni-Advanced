function solve(arr){
    arr.sort(twoCriteriaSort);
    arr.forEach(x => console.log(x));

    function twoCriteriaSort(a, b){
        if (a.length === b.length) {
            return a.localeCompare(b);
        } else if(a.length < b.length){
            return -1;
        }
    }
}
solve(['alpha', 
'beta', 
'gamma'])