import {useTranslation} from 'react-i18next'

export default function Contacts() {
  const [t] = useTranslation()
  return (
    <main>
      <h1>{t('Contacts')}</h1>
      <p>{t('Contacts Text')}</p>
      <div className="contacts">
        +371 2238 0067<br />
        <a href="mailto:info@smartcasual.lv">info@smartcasual.lv</a>
      </div>
    </main>
  )
}
