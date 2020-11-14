import {useTranslation, Trans} from 'react-i18next'
import Phone from './icons/phone.svg'
import Email from './icons/email.svg'

export default function Contacts() {
  const [t] = useTranslation()
  return (
    <main>
      <h1>{t('Contact Us')}</h1>
      <p>{t('Contact Us Text')}</p>
      <div className="contacts">
        <a href="tel:+37122380067">
          <img src={Phone} alt="Phone" /> +371 2238 0067
        </a>
        <a href="mailto:info@smartcasual.lv">
          <img src={Email} alt="Email" /> info@smartcasual.lv
        </a>
      </div>
      <h1>{t('Requisites')}</h1>
      <div className="requisites">
        <div className="key">{t('Registration Number')}</div>
        <div className="value">40103681274</div>
        <div className="key">{t('VAT Number')}</div>
        <div className="value">LV40103681274</div>
        <div className="key">{t('Legal Address')}</div>
        <div className="value">
          <Trans i18nKey="Legal Address Value">
            Talivalza iela 21A-20, Riga, <span className="no-wrap">LV-1006, Latvia</span>
          </Trans>
        </div>
        <div className="key">{t('Bank')}</div>
        <div className="value">Swedbank AS</div>
        <div className="key">{t('SWIFT Code')}</div>
        <div className="value">HABALV22</div>
        <div className="key">IBAN</div>
        <div className="value">LV03HABA0551036679446</div>
      </div>
    </main>
  )
}
