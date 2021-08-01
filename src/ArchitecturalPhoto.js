import {useTranslation} from 'react-i18next'
import Footer from './Footer'
import {formatTitle} from './Utilities'

export default function ArchitecturalPhoto() {
  const [t] = useTranslation()
  return (
    <div>
      {formatTitle(t('Architectural Photo'), t('Main Title'))}
      <main>
        <h1>{t('Architectural Photo')}</h1>
      </main>
      <Footer />
    </div>
  )
}
