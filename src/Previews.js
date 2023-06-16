import {useState} from 'react'
import {Link, Route} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import {LazyLoadImage, trackWindowScroll} from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/opacity.css'
import AnimatedSwitch from './AnimatedSwitch'
import Footer from './Footer'
import Gallery from './Gallery'
import PageNotFound from './PageNotFound'
import {updateTitle} from './Utilities'

function Previews(props) {
  const [t, i18n] = useTranslation()

  const [previews, setPreviews] = useState(
    [{
      size: 'large',
      url: 'jurmala',
      title: {
        en: 'Jurmala',
        lv: 'Jūrmala',
      },
      year: '2021',
      cover: '9801-v1.jpg',
      slides: [
        '9799-v1.jpg',
        '9801-v1.jpg',
        '9815-v1.jpg',
        '9818-v1.jpg',
        '9860-v2.jpg',
        '9861-v1.jpg',
      ],
      focused: false,
      desaturated: false,
    }, {
      size: 'medium',
      url: 'fjordi',
      title: {
        en: 'Fjordi',
        lv: 'Fjordi',
      },
      year: '2021',
      cover: '4-v1.jpg',
      slides: [
        '1-v1.jpg',
        '2-v1.jpg',
        '3-v1.jpg',
        '4-v1.jpg',
        '5-v1.jpg',
      ],
      focused: false,
      desaturated: false,
    }, {
      size: 'medium',
      url: 'jauna-teika',
      title: {
        en: 'Jauna Teika',
        lv: 'Jaunā Teika',
      },
      year: '2020',
      cover: '001-v1.jpg',
      slides: [
        '003-v1.jpg',
        '001-v1.jpg',
        '005-v1.jpg',
        '008-v1.jpg',
        '009-v1.jpg',
        '011-v1.jpg',
        '012-v1.jpg',
      ],
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
          preview.desaturated = false // Set true to desaturate other previews (can affect performance)
        }
      } else {
          preview.focused = false
          preview.desaturated = false
      }
      return preview
    })
    setPreviews(updatedPreviews)
  }

  const currentLanguage = i18n.language
  return (
    <AnimatedSwitch>
      <Route
        path="/"
        element={
          <>
            {updateTitle(t('Interior Design Title'))}
            <main className="previews">
              {previews.map(preview => (
                <Preview
                    key={preview.url}
                    size={preview.size}
                    url={`${preview.url}/`}
                    imageSrc={`/projects/${preview.url}/${preview.cover}`}
                    title={preview.title[currentLanguage]}
                    year={preview.year}
                    focused={preview.focused}
                    desaturated={preview.desaturated}
                    onMouseEnter={() => updatePreviews(preview, true)}
                    onMouseLeave={() => updatePreviews(preview, false)} />
              ))}
            </main>
            <Footer />
          </>
      } />
      {previews.map(preview => (
        <Route
          key={preview.url}
          path={preview.url}
          element={
            <>
              {updateTitle(preview.title[currentLanguage])}
              <Gallery preview={preview} setMenuHidden={props.setMenuHidden} />
            </>
          } />
      ))}
      <Route path="*" element={<PageNotFound />} />
    </AnimatedSwitch>
  )
}

function Preview(props) {
  const extraClassName = props.focused ? ' focused' : props.desaturated ? ' desaturated' : ''
  return (
    <div
        className={`preview ${props.size}${extraClassName}`}
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}>
      <Link to={props.url}>
        <div className="placeholder-wrapper">
          {/* Scroll position is passed explicitly to optimize performance */}
          {/* Threshold increased to 500, otherwise images are not sometimes loaded, while visible */}
          <LazyLoadImage
              src={props.imageSrc}
              alt={props.title}
              effect="opacity"
              scrollPosition={props.scrollPosition}
              threshold="500"
              wrapperClassName="placeholder" />
        </div>
        <div className="details">
          <div className="title">{props.title}</div>
          <div className="year">{props.year}</div>
        </div>
      </Link>
    </div>
  )
}

// Track window scroll in the parent component and pass to lazy loaded images to optimize performance
// https://www.npmjs.com/package/react-lazy-load-image-component
export default trackWindowScroll(Previews)
