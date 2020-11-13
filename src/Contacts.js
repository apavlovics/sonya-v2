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
      <h1>Requisites</h1>
      <div className="requisites">
        <div class="key">Registration Number</div>
        <div class="value">40103681274</div>
        <div class="key">VAT Number</div>
        <div class="value">LV40103681274</div>
        <div class="key">Legal Address</div>
        <div class="value">Tālivalža iela 21A-20, Rīga, LV-1006</div>
        <div class="key">Bank</div>
        <div class="value">Swedbank AS</div>
        <div class="key">SWIFT Code</div>
        <div class="value">HABALV22</div>
        <div class="key">IBAN</div>
        <div class="value">LV03 HABA 0551 0366 7944 6</div>
      </div>
    </main>
  )
}
