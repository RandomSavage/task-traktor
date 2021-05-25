import PropTypes from 'prop-types'
import Button from './Button'

// const Header = ({ title })
const Header = (props) => {
  const onClick = () => {
    console.log("Click")
  }
  return (
    <header className='header'>
      {/* <h1 style={headingStyle}>ok</h1> */}
      <h1 style={headingStyle}>{props.title}</h1>
      <Button color='green' text='Add' onClick={onClick}/>
      
    </header>
  )
}

Header.defaultProps = {
  title: 'Task_Traktor'
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

const headingStyle = {
  color: 'red',
  backgroundColor: 'black'
}

export default Header
