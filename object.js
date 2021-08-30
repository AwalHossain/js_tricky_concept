// const person = {
//     name: 'Reggie',
//     role: 'Software developer',
//     skills: ['JavaScript', 'HTML', 'CSS'],
//     isTeacher: true
//   };
// const person2 = {
//     lastName: 'berk',
//     kamuk:true
//   };

//   const merge = {
//       ...person,
//       ...person2
//   }

//   const personProps = Object.values(person)
//   console.log(merge);

const myString = {
	string: "Programming with Treehouse is fun!",

  countWords: function (){

    return this.string.split(' ').length;
  }
  
}
const numWords = myString.countWords();
myString.characters = numWords;
console.log(myString);