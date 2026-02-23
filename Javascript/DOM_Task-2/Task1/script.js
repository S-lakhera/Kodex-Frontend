function numbers (arr){
    let newArr = [];
    const sum = arr.reduce((a,b) => a+b,0)
    let avg = sum/arr.length;
    for(let i = 0; i<arr.length; i++)
    {
        if(arr[i] >= avg){
            newArr.push(arr[i]);
        }
    }
    console.log("Average is "+avg);
    
    return newArr;
}

let arr = [85, 90, 78, 92, 88]
numbers(arr);