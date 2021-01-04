import {useRouteMatch, withRouter} from 'react-router-dom'
import {CarouselProvider, Image, Slider, Slide, ButtonBack, ButtonNext} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import {resolveParentPath} from './Utilities'

function Gallery(props) {
  const {path} = useRouteMatch()

  return (
    <div className="gallery-wrapper">
      <button
        id="close-button"
        onClick={() => {
          if (props.history.length > 1) props.history.goBack()
          else props.history.push(resolveParentPath(path))
        }}>
        <svg width="1.7em" height="1.7em" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
        </svg>
      </button>
      <div className="gallery">
        <CarouselProvider
            naturalSlideWidth={1}
            isIntrinsicHeight="true"
            totalSlides={3}>
          <ButtonBack>
            <svg width="1.7em" height="1.7em" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" >
              <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
            </svg>
          </ButtonBack>
          <Slider>
            <Slide index={0}><Image src="/projects/jauna-teika/gallery/001.jpg" /></Slide>
            <Slide index={1}><Image src="/projects/jauna-teika/gallery/002.jpg" /></Slide>
            <Slide index={2}><Image src="/projects/jauna-teika/gallery/003.jpg" /></Slide>
          </Slider>
          <ButtonNext>
            <svg width="1.7em" height="1.7em" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
            </svg>
          </ButtonNext>
        </CarouselProvider>
      </div>
    </div>
  )
}

export default withRouter(Gallery)
