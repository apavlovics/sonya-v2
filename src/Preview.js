const Preview = props => {
  const extraClassName = props.focused ? " focused" : props.desaturated ? " desaturated" : ""
  return (
    <div
        className={`preview ${props.size}${extraClassName}`}
        style={{backgroundImage: `url(/projects/${props.url}/cover.jpg)`}}
        onMouseEnter={() => props.onMouseEnter()}
        onMouseLeave={() => props.onMouseLeave()}>
      <a href={`/design/${props.url}/`}>
        <div className={`details${props.focused ? " visible" : ""}`}>
          <h2>{props.title}</h2>
          <span>{props.year}</span>
        </div>
      </a>
    </div>
  )
}

export default Preview
