import { NavLink } from "react-router-dom"

const navLinkStyle = { padding: '20px 30px', fontSize: '24px', border: '1px solid black' }
const getNavLinkWithActive = ({isActive}) => ({...navLinkStyle, color: isActive ? "red":'bisque'})


export const Nav = () => {
    return (
              <div style={{display: 'flex', gap: '15px'}}>
      <NavLink style={getNavLinkWithActive} to='/'>Home</NavLink>
      <NavLink style={getNavLinkWithActive} to='/movies'>Movies</NavLink>
      </div>
    )
}