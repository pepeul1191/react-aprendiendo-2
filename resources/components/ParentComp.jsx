import { ChildComp } from './ChildComp.jsx'

class ParentComp extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      parentName: 'Papaito',
    }
    this.greetParent = this.greetParent.bind(this);
  }

  greetParent(childName){
    // alert('Hello ' + this.state.parentName)
    alert(`Hello ${this.state.parentName} from ${childName}`)
  }

  render() {
    return (
      <div>
        hola desde el parent
        <ChildComp greetHandler={this.greetParent} />
      </div>
    )
  }
}

export default ParentComp