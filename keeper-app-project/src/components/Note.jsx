
const Note = (props) => {
  return (
    <div className="note">
        <h1>{props.title}</h1> {// title is the attributes of App.jsx Note component
          }
        <p>{props.content}</p>


    </div>
  )
}

export default Note;