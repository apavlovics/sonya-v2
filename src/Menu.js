import React from 'react'
import MenuOpen from './icons/menu-open.svg'
import MenuClose from './icons/menu-close.svg'

class Menu extends React.Component {

  constructor(props) {
    super(props)
    this.state = {maximized: false}
  }

  render() {
    const className = this.state.maximized ? "maximized" : "minimized"
    return (
      <nav className={className}>
        <div>
          <div className="logo">
            <div>Smart Casual</div>
            <img
                id={this.state.maximized ? "menu-close" : "menu-open"} 
                src={this.state.maximized ? MenuClose : MenuOpen}
                alt={this.state.maximized ? "Close main menu" : "Open main menu"}
                onClick={() => this.setState({maximized: !this.state.maximized})} />
          </div>
          <ul className={`main-menu ${className}`}>
            <li className="selected">Interior Design
              <ul className="submenu">
                <li className="selected">All</li>
                <li><a href="/residential/">Residential</a></li>
                <li><a href="/retail/">Retail</a></li>
              </ul>
            </li>
            <li><a href="/photography/">Interior Photo</a></li>
            <li><a href="/contacts/">Contacts</a></li>
          </ul>
          <ul className={`language-menu ${className}`}>
            <li className="selected">EN</li>
            <li><a href="/lv/">LV</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Menu
