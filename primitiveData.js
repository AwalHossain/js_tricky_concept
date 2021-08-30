/* Primitive data types
number
string
boolean
null
undefined

*/

const a = 8;
const b = a;

const c = {
    job:'web'
}
const d = c;
d.job = 'front'
console.log(d, c);