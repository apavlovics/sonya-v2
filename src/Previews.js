import React from 'react'
import Preview from './Preview'

class Previews extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      previews: [{
        size: "large",
        url: "jauna-teika",
        title: "Jauna Teika Apartment",
        year: "2020",
        focused: false,
        desaturated: false,
      }, {
        size: "medium",
        url: "andrey-silchenko",
        title: "Andrey Silchenko Hair Salon",
        year: "2016",
        focused: false,
        desaturated: false,
      }, {
        size: "medium",
        url: "open-space",
        title: "Open Space in Central Riga",
        year: "2015",
        focused: false,
        desaturated: false,
      }, {
        size: "large",
        url: "round-house",
        title: "Round House Apartment",
        year: "2012",
        focused: false,
        desaturated: false,
      }]
    }
  }

  updatePreviews(currentPreview, onMouseEnter) {
    const previews = this.state.previews.map(preview => {
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
    this.setState({previews: previews})
  }

  render() {
    return (
      <main>
        {this.state.previews.map(preview => (
          <Preview
              key={preview.url}
              size={preview.size}
              url={preview.url}
              title={preview.title}
              year={preview.year}
              focused={preview.focused}
              desaturated={preview.desaturated}
              onMouseEnter={() => this.updatePreviews(preview, true)}
              onMouseLeave={() => this.updatePreviews(preview, false)} />
        ))}
      </main>
    )
  }
}

export default Previews
