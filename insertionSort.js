//1. start by picking the second element in the array
//2. Now compare the second element with the one before it and swap if necessary. 
//3. Continue to the next element and it if is in the incorrect order, iterate through the sorted portion. (i.e. the left side) to place the element in the correct place. 
//4. repeat until the array is sorted. 



function insertion (arr) { //insertion([6,5,4,3,2,1])
    //[6,6,4,3,2,1]

    for(let i = 1; i < arr.length; i++){
        let secondEle = arr[i]//5 //4

        let beforeIdx = i-1//0 //1

        while(( beforeIdx >= 0) && (arr[beforeIdx] > secondEle)){  
            
            console.log("arr[beforeIdx]", arr[beforeIdx], ">", "secondEle", secondEle)

            arr[beforeIdx + 1] = arr[beforeIdx]; //5 => 6  //4=>6
            
            beforeIdx-- //idx 0 //idx0
            console.log(":::::::::")
        }

        console.log("arr[beforeIdx + 1]",arr[beforeIdx + 1], "=", "secondEle", secondEle)
        arr[beforeIdx + 1] = secondEle //5=>6  //4=>6  
    }
    return arr
}




// const insertion = (arr) => {

//     for(let i = 1; i < arr.length; i++){

//         let currentVal = arr[i];

//         let j = i-1;

//         while((j > -1) && (currentVal < arr[j])){
//             arr[j+1] = arr[j]
//             j--;
//         }
//         arr[j+1] = currentVal
//     }
//     return arr
// }

console.log(insertion([6,5,4,3,2,1]))