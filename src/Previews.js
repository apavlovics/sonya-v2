import {useState} from 'react'
import {Link, Route, useRouteMatch} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import {LazyLoadImage, trackWindowScroll} from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/opacity.css'
import AnimatedSwitch from './AnimatedSwitch'
import Footer from './Footer'
import Gallery from './Gallery'
import PageNotFound from './PageNotFound'
import {formatTitle, stripSlashes} from './Utilities'

function Previews(props) {
  const [t, i18n] = useTranslation()
  const {path, url} = useRouteMatch()

  const [previews, setPreviews] = useState(
    [{
      size: 'large',
      url: 'fjordi',
      title: {
        en: 'Fjordi Apartment',
        lv: 'Fjordi apartamenti',
      },
      year: '2021',
      cover: '4.jpg',
      galleryLength: 5,
      focused: false,
      desaturated: false,
    }, {
      size: 'large',
      url: 'jauna-teika',
      title: {
        en: 'Jauna Teika Apartment',
        lv: 'Jaunā Teika apartamenti',
      },
      year: '2020',
      cover: '2.jpg',
      galleryLength: 7,
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
      <Route exact path={path}>
        {formatTitle(t('Interior Design'), t('Main Title'))}
        <main className="previews">
          {previews.map(preview => (
            <Preview
                key={preview.url}
                size={preview.size}
                url={`/${stripSlashes(url)}/${preview.url}/`}
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
      </Route>
      {previews.map(preview => (
        <Route key={preview.url} exact path={`${path}/${preview.url}`}>
          {formatTitle(preview.title[currentLanguage], t('Main Title'))}
          <Gallery parentPath={path} preview={preview} setMenuHidden={props.setMenuHidden} />
        </Route>
      ))}
      <Route path="*">
        <PageNotFound />
      </Route>
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
          <h2>{props.title}</h2>
          <span>{props.year}</span>
        </div>
      </Link>
    </div>
  )
}

// Track window scroll in the parent component and pass to lazy loaded images to optimize performance
// https://www.npmjs.com/package/react-lazy-load-image-component
export default trackWindowScroll(Previews)
