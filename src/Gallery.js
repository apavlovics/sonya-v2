import {useEffect} from 'react'
import {withRouter} from 'react-router-dom'
import {useWindowSize} from '@react-hook/window-size'
import {CarouselProvider, Dot, DotGroup, Image, Slider, Slide, ButtonBack, ButtonNext} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import {setScrollingEnabled} from './Utilities'

function Gallery(props) {
  const [width, height] = useWindowSize()

  // Hide the main menu and disable scrolling on mount, do the opposite on unmount
  useEffect(() => {
    props.setMenuHidden(true)
    setScrollingEnabled(false)
    return () => {
      props.setMenuHidden(false)
      setScrollingEnabled(true)
    }
  })

  const carouselClassName = width / height > 1.5 ? 'horizontal' : 'vertical'
  return (
    <CarouselProvider
        className={carouselClassName}
        naturalSlideWidth={1}
        isIntrinsicHeight
        hasMasterSpinner
        totalSlides={props.preview.galleryLength}>
      <ButtonBack className="back-button">
        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
        </svg>
      </ButtonBack>
      <div className="gallery">
        <Slider className="slider">
          {[...Array(props.preview.galleryLength).keys()].map(key => (
            <Slide key={key} index={key} className="slide">
              <Image src={`/projects/${props.preview.url}/gallery/00${key + 1}.jpg`} />
            </Slide>
          ))}
        </Slider>
        <DotGroup
            className="dot-group"
            renderDots={props => {
              const {
                currentSlide,
                totalSlides,
                visibleSlides,
                disableActiveDots,
                showAsSelectedForCurrentSlideOnly,
              } = props
              const dots = []
              for (let i = 0; i < totalSlides; i += 1) {
                const multipleSelected = i >= currentSlide && i < (currentSlide + visibleSlides)
                const singleSelected = i === currentSlide
                const selected = showAsSelectedForCurrentSlideOnly ? singleSelected : multipleSelected
                const slide = i >= totalSlides - visibleSlides ? totalSlides - visibleSlides : i
                dots.push(
                  <Dot
                    key={i}
                    slide={slide}
                    selected={selected}
                    disabled={disableActiveDots ? selected : false}>
                    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                    </svg>
                  </Dot>,
                )
              }
              return dots
            }} />
        <button
            id="close-button"
            onClick={() => {
              if (props.history.length > 1) props.history.goBack()
              else props.history.push(props.parentPath)
            }}>
          <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        </button>
      </div>
      <ButtonNext className="next-button">
        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
        </svg>
      </ButtonNext>
    </CarouselProvider>
  )
}

export default withRouter(Gallery)
