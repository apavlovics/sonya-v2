import {useTranslation} from 'react-i18next'

export default function ArchitecturalPhoto() {
  const [t] = useTranslation()
  return (
    <main>
      <h1>{t('Architectural Photo')}</h1>
    </main>
  )
}
