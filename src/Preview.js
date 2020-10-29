import React from 'react'

class Preview extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      size: props.size,
      url: props.url,
      title: props.title,
      year: props.year,
      focused: props.focused,
      desaturated: props.desaturated,
    }
  }

  render() {
    const extraClassName = this.state.focused ? " focused" : this.state.desaturated ? " desaturated" : ""
    return (
      <div
        className={`preview ${this.state.size}${extraClassName}`}
        style={{backgroundImage: `url(/projects/${this.state.url}/cover.jpg)`}}
        onMouseEnter={() => this.setState({focused: true})}
        onMouseLeave={() => this.setState({focused: false})}>
        <a href={`/design/${this.state.url}/`}>
          <div className={`details${this.state.focused ? " visible" : ""}`}>
            <h2>{this.state.title}</h2>
            <span>{this.state.year}</span>
          </div>
        </a>
      </div>
    )
  }
}

export default Preview
