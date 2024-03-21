import './App.css';
import Header from './components/Header.jsx';
import Note from './components/Note.jsx';
import Footer from './components/Footer.jsx';
import Notes from './components/Notes.js';

// console.log(Notes);


function App() {
 

  return (
    <>
      <div>
      <Header />
      {Notes.map((noteItem) =>
        <Note 
        key = {noteItem.key} // key for unique values
        title = {noteItem.title}// inside braces fnc_valuename and data_name from imported is selected 
        content = {noteItem.content}
      />
      )}
      <Footer />
      </div>

    </>
  )
}

export default App
