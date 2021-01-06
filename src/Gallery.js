import {useEffect} from 'react'
import {withRouter} from 'react-router-dom'
import {CarouselProvider, Image, Slider, Slide, ButtonBack, ButtonNext} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

function Gallery(props) {

  // Hide the main menu on mount and show on unmount
  useEffect(() => {
    props.setMenuHidden(true)
    return () => props.setMenuHidden(false)
  })

  return (
    <div className="gallery-wrapper">
      <button
        id="close-button"
        onClick={() => {
          if (props.history.length > 1) props.history.goBack()
          else props.history.push(props.parentPath)
        }}>
        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
        </svg>
      </button>
      <CarouselProvider
          naturalSlideWidth={1}
          isIntrinsicHeight
          hasMasterSpinner
          totalSlides={props.preview.galleryLength}>
        <ButtonBack className="back-button">
          <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" >
            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
          </svg>
        </ButtonBack>
        <Slider className="gallery">
          {[...Array(props.preview.galleryLength).keys()].map(key => (
            <Slide index={key}>
              <Image src={`/projects/${props.preview.url}/gallery/00${key + 1}.jpg`} />
            </Slide>
          ))}
        </Slider>
        <ButtonNext className="next-button">
          <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
          </svg>
        </ButtonNext>
      </CarouselProvider>
    </div>
  )
}

export default withRouter(Gallery)
