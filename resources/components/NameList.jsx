import Dog from './Dog.jsx'

export const NameList = (props) => {
  const names = [
    {
      name: 'Kiki',
      age: 4.
    }, 
    {
      name: 'Koki',
      age: 3,
    }, 
    {
      name: 'Sila',
      age: 2,
    },
  ]
  const nameList = names.map(dog => 
    <li>edad: {dog.age} - nombre: {dog.name} - <Dog dog={dog}/></li>
  )
  return <ul>{nameList}</ul>
}
