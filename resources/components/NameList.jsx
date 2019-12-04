import Dog from './Dog.jsx'

export const NameList = (props) => {
  const names = [
    {
      id: 1,
      name: 'Kiki',
      age: 4.
    }, 
    {
      id: 2,
      name: 'Koki',
      age: 3,
    }, 
    {
      id: 3,
      name: 'Sila',
      age: 2,
    },
  ]
  const nameList = names.map(dog => 
    <li>edad: {dog.age} - nombre: {dog.name} - <Dog key={dog.id} dog={dog}/></li>
  )
  return <ul>{nameList}</ul>
}
