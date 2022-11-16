let arr = [1, 2, 3];
let end = arr.length - 1;
for (start = 0; start != end; start++ ){ 

    let tmp = arr[start];
    arr[start] = arr[end];
    arr[end] = tmp;
    end --;
}

console.log(arr);