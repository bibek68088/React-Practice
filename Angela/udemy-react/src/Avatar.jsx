import contacts from "./contact"; 
const Avatar = (props) => {
  return (
    <div>
        <img className="circle-img" src={props.img} alt="avatar-img" />
    </div>
  )
}

export default Avatar;