import Index from './Index.jsx'
import './App.css';
import Card from './Card.jsx';
import contacts from './contact.js';
import Avatar from './Avatar.jsx';

function createCard(contact){
  return(
    <Card
    id = {contact.id} //to show the id in console
    key = {contact.id}// key is special property for identifying the data
    name = {contact.name}
    img = {contact.imgURL}
    tel = {contact.phone}
    email = {contact.email}
    />
  );
}

const App = () => {

  return (
    <div>
      {/* <h1>My Contact</h1> */}
      {/* <Index name="Beyonce"  img ="/vite.svg"tel= "+977 1242" sign="@beyoncee"/>
      <Index name="Drake" img ="/vite.svg" tel ="+977 125125" sign ="@drake" /> */}

      <h1 className='heading'>My Contacts</h1>
      <Avatar
      img = "https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTc2NDY1MjA3MzYxODA3NTcz/why-is-zoro-the-best-character-in-one-piece.jpg"
      />

      {contacts.map(createCard)}
      

      {/* <Card
        name ={contacts[0].name}
        img ={contacts[0].imgURL}
        tel ={contacts[0].phone}
        email = {contacts[0].email}
      />
      <Card
        name ={contacts[1].name}
        img ={contacts[1].imgURL}
        tel ={contacts[1].phone}
        email = {contacts[1].email}
      /><Card
      name ={contacts[2].name}
      img ={contacts[2].imgURL}
      tel ={contacts[2].phone}
      email = {contacts[2].email}
    /> */}
      
    </div>
  )
}

export default App;
