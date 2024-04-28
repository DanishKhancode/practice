// var a = 10;
// console.log(a);

// var args = process.argv;
// console.log(args);

// let args = process.argv;
// let i = args[2];
// console.log(i);
 
// let cmd = process.argv;
// let i = cmd[2];
// console.log("at 0" + cmd[0]);
// console.log("at 1" + cmd[1]);
// console.log("at 2" + cmd[2]);
// console.log("at 3" + cmd[3]);

// let args = process.argv;
// let i = parseInt(args[2]);
// i = i * 10;
// console.log(i);

// let args = process.argv;
// let i = parseInt(args[2]);
// if (i % 2 == 0) {
//     console.log("even  " + i);

// } else {
//     console.log("odd   " + i);
// }

// let n1 = process.argv.slice(2);
// if (n1 % 2 == 0) {
//   console.log("even");
// } else {
//   console.log("odd");
// }

// let args = process.argv;
// let n = args[2];
// for (let i = 1; i <= n; i++){
//     console.log(i);
// }

// let args = process.argv;
// let n = args[2];
// let isprime = true;
// for (let i = 2; i * i <= n; i++){
//     if (n % i == 0) {
//         isprime = false;
//     }
// }
// if (isprime == true) {
//     console.log("priem");
// } else {
//     console.log("not prime");
// }

// let n = process.argv.slice(2);
// for (let i = 1; i <= n; i++) {
//     let line = " ";
//     for (let j = 1; j <= i; j++){
//         line = line + "*\t";
//     }
//     console.log(line);
// }

// let args = process.argv;
// let n = args[2];
// for (let i = 2; i <= n; i++){
//     let isprime = IsPrime(i);
//     if (isprime == true) {
//         console.log(isprime);
//     }
// }
// function IsPrime(x) {
//     let isprime = true;
//     for (let div = 2; div * div <= x; div++){
//         if (x % div == 0) {
//             isprime = false;
//             break;
//         }
//     }
//     return isprime;
// }

// let n = process.argv.slice(2);
// let isprime = true;
// for (let i = 2; i * i <= n; i++){
//   if (n % i == 0) {
//     isprime = false;
//     break;
//   }
// }
// if (isprime) {
//   console.log(`${ n }  prime`);
// } else {
//   console.log(`${n} not prime`);
// }


// let args = process.argv;
// let n = parseInt(args[2]);
// let arr = [];
// for (let i = 0; i < n; i++){

//     let val = parseInt(args[i + 3]);
//     arr.push(val);
// }
// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// let n = process.argv.slice(2);
// if (n == 0 || n == 1) {
//   console.log(1);
// } else {
//   let fact = 1;
//   for (let i = 1; i <= n; i++){
//     fact = fact * i;
//   }
//   console.log(fact);
// }

// let n = process.argv.slice(2);
// let a = 0;
// let b = 1;
// let c;
// for (let i = 0; i <= n; i++){
//   c = a + b;
//   console.log(a);
//   a = b;
//   b = c;

// }

// -----------map
// let arr = [2, 4, 5, 6];
// let sarr = arr.map(function (v, i) {
//     console.log(v + " " + i);
//     return v * v;
// });
// console.log(sarr);

// -------map------split

// let arr = [
//     "Danish khan",
//     "Sumit malik",
//     "ansa saifi",
// ]
// let iarr = arr.map(function (v, i) {
//     let names = v.split(" ");
//     let ans = names[0][0] + "." + names[1][0] + ".";
//     return ans;
// });
// console.log(iarr);

//------------map

// let arr = [10, 21, 30, 40, 50];
// let barr = arr.map(function (v, i) {
//     if (v % 2 == 0) {
//         return true;

//     } else {
//         return false;
//     }
// });
// console.log(barr);

//----------arro function

// let arr = [2, 3, 4, 5, 6, 7];
// let barr = arr.map(v => v % 2 == 0);
// // return true;
// console.log(barr);


// ----- filter
// let arr = [1, 2, 3, 4, 5, 6, 76, 8, 9];
// let barr = arr.filter(v => v % 2 == 0);
// console.log(barr);


//------map and filter

// let arr = [2, 3, 4, 5, 6, 7, 8, 9];
// let v1 = arr.filter(v => v % 2 == 1);
// let v2 = v1.map(v => v *v);
// console.log(v1);
// console.log(v2);
// or
// let arr = [2, 3, 4, 5, 6, 7, 8, 9];
// let v1 = arr.filter(v => v % 2 == 1).map(v => v *v);
// console.log(v1);


// let arr = [
//     { name:"a", age:24,gender:"m"},
//     { name:"b", age:25,gender:"f"},
//     { name:"c", age:28,gender:"m"},
//     { name:"d", age:22,gender:"f"},
// ]
// let lage = arr.filter(v => v.gender == "f").map(v => v.age);
// console.log(lage);



//  -----------reduce
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let val = arr.reduce(function (pv, cv) {
//     return pv + cv;
// });
// console.log(val);

//     or
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let val = arr.reduce((pv, cv) => pv + cv);
//     console.log(val);

//   or
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let val = arr.reduce((pv, cv) => pv + cv,5);
//     console.log(val);


//--------reduce--concat

// let arr = [
//     [10, 20, 30],
//     [10, 20, 30,40],
//     [10, 20, 30,40,50],
//     [10, 20, 30,60,70,90],
// ]
// let arr1 = arr.reduce(function (pv, cv) {
//     let join = pv.concat(cv);
//     return join;
// }, []);
// console.log(arr1);

// or

// let arr = [
//     [10, 20, 30],
//     [10, 20, 30,40],
//     [10, 20, 30,40,50],
//     [10, 20, 30,60,70,90],
// ]
// let arr1 = arr.reduce( (pv, cv)=>pv.concat(cv));
// console.log(arr1);


//----------- some

// let arr = [3, 5, 7];
// let istheiranyevenelement = arr.some(function (v, i) {
//   if (v % 2 == 1) {
//     return true;

//   } else {
//     return false;
//   }
// })
// console.log(istheiranyevenelement);

//  or

// let arr = [3, 5, 7];
// let istheiranyevenelement = arr.some((v, i) => v % 2 == 0);
// console.log(istheiranyevenelement);


// let arr = [20, 30, 40, 50];
// displayArray(arr);

// arr.push(100);
// displayArray(arr);

// arr.push(200, 300);
// displayArray(arr);



// let rv = arr.push(5000, 6000);
// displayArray(arr);
// console.log(rv);


// arr.pop();
// displayArray(arr);

// function displayArray(arr) {
//   console.log(arr + "=" + arr.length);
// }




//--------odd --- even ---practic

// let arr = [20, 3, 40, 5, 60, 70];
// let odd = [];
// let even = [];

// let i = 0;
// while (arr.length > 0) {
//   let val = arr.shift();
//   if (val % 2 == 0) {
//     even.push(val);
//   } else {
//     odd.push(val);
//   }
// }
// arr = even.concat(odd);
// displayArray(arr);
// displayArray(odd);
// displayArray(even);

// function displayArray(arr) {
//   console.log(arr + "=" + arr.length);
// }


//-----array filter

// let arr = [ 20, 3, 4, 5, 6, 7];
// let oarr = arr.filter(function (v, i) {
//   if (i % 2 == 0) {
//     return true;

//   } else {
//     return false;
//   }
// })
// console.log(oarr);


// -------- my filter

// Array.prototype.myfilter = function (cb) {
//   let oarr = this;
//   let res = [];
//   for (let i = 0; i < oarr.length; i++){
//     let v = oarr[i];
//     let rbv = cb(v, i.oarr);
//     if (rbv == true) {
//       res.push(v);
//     }
//   }
//   return res;
// }
// let arr = [2, 3, 4, 5, 6, 7, 8];
// let oarr = arr.myfilter(function (v, i) {
//   if (i % 2 == 0) {
//     return true;

//   } else {
//     return false;
//   }
// });
//     console.log(oarr);


//----------array filter with map

// let arr = [
//   {name:"a",age:14,gender:"m"},
//   {name:"b",age:24,gender:"f"},
//   {name:"c",age:34,gender:"m"},
//   {name:"d",age:44,gender:"f"},
//   {name:"e",age:54,gender:"m"},
//   {name:"f",age:64,gender:"f"},
//   {name:"g",age:74,gender:"f"},
// ]
// let lages = arr.filter((v, i,) => v.gender == 'f')
//   .map((v, i,) => v.age);
// console.log(lages);


//------filter vs map
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let marr = arr.map(v => v % 2 == 0);
// let farr = arr.filter(v => v % 2 == 0);
// console.log(marr);
// console.log(farr);


//----------map and filter
// let product = [
//   { name: "t-shirt", price: 25 },
//   { name: "headphone", price: 125 },
//   { name: "keyboard", price: 20 },
//   { name: "monitor", price: 225 },

// ];
// let oarr = product.filter(v => v.price >= 100).map(v => v.name.toUpperCase());
// console.log(oarr);


//  let product = [
//     { name: "t-shirt", price: 25 },
//     { name: "headphone", price: 125 },
//     { name: "keyboard", price: 20 },
//     { name: "monitor", price: 225 },

//   ];
//   let oarr = product.map(v => v.price >= 100?v.name.toUpperCase():v.name.toLowerCase());
// console.log(oarr);

//  or
// let product = [
//   { name: "t-shirt", price: 25 },
//   { name: "headphone", price: 125 },
//   { name: "keyboard", price: 20 },
//   { name: "monitor", price: 225 },

// ];
// let oarr = product.map(function (v) {
//   if (v.price >= 100) {
//     return v.name.toUpperCase();
//   } else {
//     return v.name.toLowerCase();
//   }
// })
// console.log(oarr);


//-------------find

// let arr = [
//   { name: "danish", age: 23, gender: "M" },
//   { name: "dkahn", age: 22, gender: "M" },
//   { name: "khan", age: 21, gender: "f" },
//   { name: "saifi", age: 33, gender: "f" },
  
// ];
// let fvc = arr.find(function (v) {
//   if (v.gender == "f" && v.age >= 20 && v.age <= 30) {
//     return true;
//   } else {
//     return false;
//   }
// })
// // console.log(fvc);
// if (fvc != undefined) {
//   console.log(fvc.name + " " + fvc.age + " " + fvc.gender);
// } else {
//   console.log("not found");
// }



//---------find index

// let arr = [
//     { name: "danish", age: 23, gender: "M" },
//     { name: "dkahn", age: 22, gender: "M" },
//     { name: "khan", age: 31, gender: "f" },
//     { name: "saifi", age: 23, gender: "f" },
    
//   ];
//   let fvc = arr.findIndex(function (v) {
//     if (v.gender == "f" && v.age >= 20 && v.age <= 30) {
//       return true;
//     } else {
//       return false;
//     }
//   })
//   console.log(fvc);
//   if (fvc != -1) {
//     console.log(arr[fvc].name + " " + arr[fvc].age + " " + arr[fvc].gender);
//   } else {
//     console.log("not found");
//   }


//--------------------------include

// let a1 = [10, 20, 30, 50, 80];
// let a2 = [10, 30, 60, 90,];
// console.log(a2.includes(70));
// console.log(a2.includes(30));
// let inetr = a1.filter(v => a2.includes(v));
// console.log(inetr);


// ---------- array map reduce

// let arr = [
//       { name: "danish", age: 23, gender: "M" },
//       { name: "dkahn", age: 22, gender: "M" },
//       { name: "khan", age: 31, gender: "f" },
//       { name: "saifi", age: 23, gender: "f" },
      
// ];
// let res = arr.filter(v => v.gender == "f" && v.age >= 20 && v.age <= 30).map(v => v.age * v.age).reduce(function (v, i) {
//   return v + i;
// }, 0);
// console.log(res);

  // ------------------array searching
// let arr = [10, 20, 30, 4, 50, 60, 7, 8];
// let iores = arr.indexOf();
// let liors = arr.lastIndexOf();
// let ires = arr.includes();
// let fres = arr.find(function (v, i) {
//   return v > 50;
// })
// let fires = arr.findIndex(function (v, i) {
//   return v > 50;
// })
// console.log(fires);
// console.log(fres);


//----------------------array reverse and sort

// let sarr = ["hello", "bello", "bye", "their", "pep", "nados"];
// let narr = [20, 54, 12, 33, 98, 76, 100, 11, 291, 34];
// // sarr.sort();
// // narr.sort();
// sarr.reverse();
// console.log(sarr);
// console.log(narr);

// narr.sort((a, b) => a - b);
// console.log(narr);
// narr.reverse();
// console.log(narr);


//-----------------array concation

// let str = "My name is danish .i am software developer . i bleave in learnin g by doing. i need courage and patience";
// let res = str.split(".");
// console.log(res);

// let res2 = res.filter(s => s.length > 0);
// console.log(res2);

// let res3 = res2.map(s => s.trim());
// console.log(res3);

// let res4 = res3.map(s => s.split("."));
// console.log(res4);

// let res5 = res4.map(a => a.join("."));
// console.log(res5);


//-------------------array flate

// let arr = [10, 20, 30, [50, 60,[70, 80]], 40, 60, [70, 50]];
// let res1 = arr.flat();
// let res1 = arr.flat(2);
// console.log(res1);
// console.log(res1);


///-----------------------------array from

// let arr1 = [10, 20, 30];
// // console.log(arr1);

// let arr2 = Array.of(10);
// console.log(arr2);

// let arr3 = Array.from("danish");
// console.log(arr3);

// let arr5 = arr3.map(ch => ch.charCodeAt(0));
// console.log(arr5);

// let arr6 = arr5.map(v => String.fromCharCode(v));
// console.log(arr6);


///------------------function

// function sayhello(name) {
//   console.log("helo", name);
// }
// // sayhello("danish");
// // console.log(sayhello);

// let rval = sayhello("danish");
// console.log("//", rval);

///--------------map intervie question
// let arr = [
//   { firstname: "danish", lastname: "khan" },
//   { firstname: "fazil", lastname: "saifi" },
// ];
// let ans = arr.map((v) => {
//   return v.firstname + " " + v.lastname;
// });
// console.log(ans);

// let arr = [
//   "Danis khan",
//   "Sumit malik",
//   "ansa saifi",
// ];
// let iarr = arr.map((v) => {
//   let sp = v.split(" ");
//   let ans = sp[0][0] + " " + sp[1][0];
//   return ans;
// });
// console.log(iarr);




// let arr = [
//   { name: "a", age: 24, gender: "m" },
//   { name: "b", age: 25, gender: "f" },
//   { name: "c", age: 28, gender: "m" },
//   { name: "d", age: 22, gender: "f" },
// ];
// let oarr = arr.filter(v => v.gender == "f").map(v => v.age);
// console.log(oarr);


// let arr = [
//   [10, 20, 30],
//   [10, 20, 30, 40],
//   [10, 20, 30, 40, 50],
//   [10, 20, 30, 60, 70, 90],
// ];
// let oarr = arr.reduce(function (v, i) {
//   let ans = v.concat(i);
//   return ans;
// },[]);
// console.log(oarr);


//  let product = [
//     { name: "t-shirt", price: 25 },
//     { name: "headphone", price: 125 },
//     { name: "keyboard", price: 20 },
//     { name: "monitor", price: 225 },
    
// ];
// let arr = product.map(v => v.price > 100 ? v.name.toUpperCase() : v.name.toLowerCase());
// console.log(arr);


// let st = "hello dan<space>is";
// let t = "sfhsfgsf";
// // let a =st.slice(0, -1);
// // console.log(a);
//  let ans= st.concat(t);
// console.log(ans);

// console.log(a);
// var a = 10;

// let n2 = process.argv;
// let n = parseInt(n2[2]);
// for (let i = 0; i < n.length; i++){
//   let line = " ";
//   for (let j = 1; j < i; j++){
//     line = line + "*\t";
//   }
//   console.log(line);
// }


// let arr = [
//   "danish khan",
//   "adali saifi",
//   "naved badu"
// ];
// let narr = arr.map(function (v) {
//   let ans = v.split(" ");
//   let nans = ans[0][0] + "." + ans[1][0];
//   return nans;
// });
// console.log(narr);


// let arr = [2, 23, 4, 34, 5, 6, 7, 8];
// let narr = arr.map((v) => {
//   if (v % 2 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log(narr);

// let arr = [2, 23, 4, 34, 5, 6, 7, 8];
// let narr = arr.map(v => v * v);
// console.log(narr);

// let narr = arr.filter(v => v % 2 == 0);
// console.log(narr);

// let narr = arr.filter(v => v % 2 == 0).map(v => v * v);
// console.log(narr);

// let arr = [
//     { name: "a", age: 24, gender: "m" },
//     { name: "b", age: 25, gender: "f" },
//     { name: "c", age: 28, gender: "m" },
//     { name: "d", age: 22, gender: "f" },
// ];
// let narr = arr.filter(v => v.gender == "f").map(v,d => (v.age,d.name));
// console.log(narr);

// let arr = [10, 20, 30, 40, 5];
// let narr = arr.reduce((pv, cv)=> pv + cv,5);
// console.log(narr);

// let arr = [
//   [1, 2, 3, 4],
//   [5, 6, 7],
//   [8, 9, 10]
// ];
// let narr = arr.reduce(function (pv, cv) {
//   let ans = pv.concat(cv);
//   return ans;
// });
// console.log(narr);

// let arr = [ 3,  5, 7];
// let narr = arr.some(v => v % 2 == 0);
// console.log(narr);

// Array.prototype.mymap = function (logic) {
//   let res = [];
//   for (let i = 0; i < this.length; i++) {
//     if (i == true) {

//       res.push(logic(this[i]));
//     }
//   }
//   return res;
// }
// let narr = [ 3,  5,  7];
// let ans = narr.mymap(v => v % 2 == 0);
// console.log(ans);

// let product = [
//   { name: "T-HYUGT", price: 25 },
//   { name: "shirt", price: 250 },
//   { name: "hirt", price: 205 },
//   { name: "rt", price: 5 },
//   { name: "tt", price: 50 },
// ];
// let narr = product.map(function (v) {
//   if (v.price > 100) {
//     return v.name.toUpperCase();
//   } else {
//     return v.name.toLowerCase();
//   }
// })
// console.log(narr);


// let arr= Array.from("danish");
// console.log(arr);

// let arr = [1, 2, 3, 4, 5, 6, 7];
// // let ans = arr.fill(5);
// let ans = arr.copyWithin(2, 3, 6);
// console.log(ans);



// let arr = [2, 3, 0, 5, 0, 6, 0, 8, 0, 9];
// let newarr = arr.filter(x => x > 0);
// let oarr = Array(arr.length - newarr.length).fill(0);
// newarr = newarr.concat(oarr);
// console.log(newarr);

// let n = 2;
// if (n == 0) {
//   console.log("false");
  
// }
// while (n >= 2) {
//   n = n - 2;
// }
// if (n == 1) {
//   console.log("true");
// } else {
//   console.log("false");
// }



// let n = process.argv.slice(2);
// let isprime = true;
// for (let i = 2; i * i <= n; i++){
//   if (n % i == 0) {
//     isprime = false;
//     break;
//   }
// }
// if (isprime) {
//   console.log(`${ n }  prime`);
// } else {
//   console.log(`${n} not prime`);
// }

// let n = process.argv.slice(2);
// function isprime(n) {
//   for (let i = 2; i * i <= n; i++){
//     if (n % i == 0) {
//       isprime = false;
//     }
//   }
//   if (isprime) {
//     console.log("prime");
//   } else {
//     console.log("not  prime");
//   }
// }
// isprime(n);

// let co = process.argv.slice(2);
// // let i = co[2];
// console.log(co[0]);
// console.log(co[1]);
// console.log(co[2]);



// let a = process.argv.slice(2);
// function eo(m) {
//   if (m % 2 == 0) {
//     console.log("even");
//   } else {
//     console.log("odd");
//   }
// }
// eo(a);



// let n = process.argv.slice(2);
// for (let i = 1; i <= n; i++){
//   console.log(i);
// }


// let n = process.argv.slice(2);
// for (let i = 1; i <= n; i++){
//   let line = "";
//   for (let j = 1; j <= i; j++){
//     line = line + "*\t";
//   }
//   console.log(line);
// }


// let n = process.argv.slice(2);
// for (let i = 2; i <= n; i++){
//   let isprime = isprime(i);
//   if (isprime == true) {
//     console.log(i);
//   }
// }
// function IsPrime(x) {
//   let isprime = true;
//   for (let div = 2; div * div <= x; div++){
//     if (x % div == 0) {
//       isprime = false;
//       break;
//     }
//   }
//   return isprime;
// }

// let a = process.argv.slice(2);

// function f(x) {
//   let a = 0;
//   let b = 1;
//   for (let i = 0; i <= x; i++) {
//     let c =  a+b;
//     console.log(a);
//     a = b; b = c;
//   }
// }
// f(a);


   
// let n = process.argv.slice(2);
// let vowels = ["a", "e", "i", "o", "u"];
// let countvowels = (str) => {
//   var count = 0;
//   for (let letter of str.toLowerCase()) {
//     if (vowels.includes(letter)) {
//       count++;
//     }
//   }
//   return count
// }
// console.log(countvowels(n));



// let n = process.argv.slice(2);
// function eo(x) {
  //   if (x % 2 == 0) {
    //     console.log("even");
    //   } else {
      //     console.log("odd");
      //   }
      // }
      // eo(x)
      
      
      
      
// let n = process.argv.slice(2);
// let isprime = true;
// for (let i = 2; i * i <= n; i++){
  //   if (n % i == 0) {
    //     isprime = false;
    //     break;
    //   }
    // }
    // if (isprime) {
      //   console.log("prime");
      // } else {
        //   console.log("not prime");
        // }
//




// let n = process.argv.slice(2);
// function isprime() {
  //   let isprime = true;
  //   for (let i = 2; i * i <= n; i++){
//     if (n % i == 0) {
  //       isprime = false;
  //       break;
  //     }
  //   }
  //   if (isprime) {
    //     console.log("prime");
    //   } else {
      //     console.log("not prime");
      //   }
      // }
      // isprime(n)
      
      
      
//
// let a = 0;
// let b = 1;
// for (let i = 0; i <= n; i++){
  //   let c = a + b;
  //   console.log(a);
  //   a = b;
  //   b = c;
  // }
  
  // function fb() {
    //   let a = 0;
    //   let b = 1;
    //   for (let i = 0; i <= n; i++){
      //     return a + b;
      //   }
//   a = b;
//   b = c;
// }
// fb(n)
// let ans = fb();
// console.log(ans);


// for (let i = 1; i <= n; i++){
  //   let line = "";
  //   for (let j = 1; j <= i; j++){
    //     line = line + "*\t";
    
    //   }
    //   console.log(line);
    // }
    
    
    
    // if (n == 0 || n == 1) {
      //   console.log(1);
      // } else {
        //   let fact = 1;
        //     fact = fact * i;
        //   }
        //   console.log(fact);
        // }
        
        
        
        // function fact() {
          //   if (n == 0 || n == 1) {
            //     return 1;
            //   } else {
              //     let f =1
              //     for (let i = 1; i <= n; i++) {
                //       f = f * i;
                //       console.log(f);
                //     }
                //   }
                // }
                // fact(n)
                
                
//                 let arr = [2, 3, 4, 5, 6]
//                 // let n = process.argv.slice(2);
//                 let ans = n.map((v, i) => {
//                   return v *v;
//                 });
// console.log(ans);


// for (let i = 1; i <= 10; i++) {
//   setTimeout(function () {
//     console.log(i);
//   },2000 * i)
// }

// let arr = [
//   "Danish khan",
//   "Amit malik",
//   "khan sir"
// ];
// let iarr = arr.map(function (v, i) {
//   let ans = v.split(" ");
//   let oans = ans[0][0] + " " + ans[1][0];
//   let ooan = oans.toLocaleUpperCase();
//   return ooan;
// });
// console.log(iarr);


// let oarr = arr.map(v => v % 2 == 0);
// console.log(oarr);

// let oans = arr.filter(v => v % 2 == 0);
// console.log(oans);


// let oarr = arr.filter(v => v % 2 == 0).map(v => v * v);
// console.log(oarr);

// let arr = [
  //   { name: "a", age: 14, gender: "m" },
  //   { name: "b", age: 24, gender: "f" },
  //   { name: "c", age: 34, gender: "m" },
  //   { name: "d", age: 44, gender: "f" },
  //   { name: "e", age: 54, gender: "m" },
  //   { name: "f", age: 64, gender: "f" },
  //   { name: "g", age: 74, gender: "f" },
  // ];
  // let oarr = arr.filter(v => v.gender == 'f').map(v => v.age);
  // console.log(oarr);
//


// let arr = [2, 3, 7, 4, 5, 6,];
// let oans = arr.reduce(function (pv, cv) {
//   return pv + cv;
// },100);
// console.log(oans);

// let oans = arr.reduce((pv, cv) => pv + cv,100);
// console.log(oans);

// let arr = [
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9],
//   [3, 4, 5, 6],
//   [2, 3, 4, 5]
// ];
// let oarr = arr.reduce(function (pv, cv) {
//   let ooo = pv.concat(cv);
//   return ooo;
// });
// console.log(oarr);

// let a = "hello i am danish";
// let oarr = a.split(" ");
// console.log(oarr);
// let ans = oarr.map(v => v[0].toLocaleUpperCase()+v.slice(1));

// console.log(ans)



// function longest(str){
//   // Split the string into array
//   str = str.split(" ")
//   // Return the first sorted item of the Array
//   return str.sort((a, b) => b.length - a.length)[0]
// }

// console.log(longest("Hello guys this is"))



// let arr = ["apple", "mango", "apple","orange"];
 
// function removeDuplicates(arr) {
//     return arr.filter((item,
//         index) => arr.indexOf(item) === index);
// }
// console.log(removeDuplicates(arr));

// let str = process.argv.slice(2);
// function ispalindrome() {
//   let relval = str.toString().split("").reverse().join("");
//   let oval = str.toString();
//   if (relval == oval) {
//     console.log("palindrome");
//   } else {
//     console.log("not palindrome");
//   }
// }
// ispalindrome();


// let str = "danish khan"
// let ans = str.split(" ");
// let oans = ans.reverse();
// console.log(oans);


// let arr = [1, 2, 3, 4, 5, 6, 7, 1, 3, 5, 6, 8];
// let obj = {};
// for (let i = 0; i < arr.length; i++){
//  obj[arr[i]] = obj[arr[i]] == undefined ? 1 : obj[arr[i]] + 1;
// }
// console.log(obj);

// Array.prototype.mymap = function (logic) {
//   let res = [];
//   for (let i = 0; i < this.length; i++){
//     res.push(logic(this[i]));
//   }
//   return res;
// }
// let a = [1, 2, 3, 4, 5];
// let ans = a.mymap((e) => e + e);
// console.log(ans);

// let data = 'https://jsonplaceholder.typicode.com/users';
//  async function fatchdata() {
//    let res = fetch(data);
//    let cdata = await res;
//    let finaldata = await cdata.json()
//    console.log(finaldata);

// }
// fatchdata()


// let arr = [1,2,3,4,34,24]
// let sum = 0;
// console.log('✌️sum --->', sum);
// for(i=0;i<arr.length;i++){
// sum += arr[i];
// }
// // console.log(sum);

// let item = [
//   { name: "danish", value: 2 },
//   { name: "danissdh", value: 4 },
//   { name: "danishdsd", value: 1 },
// ];
// item.sort((a, b) => {
//   return b.value - a.value;
// });