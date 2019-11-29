export const ChildComp = (props) => {
  console.log(props);
  return <button className="btn btn-primary" onClick={props.greetHandler}>Greet Parent</button>
}
