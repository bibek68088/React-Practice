// // import animals , {useAnimals} from './components/animals'
// import './App.css'

// // console.log(animals);

// // console.log(useAnimals(cat));

// const[animal, makeSound] = useAnimals(cat);
// console.log(animal);
// /*-----------destructuting------- */


// // destructuring array
// const [cat, dog] = animals;
// // equivalent to animals at Details 0
// // console.log(cat);

// // const {name , sound}  = cat; //objects
// // equivalent to cat.name
// // console.log(sound);  => meow

// // for default values
// // const {name = 'fluppy', sound ='fuzz'}  = cat;
// // console.log(name);


// const {name, sound, feedingRequirements: {Food, Water}} = cat;
// // nested feedingRequirements properties
// // destrucuting nested properties
// console.log(Food);
// console.log(feedingRequirements);


/**---------Practice session of destructuring----------- */

import Details from "./components/Details";
import cars from "./components/practice";
// import cars from "./components/practice";
// console.log(cars);

function App() {
  return (
    <>
      <div>
        <Details />
      </div>
    </>
  )
}

export default App;
