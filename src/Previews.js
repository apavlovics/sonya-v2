import {useState} from 'react'

export default function Previews() {
  const [previews, setPreviews] = useState(
    [{
      size: 'large',
      url: 'jauna-teika',
      title: 'Jauna Teika Apartment',
      year: '2020',
      focused: false,
      desaturated: false,
    }, {
      size: 'medium',
      url: 'andrey-silchenko',
      title: 'Andrey Silchenko Hair Salon',
      year: '2016',
      focused: false,
      desaturated: false,
    }, {
      size: 'medium',
      url: 'open-space',
      title: 'Open Space in Central Riga',
      year: '2015',
      focused: false,
      desaturated: false,
    }, {
      size: 'large',
      url: 'round-house',
      title: 'Round House Apartment',
      year: '2012',
      focused: false,
      desaturated: false,
    }]
  )

  const updatePreviews = (currentPreview, onMouseEnter) => {
    const updatedPreviews = previews.map(preview => {
      if (onMouseEnter) {
        if (preview === currentPreview) {
          preview.focused = true
          preview.desaturated = false
        } else {
          preview.focused = false
          preview.desaturated = true
        }
      } else {
          preview.focused = false
          preview.desaturated = false
      }
      return preview
    })
    setPreviews(updatedPreviews)
  }

  return (
    <main className="previews">
      {previews.map(preview => (
        <Preview
            key={preview.url}
            size={preview.size}
            url={preview.url}
            title={preview.title}
            year={preview.year}
            focused={preview.focused}
            desaturated={preview.desaturated}
            onMouseEnter={() => updatePreviews(preview, true)}
            onMouseLeave={() => updatePreviews(preview, false)} />
      ))}
    </main>
  )
}

function Preview(props) {
  const extraClassName = props.focused ? ' focused' : props.desaturated ? ' desaturated' : ''
  return (
    <div
        className={`preview ${props.size}${extraClassName}`}
        style={{backgroundImage: `url(/projects/${props.url}/cover.jpg)`}}
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}>
      <a href={`/design/${props.url}/`}>
        <div className={`details${props.focused ? ' visible' : ''}`}>
          <h2>{props.title}</h2>
          <span>{props.year}</span>
        </div>
      </a>
    </div>
  )
}
