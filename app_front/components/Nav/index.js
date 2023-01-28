import Link from 'next/link'
import navStyles from './Nav.module.css'

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/history'>Requests Historic</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav