
import './App.css'
import Card from './Card'


function App() {


  return (
    <>
      <div className='wrapper'>
        <Card
        img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp9370qCufMJGZ3FK2HIgPTcbGdkyVtNExSg&usqp=CAU"
        title = "Title is given here"
        description = "Description is written here. You can read the documents in this page where every details are mentioned here"
        button = "Click Me"
        />
        <Card
        img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCZGM_Xy3BFXJkx5CLTSe18Ez_aTmMGdBj1Q&usqp=CAU"
        title = "Title is given here"
        description = "Description is written here. You can read the documents in this page where every details are mentioned here"
        button = "Click Me"
        />
        <Card
        img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSblE1k1Tw_V44RogaNohaaSnlV9YTPsKgeIw&usqp=CAU"
        title = "Title is given here"
        description = "Description is written here. You can read the documents in this page where every details are mentioned here"
        button = "Click Me"
        />
      </div>
    </>
  )
}


export default App
