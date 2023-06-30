import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Trans, useTranslation } from 'react-i18next'
import Footer from './Footer'
import { updateTitle, setErrorModeEnabled } from './Utilities'

export default function PageNotFound() {
  const [t] = useTranslation()

  useEffect(() => {
    setErrorModeEnabled(true)
    return () => {
      setErrorModeEnabled(false)
    }
  })

  return (
    <div>
      {updateTitle(t('Page Not Found'))}
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
