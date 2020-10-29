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
        year: "2020"
      }, {
        size: "medium",
        url: "andrey-silchenko",
        title: "Andrey Silchenko Hair Salon",
        year: "2016"
      }, {
        size: "medium",
        url: "open-space",
        title: "Open Space in Central Riga",
        year: "2015"
      }, {
        size: "large",
        url: "round-house",
        title: "Round House Apartment",
        year: "2012"
      }]
    }
  }

  renderPreview(preview) {
    return (
      <Preview
        size={preview.size}
        url={preview.url}
        title={preview.title}
        year={preview.year}
      />
    )
  }

  render() {
    return (
      <main>
        {this.state.previews.map(this.renderPreview)}
      </main>
    )
  }
}

export default Previews
