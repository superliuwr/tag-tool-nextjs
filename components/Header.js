import Link from 'next/link'

const linkStyle = {
  fontFamily: "Arial",
  marginRight: 15
}

const Header = () => (
    <div>
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/new">
          <a style={linkStyle}>New Tag</a>
        </Link>
    </div>
)

export default Header
