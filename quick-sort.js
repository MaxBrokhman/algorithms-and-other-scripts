const quickSort = (arr) => {
    if(arr.length <= 1) return arr;
    const pivot = arr.filter(item => item === arr[0]);
    const less = arr.filter(item => item < pivot[0]);
    const more = arr.filter(item => item > pivot[0]);
    return quickSort(less).concat(pivot.concat(quickSort(more)));
};

const quickSort2 = (arr) => {
    if(arr.length <= 1) return arr;
    const pivot = [];
    const less = [];
    const more = [];
    arr.forEach(item => {
        if(item === arr[0]){
            pivot.push(item);
        } else if(item < arr[0]){
            less.push(item);
        } else{
            more.push(item);
        }
    });
    return quickSort2(less).concat(pivot.concat(quickSort2(more)));
};
