import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <p>CopyStuff &copy; 2021</p>
      <Link to="/about">About</Link>
      <Link to="/Lab">Lab</Link>
    </footer>
  )
}

export default Footer
