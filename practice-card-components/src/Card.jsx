
const Card = (props) => {
  return (
    <div className="card">
      <div className="card__body">
        <img src={props.img} alt="Image-file" className="card__img" />
        <h2 className="card__title">
          {props.title}
        </h2>
          <p className="card__description">
            {props.description}
          </p>
          <button className="card__btn">{props.button}</button>
      </div>
    </div>
  )
}

export default Card

