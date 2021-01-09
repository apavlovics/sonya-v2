import {Link} from 'react-router-dom'
import {Trans, useTranslation} from 'react-i18next'
import Footer from './Footer'
import {formatTitle} from './Utilities'

export default function PageNotFound() {
  const [t] = useTranslation()
  return (
    <div>
      {formatTitle(t('Page Not Found'))}
      <main>
        <h1>{t('Page Not Found')}</h1>
        <p>
          <Trans i18nKey="Page Not Found Text">
            This page is not found. Visit <Link to="/">the main page</Link> instead.
          </Trans>
        </p>
      </main>
      <Footer />
    </div>
  )
}
