
const Index = (props) => {
    console.log(props);
  return (
    <div>
        <p>{props.name}</p>
        <img src={props.img} alt="" />
        <p>{props.tel}</p>
        <p>{props.sign}</p>
    </div>
  )
}

export default Index