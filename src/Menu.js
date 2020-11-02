import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import MenuOpen from './icons/menu-open.svg'
import MenuClose from './icons/menu-close.svg'

class Menu extends React.Component {

  constructor(props) {
    super(props)
    this.state = {maximized: false}
  }

  stripSlashes(pathname) {
    if (pathname.charAt(0) === '/') {
      pathname = pathname.substr(1)
    }
    if (pathname.charAt(pathname.length - 1) === '/') {
      pathname = pathname.substr(0, pathname.length - 1)
    }
    return pathname
  }

  set maximized(maximized) {
    if (maximized) {
      document.body.classList.add('no-scroll')
    } else {
      // TODO Remove no-scroll class when window is resized
      document.body.classList.remove('no-scroll')
    }
    this.setState({maximized: maximized})
  }

  render() {
    const currentPathname = this.stripSlashes(this.props.location.pathname)
    const className = this.state.maximized ? 'maximized' : 'minimized'
    return (
      <nav className={className}>
        <div>
          <div className="logo">
            <div>
              {currentPathname === '' ? 'Smart Casual' : <Link to="/" onClick={() => this.maximized = false}>Smart Casual</Link>}</div>
            <img
                id={this.state.maximized ? 'menu-close' : 'menu-open'} 
                src={this.state.maximized ? MenuClose : MenuOpen}
                alt={this.state.maximized ? 'Close main menu' : 'Open main menu'}
                onClick={() => this.maximized = !this.state.maximized} />
          </div>
          <ul className={`main-menu ${className}`}>
            <MenuItem onClick={() => this.maximized = false} currentPathname={currentPathname} pathname="interior-design" title="Interior Design">
              <ul className="submenu">
                <li className="selected">All</li>
                <li><Link to="/residential/">Residential</Link></li>
                <li><Link to="/retail/">Retail</Link></li>
              </ul>
            </MenuItem>
            <MenuItem onClick={() => this.maximized = false} currentPathname={currentPathname} pathname="interior-photo" title="Interior Photo" />
            <MenuItem onClick={() => this.maximized = false} currentPathname={currentPathname} pathname="contacts" title="Contacts" />
          </ul>
          <ul className={`language-menu ${className}`}>
            <li className="selected">EN</li>
            <li><Link to="/lv/">LV</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}

const MenuItem = props => {
  if (props.currentPathname === props.pathname) {
    return <li className="selected">{props.title}{props.children}</li>
  } else {
    return <li><Link to={`/${props.pathname}/`} onClick={props.onClick}>{props.title}</Link></li>
  }
}

export default withRouter(Menu)
