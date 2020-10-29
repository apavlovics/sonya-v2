import React from 'react'

class Preview extends React.Component {

  render() {
    const extraClassName = this.props.focused ? " focused" : this.props.desaturated ? " desaturated" : ""
    return (
      <div
        className={`preview ${this.props.size}${extraClassName}`}
        style={{backgroundImage: `url(/projects/${this.props.url}/cover.jpg)`}}
        onMouseEnter={() => this.props.onMouseEnter()}
        onMouseLeave={() => this.props.onMouseLeave()}
      >
        <a href={`/design/${this.props.url}/`}>
          <div className={`details${this.props.focused ? " visible" : ""}`}>
            <h2>{this.props.title}</h2>
            <span>{this.props.year}</span>
          </div>
        </a>
      </div>
    )
  }
}

export default Preview
