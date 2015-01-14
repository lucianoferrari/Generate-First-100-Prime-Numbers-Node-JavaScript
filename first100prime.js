#!/usr/bin/env node

/*
 * This is a Server Side Javascript written for the nodejs engine to  generate
 * the first 1000 prime numbers and write it to a file "first100prime.txt" and write t using the sieve of
 * Eratosthenes method(http://en.wikipedia.org/wiki/Sieve_of_Eratosthenes)
 * The method is efficient for any number below 10,000,000.
 *
 *
 *
 * */
var fs = require('fs');
var arrPrime = [];
var getPrime = function(ar,base){
 var base = base ;
 var arrOdd = ar;
  var ps = arrPrime.length ;

 var i = 0;


   pn = arrOdd.shift();
   arrPrime.push(pn);

   for(i = 0; i < arrOdd.length; i++){

    if((arrOdd[i] % pn) === 0){
     arrOdd.splice(i,1);
    }
   }


 if(arrPrime.length == parseInt(base))
 {
  return arrPrime ;

 }


  return getPrime(arrOdd,base);

};

var primeNumbers = function(base){


 var arrOdd = []
 for( i = 2; i < 20000 ; i++)
 {


   arrOdd.push(i);

 }

 //arr = arrOdd.reverse();
 arr = getPrime(arrOdd,base) ;

 return arr;

};

var fmt = function(k){

 return k.join(",");

};

var p100 = [];
var base = 1000;
p100 = fmt(primeNumbers(base));
//console.log(p100);

output = p100;
outfile = "first100prime.txt";
fs.writeFileSync(outfile,output);
console.log("Script: "+ __filename + " has posted all output to the file " + outfile);
