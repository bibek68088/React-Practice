import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
const App = () => {

  const [title, setTitle]  = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const [isPending, setIsPending] = useState(false);


  const handleSubmit = (e) =>{
    e.preventDefault();
    const blog = {title, body, author};

    setIsPending(true);

    // console.log(blog);
    axios.get(''),{
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(blog)      
    }.then(() => {
      console.log("New blog added");
      setIsPending(false);
    }).catch(err  =>{
      console.log("Error");
    })
  }

  return (
    <Main>
      <div className='create'>
    <h2>Add a New Blog</h2>


    <form onClick={handleSubmit}>
      <label htmlFor="blog-tile">Blog Title</label>
      <input type="text"
      required
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="">Blog body:</label>
      <textarea name="" id="" cols="30" rows="10" 
      required
      value={body}
      onChange={(e) => setBody(e.target.value)}      
      ></textarea>
      <label htmlFor="">Blog author:</label>
      <select 
      value = {author}
      onChange={(e) => setAuthor(e.target.value)}
      >
        <option value="mario">Mario</option>
        <option value="pain">pain</option>
      </select>
      {!isPending && <button>Add Blog</button>}
      {isPending && <button disabled>Adding blog...</button>}
      <p> Title: {title}</p>
      <p> Body: {body}</p>
      <p> Author: {author}</p>
    </form>
  </div></Main>
    
  )
}

export default App;

const Main = styled.div`

max-width: 400px;
margin: 0 auto;
text-align: center;

label{
  text-align: left;
  display: block;
}

h2{
  font-size: 20px;
  color: red;
  margin-bottom: 30px;
}

input, textarea, select{
  width: 100%;
  padding: 6px 10px;
  margin: 10px 0;
  border: 1px solid black;
  box-sizing: border-box;
  display: block;

}

button{
  background: red;
  color: white;
  border: 0;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
}


`;