import React from 'react'
import {Link, withRouter} from 'react-router-dom';
import MenuOpen from './icons/menu-open.svg'
import MenuClose from './icons/menu-close.svg'

class Menu extends React.Component {

  constructor(props) {
    super(props)
    this.state = {maximized: false}
  }

  render() {
    const className = this.state.maximized ? "maximized" : "minimized"

    // TODO Mark selected links
    console.log(this.props.location)
    return (
      <nav className={className}>
        <div>
          <div className="logo">
            <div><Link to="/">Smart Casual</Link></div>
            <img
                id={this.state.maximized ? "menu-close" : "menu-open"} 
                src={this.state.maximized ? MenuClose : MenuOpen}
                alt={this.state.maximized ? "Close main menu" : "Open main menu"}
                onClick={() => {
                  const maximized = !this.state.maximized
                  if (maximized) {
                    document.body.classList.add('no-scroll')
                  } else {
                    // TODO Remove no-scroll class when window is resized
                    document.body.classList.remove('no-scroll')
                  }
                  this.setState({maximized: maximized})
                }} />
          </div>
          <ul className={`main-menu ${className}`}>
            <li className="selected">Interior Design
              <ul className="submenu">
                <li className="selected">All</li>
                <li><Link to="/residential/">Residential</Link></li>
                <li><Link to="/retail/">Retail</Link></li>
              </ul>
            </li>
            <li><Link to="/interior-photo/">Interior Photo</Link></li>
            <li><Link to="/contacts/">Contacts</Link></li>
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

export default withRouter(Menu)
