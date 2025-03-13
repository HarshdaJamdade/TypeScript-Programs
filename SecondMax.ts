function SecondMaxc(arr: number[]): number {
    var Max: number = 0
    var i: number = 0
    var Result: number = 0
    var SecondMax: number = 0

    for (i = 0; i < arr.length; i++) {
        if (arr[i] >= Result) {
            Max = arr[i]
            Result = Max

        }
    }
    for (i = 0; i < arr.length; i++) {
        if (arr[i] < Max && arr[i] >= SecondMax) {
            SecondMax = arr[i]
        }

    }
   // console.log(Max)
    return SecondMax

}

var arr: number[] = [23, 89, 6, 29, 56, 77, 45, 32]
console.log(SecondMaxc(arr))

var arr1: number[] = [23, 15, 99,21, 33, 74,2, 100]
console.log(SecondMaxc(arr1))