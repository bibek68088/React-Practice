
const animals = [
    { name: "cat", sound: "meow",
    feedingRequirements: 
    {
        Food: 2,
        Water: 3
    }   
},
    { name: "dog", sound: "bark"}
];

function useAnimals(){
    return[
      animals.name,
      function(){
        console.log(animals.sound);
      }
    ];
  }
  export {useAnimals};


export default animals;