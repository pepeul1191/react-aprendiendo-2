export const Greet = (props) => {
  console.log(props);
  return <div className="">
    hola {props.name} - {props.age} + {1+1}
  </div>
}
