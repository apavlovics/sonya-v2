import {useTranslation} from 'react-i18next'
import Footer from './Footer'

export default function ArchitecturalPhoto() {
  const [t] = useTranslation()
  return (
    <div>
      <main>
        <h1>{t('Architectural Photo')}</h1>
      </main>
      <Footer />
    </div>
  )
}
