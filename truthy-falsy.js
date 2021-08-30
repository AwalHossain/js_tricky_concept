/* 
Truth Value:
True,
string,
any white space string,
any positive or negetive number ,
[],
{},

----------------------
Falsey Value
false,
0
empty string,
null,
undefined
*/

let x;

if(x){
    console.log(typeof x,'This is truthy Value');
}
else{
    console.log(typeof x,'This is falsey value');
}
console.log(x);