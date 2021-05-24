import PropTypes from 'prop-types'
import Button from './Button'

// const Header = ({ title })
const Header = (props) => {
  return (
    <header className='header'>
      {/* <h1 style={headingStyle}>ok</h1> */}
      <h1 style={headingStyle}>{props.title}</h1>
      <Button color='green' text='hello' />
      
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
