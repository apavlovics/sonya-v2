import {useTranslation} from 'react-i18next'

export default function Contacts() {
  const [t] = useTranslation()
  return (
    <main>
      <h1>{t('Contacts')}</h1>
    </main>
  )
}
