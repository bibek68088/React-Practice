import Details from "./Details";
import Avatar from "./Avatar";
const Card = (props) => {
  return (
    <div>
        <div className="card">
        <div className="top">
            <p>{props.id}</p>
          <h2 className='name'>{props.name}</h2>
          <Avatar img = {props.img} />
        </div>
        <div className="bottom">
            <Details
             detailInfo = {props.tel}
             />
             <Details detailInfo = {props.email}
              />
          {/* <p className='info'>{props.tel}</p>
          <p className='info'>{props.email}</p> */}
        </div>
      </div>
    </div>
  )
}

export default Card;