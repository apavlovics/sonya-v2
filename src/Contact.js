import {useTranslation} from 'react-i18next'
import Footer from './Footer'
import {formatTitle} from './Utilities'

export default function Contact() {
  const [t] = useTranslation()
  return (
    <div>
      {formatTitle(t('Contact'), t('Main Title'))}
      <main>
        <img className="portrait" src={`/portrait.jpg`} alt="Portrait" />
        <p>{t('About Text')}</p>
        <p>{t('Contact Text')}</p>
        <div className="contact no-wrap">
          <a href={`mailto:${t('Email')}`}>
            <svg width="1em" height="1em" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.818l5.724 3.465L8 8.917l1.276.766L15 6.218V5.4a1 1 0 0 0-.53-.882l-6-3.2zM15 7.388l-4.754 2.877L15 13.117v-5.73zm-.035 6.874L8 10.083l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738zM1 13.117l4.754-2.852L1 7.387v5.73zM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765l6-3.2z" />
            </svg> {t('Email')}
          </a>
        </div>
      </main>
      <Footer />
    </div>
  )
}
