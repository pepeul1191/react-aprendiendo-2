import { Demo } from '../components/Demo.jsx'
import { Welcome }  from '../components/Welcome.jsx'
import { Greet }  from '../components/Greet.jsx'
import { Bye }  from '../components/Bye.jsx'
import { UserGreeting }  from '../components/UserGreeting.jsx'
import ParentComp from '../components/ParentComp.jsx'

export const ContainerHome = () => 
  <div className="container">
    <div className="container">
      <h4>Home</h4>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec.</p>
      <Demo />
      <Demo />
      <Welcome />
      <Greet name="Pepito" age="31" />
      <Greet name="Yacky" age="29" />
      <Greet name="Sila" age="2" />
      <hr/>
      <Bye name="Pepito" age="31" />
      <Bye name="Yacky" age="29" />
      <Bye name="Sila" age="2" />
      <ParentComp />
      <UserGreeting />
    </div>
  </div>
