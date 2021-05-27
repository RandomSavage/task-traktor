import PropTypes from 'prop-types'
import Button from './Button'

// const Header = (props)
const Header = ({ title, onAdd,showAdd}) => {
  // const onClick = () => {
  //   console.log("Click")
  // }
  return (
    <header className='header'>
      {/* <h1 style={headingStyle}>ok</h1> */}
      <h1 style={headingStyle}>{title}</h1>
      <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
      
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
