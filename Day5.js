// 1-Programs in anonymous function and IIFE and Arrow function


// a-print odd numbers in an array

[1,2,3,4,5].forEach((num) => num % 2 === 1 && console.log(num));



(function(array){
    for(var i = 0 ; i< array.length ; i++){
               if(array[i]%2!=0){
                  console.log(array[i])
               } 
          }
    })([1,2,3,4,5])


        oddNumbers = (array) => {
        for(var i = 0 ; i< array.length ; i++){
             if(array[i]%2!=0){
                console.log(array[i])
             } 
        }
             }

//    --------------------------------------------------------------------------------------------------------------------

// b-Convert all the strings to title caps in a string array

function string (str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    return str.join(' ');
  }


  (function (str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    return str.join(' ');
  })("MY NAME IS KOUSHIK");



  title = (str) => {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    return str.join(' ');
  }            


// ------------------------------------------------------------------------------------------------------------------

// c-sum of all numbers in an array

function num(array){
    var sum = 0;
    for(var i = 0 ; i< array.length ; i++){
       sum = sum + array[i];
     }
     return sum;
  }


  (function(array){
    var sum = 0;
         for(var i = 0 ; i< array.length ; i++){
            sum = sum + array[i];
          }
          return sum;
    })([1,2,3,4,5])

    sum = (array)=>{
        var sum = 0;
             for(var i = 0 ; i< array.length ; i++){
                sum = sum + array[i];
              }
              return sum;
              }


    // ------------------------------------------------------------------------------------------------------------------
    
    // d-Return all the prime numbers in an array

    function prime(numArray){
        numArray = numArray.filter((number) => {
          for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) return false;
          }
          return true;
        });
        console.log(numArray);
    }


    (  
        function(numArray){
           numArray = numArray.filter((number) => {
             for (var i = 2; i <= Math.sqrt(number); i++) {
               if (number % i === 0) return false;
             }
             return true;
           });
           console.log(numArray);
       })([1,2,3,4,5,6,7,8,9])


       primeNumber = (num) => {
        num = num.filter((number) => {
          for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) return false;
          }
          return true;
        });
        primeNumber = (num) => 1,2,3,4,5,6,7,8,9
        console.log(num);
    }

              
    // -----------------------------------------------------------------------------------------------------------------------------

    // e-Return all the palindromes in an 
    
       function palindrome(arr, n)
    {
        for (let i = 0; i < n; i++)
        {
            let ans = isPalindrome(arr[i]);
            if (ans == false)
                return false;
        }
        return true;
    }

    (  function (arr, n)
        {
            for (let i = 0; i < n; i++)
            {
                let ans = isPalindrome(arr[i]);
                if (ans == false)
                    return false;
            }
            return true;
        })([1,2,3])

        Palindrome = (arr, n) =>
    {
        for (let i = 0; i < n; i++)
        {
            let ans = isPalindrome(arr[i]);
            if (ans == false)
                return false;
        }
        return true;
    }


// ----------------------------------------------------------------------------------------------------------



// g-Remove duplicates from an Array

function remove(array){
  let dup = [...new Set(array)];
  console.log(dup);
}


(function(array){
  let dup = [...new Set(array)];
  console.log(dup);
 })([1,1,2,3,4])




//  ----------------------------------------------------------------------------------------------------------

// h-Rotate an array by K times


function rotate(a , k){
  k = k % a.length;
    if(k < 0){
      k += a.length;
    }

    reverse(a, 0, a.length - k - 1);
    reverse(a, a.length - k, a.length - 1);
    reverse(a, 0, a.length - 1);
  }
  
    

  (function(a , k){
    k = k % a.length;
      if(k < 0){
        k += a.length;
      }

      reverse(a, 0, a.length - k - 1);
      reverse(a, a.length - k, a.length - 1);
      reverse(a, 0, a.length - 1);
    })([1,2,3,4] , 2)
    


    // ------------------------------------------------------------------------------------------------------------------------------------------------------------