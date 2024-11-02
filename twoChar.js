// function twoChar(str){
//     let dub='';
//     let withoutDub='';
//     let result='';
//     for(let i=0;i<str.length-1;i++){
//         if(str[i]==str[i+1]){
//             dub=str[i];
//             withoutDub=str.replace(new RegExp(dub,'g'),'');
//         }
//     }
//     for(let j=0;j<withoutDub.length;j++){
//         let char=withoutDub[j];
//         if(withoutDub.indexOf(char)!==withoutDub.lastIndexOf(char)){
//             result=result+char;
//         }
//     }
//     return result.length;

// }
// console.log(twoChar("asdcbsdcagfsdbgdfanfghbsfdabb"));
// function strongPassword(n, password) {
//     let count = 0;
//     const hasDigit = /\d/;
//     const hasLowercase = /[a-z]/;
//     const hasUppercase = /[A-Z]/;
//     const hasSpecialChar = /[^a-zA-Z0-9]/;
//     if (n > 3) {
//         if (hasDigit.test(password)) {
//             count++;
//         }
//         if (hasLowercase.test(password)) {
//             count++;
//         }
//         if (hasUppercase.test(password)) {
//             count++;
//         }
//         if (hasSpecialChar.test(password)) {
//             count++;
//         }
//         if(count===3&&n<6){
//             return 6-n;
//         }
//         if(count===4&&n<6){
//             return 6-n;
//         }
//         return 4-count;
//     }
//     if(n<=3){
//         return 6-n;
//     }


// }
// console.log(strongPassword(4, "1z2!"));
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('Async task is complete');
//         resolve();

//     },10000)
// })
// .then(function(){
//     console.log('Promise consumed');

// })
// function twoChar(str) {
//     let maxLength=0;
//     let uniqueStr = [...new Set(str)];
//     let lengthArr=[];
//     for (let m = 0; m < uniqueStr.length; m++) {
//         let arr = [];
//         let finalArr = [];
//         for (let i = 0; i < str.length; i++) {
//             if (str[i] === uniqueStr[m] || str[i] === uniqueStr[m+1]) {
//                 arr.push(str[i]);
//             }
//         }
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[j] === arr[j + 1]) {
//                 finalArr = [];
//                 break;
//             }
//             if (j === 0 || arr[j] != arr[j - 1]) {

//                 finalArr.push(arr[j]);

//             }
//         }
//         lengthArr.push(finalArr.length);
//     }
//     maxLength=Math.max(...lengthArr);
//     console.log(maxLength);
    

// }
// twoChar('a');
function twoChar(str) {
    let maxLength = 0;
    let uniqueStr = [...new Set(str)];

    for (let m = 0; m < uniqueStr.length - 1; m++) {
        for (let n = m + 1; n < uniqueStr.length; n++) {
            let char1 = uniqueStr[m];
            let char2 = uniqueStr[n];
            let arr = [];

            // Build array with only the two selected characters
            for (let i = 0; i < str.length; i++) {
                if (str[i] === char1 || str[i] === char2) {
                    arr.push(str[i]);
                }
            }

            // Check if the array alternates
            let isValid = true;
            for (let j = 0; j < arr.length - 1; j++) {
                if (arr[j] === arr[j + 1]) {
                    isValid = false;
                    break;
                }
            }

            // Update maxLength if this sequence is valid and the longest so far
            if (isValid) {
                maxLength = Math.max(maxLength, arr.length);
            }
        }
    }

    console.log(maxLength);
}twoChar.js

twoChar("cwomzxmuelmangtosqkgfdqvkzdnxerhravxndvomhbokqmvsfcaddgxgwtpgpqrmeoxvkkjunkbjeyteccpugbkvhljxsshpoymkryydtmfhaogepvbwmypeiqumcibjskmsrpllgbvc");

