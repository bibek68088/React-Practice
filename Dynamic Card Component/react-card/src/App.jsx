import Card from './components/Card'
import './App.css'
import Form from './components/Form'

function App() {

  return (
    <>
      <div className='App'>
     <Card imgSrc="https://picsum.photos/300/200"
     imgAlt="Card Image"
     title = "Card Title"
     description="This is the card description. You can add more details about the card here."
     buttonText="Learn More"
     link = "card page"
     />
     <Card
     imgSrc="https://picsum.photos/300/200"
     imgAlt="Card Image"
     title = "Card Title"
     description="This is the card description. You can add more details about the card here."
     buttonText="Learn More"
     link = "card page" />
     {/* <Form /> */}
      </div>
     
    </>
  )
}

export default App;
