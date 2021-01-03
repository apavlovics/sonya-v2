import {useTranslation, Trans} from 'react-i18next'
import Footer from './Footer'

export default function Contacts() {
  const [t] = useTranslation()
  return (
    <>
      <main>
        <h1>{t('Contact Us')}</h1>
        <p>{t('Contact Us Text')}</p>
        <div className="contacts no-wrap">
          <a href="tel:+37122380067">
            <svg width="1em" height="1em" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
            </svg> +371 2238 0067
          </a>
          <a href="mailto:info@smartcasual.lv">
            <svg width="1em" height="1em" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.818l5.724 3.465L8 8.917l1.276.766L15 6.218V5.4a1 1 0 0 0-.53-.882l-6-3.2zM15 7.388l-4.754 2.877L15 13.117v-5.73zm-.035 6.874L8 10.083l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738zM1 13.117l4.754-2.852L1 7.387v5.73zM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765l6-3.2z" />
            </svg> info@smartcasual.lv
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
              <span className="no-wrap">Talivalza iela 21A-20</span>, Riga, <span className="no-wrap">LV-1006, Latvia</span>
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
      <Footer />
    </>
  )
}
