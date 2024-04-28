
let arr = [10, 20, 22, 30, 33, 34, 43, 45, 67, 67, 87, 89, 44, 56, 32, 21, 12, 31, 41];
for (let i = arr.length - 1; i >= 0; i--){
    let val = arr[i];
    let isPrime = IsPrime(val);
    if (isPrime == true) {
        arr.splice(i, 1);
    }
}


function IsPrime(val) {
    for (let div = 2; div * div <= val; div++){
        if (val % div == 0) {
            return false;
        }
    }
    return true;
}