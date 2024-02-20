/* hooks: if we speak blantly then hooks is a function which returns a array and 
in "const[count,setCount]" count is variable from returned array and setCount is function
*/

/*below we r making custom hook means we can create our own hooks
 and making custom hooks the extension is .js NOT .jsx as it purely returns js
 and while making hooks we write "use" for formality convinience

 EG:
 function hello (){
    return []
 }

 let chooks=custom hooks
 */

import { useEffect, useState } from "react";

function useCurrencyInfo(currency){  // we need to give args while making customshooks or chooks

    const [data,setData] =useState({})

     //here we calling API when this hook is get load/use or when that currency get change eg inr,usd in url thats why we gave "currency" as dependency line29
     useEffect(() =>{
         fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
         .then((res) => res.json())
         .then((res) => setData(res[currency]))
         console.log(data); //to check what is in data
     },[currency])
     return data
}

//now to return function or values from the function see below line in which we returning the entire component and use it again and again 
export default useCurrencyInfo;







