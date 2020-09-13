//1. start by picking the second element in the array
//2. Now compare the second element with the one before it and swap if necessary. 
//3. Continue to the next element and it if is in the incorrect order, iterate through the sorted portion. (i.e. the left side) to place the element in the correct place. 
//4. repeat until the array is sorted. 




//////////////////////////////:::::::::::::::::///////////////////////
////::::::: practice 09/12/2020 9:54 - 9:55 PM :::::: ///////////
//////////////////////////////:::::::::::::::::///////////////////////

function insertion(arr){
    for(let i = 1; i < arr.length; i++){
        let next = arr[i]
        let greatIdx = i-1
        while((greatIdx >=0) && (arr[greatIdx] > next)){
            arr[greatIdx+1] = arr[greatIdx]
            greatIdx--
        }
        arr[greatIdx+1] = next
    }
    return arr
}

//////////////////////////////:::::::::::::::::///////////////////////
////::::::: practice 09/12/2020 7:01 - 7:05 PM :::::: ///////////
//////////////////////////////:::::::::::::::::///////////////////////

function insertion(arr){
    for(let i = 1; i < arr.length; i++){
        let next = arr[i];
        let greatIdx = i - 1;
        while((greatIdx >= 0) && (arr[greatIdx] > next)){
            arr[greatIdx+1] = arr[greatIdx]
            greatIdx--
        }
        arr[greatIdx] = next;
    }
    return arr
}

//////////////////////////////:::::::::::::::::///////////////////////
////::::::: practice 09/12/2020 6:51 - 7:02 PM :::::: ///////////
//////////////////////////////:::::::::::::::::///////////////////////

function insertion (arr){
    for(let i = 1; i <arr.length; i++){
        let next = arr[i];
        let greatIdx = i-1;

        while((greatIdx >= 0) && (arr[greatIdx] > next)){
            arr[greatIdx + 1]  = arr[greatIdx]
            greatIdx--
        }
        
        arr[greatIdx + 1] = next
        //julia assager
    }
    return arr
}

//////////////////////////////:::::::::::::::::///////////////////////
////::::::: practice 09/12/2020 6:48PM :::::: ///////////
//////////////////////////////:::::::::::::::::///////////////////////
// function insertion(arr){
//     for(let i = 1; i < arr.length; i++){
//         let next = arr[i]
//         let greatIdx = i-1
//         while((greatIdx >= 0) && (arr[greatIdx] > next)){
//             arr[greatIdx + 1] = arr[greatIdx]
//             greatIdx--
//         }
//         arr[greatIdx + 1] = next
//     }
//     return arr
// }




//////////////////////////////:::::::::::::::::///////////////////////
////::::::: practice 09/12/2020 6:45PM :::::: ///////////
//////////////////////////////:::::::::::::::::///////////////////////

// function insertion(arr){

//     for(let i = 1; i < arr.length; i++){
//         let next = arr[i];
//         let greatIdx = i-1;

//         while((greatIdx >= 0) && (arr[greatIdx] > next)){
//             arr[greatIdx+1] = arr[greatIdx]
//             greatIdx--
//         }
//         arr[greatIdx + 1] = next
//     }
//     return arr
// }







//////////////////////////////:::::::::::::::::///////////////////////
////::::::: practice 09/12/2020 6:41PM :::::: ///////////
//////////////////////////////:::::::::::::::::///////////////////////
// function insertion(arr){
//     for(let i = 1; i <arr.length; i++){
//         let next = arr[i]
//         let great = i-1;

//         while((great >= 0) && (arr[great] > next)){
//             arr[great + 1] = arr[great]
//             great--
//         }

//         arr[great+1] = next
//     }
//     return arr
// }




//////////////////////////////:::::::::::::::::///////////////////////
////::::::: practice 09/12/2020 6:40PM :::::: ///////////
//////////////////////////////:::::::::::::::::///////////////////////
// function insertion(arr){
//     for(let i = 1; i < arr.length; i++){
//         let next = arr[i]
//         let great = i-1
//         while((great >=0) && (arr[great] > next)){
//             arr[great+1] = arr[great]
//             great--
//         }
//         arr[great+1] = next
//     }
//     return arr
// }

//////////////////////////////:::::::::::::::::///////////////////////
////::::::: practice 09/12/2020 6:36PM :::::: ///////////
//////////////////////////////:::::::::::::::::///////////////////////

// function insertion(arr){
//     for(let i = 1; i < arr.length; i++){
//         let next = arr[i];
//         let greater = i-1

//         while( (greater >= 0) && (arr[greater] > next) ){
//             arr[greater+1] = arr[greater]
//             greater--
//         }
//         arr[greater+1] = next
//     }
//     return arr
// }




//////////////////////////////:::::::::::::::::///////////////////////
////::::::: practice 09/12/2020 2:29PM :::::: ///////////
//////////////////////////////:::::::::::::::::///////////////////////
//
// function insertion (arr) {
//     for(let i = 1; i < arr.length; i++){
     
//       let current = arr[i]
//       let j = i-1
//       console.log("arr", arr, "i", i, "j", j, "current", current, "arr[j]", arr[j])
      
//       while((j >= 0) && (arr[j] > current)){
//         arr[j+1] = arr[j]  //current doens't change here
//         j--
//         console.log(arr)
//       }
//       arr[j+1] = current
//     }
//     return arr
//   }
  
//   insertion([4,3,2])






//////////////////////////////:::::::::::::::::///////////////////////
////::::::: with all the comments :::::: ///////////
//////////////////////////////:::::::::::::::::///////////////////////
// function insertion (arr){

//     for(let i = 1; i < arr.length; i++){

//         console.log("::::::::::::::::::::::::::::::::::::::::::::::")
//         let temp = arr[i] 
//         let e = i-1 

//         console.log("i::", i, ", e::", e, ", temp::", temp, ", temp-1:: ", arr[e])
//         while( (e >=0) && (arr[e] > temp)){ //6 > 4
//             arr[e + 1] = arr[e] // 5 => 6
//             console.log("arr[e+1] = arr[e] arr::  ", arr)
//             e-- //-1
//             console.log("e:: ", e)
//         }
//         console.log("arr[e+1]::,", arr[e+1], "temp ::",  temp)
//         arr[e+1] = temp //arr[0] => 5
//         console.log(":::::::::::::::::", arr)
//         console.log("::::::::::::::::::::::::::::::::::::::::::::::")
//     }
//     return arr
// }
//[6,5,4,3,2,1]
//////////////////////////////:::::::::::::::::///////////////////////




//////////////////////////////:::::::::::::::::///////////////////////

// function insertion (arr) { //insertion([6,5,4,3,2,1])
//     //[6,6,4,3,2,1]

//     for(let i = 1; i < arr.length; i++){
//         let secondEle = arr[i]//5 //4

//         let beforeIdx = i-1//0 //1

//         while(( beforeIdx >= 0) && (arr[beforeIdx] > secondEle)){  
            
//             console.log("arr[beforeIdx]", arr[beforeIdx], ">", "secondEle", secondEle)

//             arr[beforeIdx + 1] = arr[beforeIdx]; //5 => 6  //4=>6
            
//             beforeIdx-- //idx 0 //idx0
//             console.log(":::::::::")
//         }

//         console.log("arr[beforeIdx + 1]",arr[beforeIdx + 1], "=", "secondEle", secondEle)
//         arr[beforeIdx + 1] = secondEle //5=>6  //4=>6  
//     }
//     return arr
// }


////////////////////////////////////////////////////
///////////////solution////////////////////////////
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