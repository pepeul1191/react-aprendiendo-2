import './Stylesheet.css'

const heading = {
  fontWeight: 600,
  textDecoration: 'underline',
}

const Stylesheet = (props) => {
  let className = props.primary ? 'primary' : 'error'
  return (
    <div>
      Stylesheet
      <h1 className={`${className} font-xl`} style={heading}>Contenido</h1>
    </div>
  )
}

export default Stylesheet