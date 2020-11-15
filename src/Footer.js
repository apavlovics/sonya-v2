// Social icons have obfuscated filenames to prevent Adblock Plus false positives
import Facebook from './icons/face.svg'
import Instagram from './icons/gram.svg'

export default function Footer() {

  // TODO Switch to server time
  const currentYear = new Date().getFullYear()
  return (
    <footer>
      <div class="copyright">
        <span className="no-wrap">© {currentYear}</span> <span className="no-wrap">Smart Casual SIA</span><br />
        <a href="tel:+37122380067"><span className="no-wrap">+371 2238 0067</span></a><br />
        <a href="mailto:info@smartcasual.lv">info@smartcasual.lv</a>
      </div>
      <div class="social">
        <a><div><img src={Instagram} /></div></a>
        <a><div><img src={Facebook} /></div></a>
      </div>
    </footer>
  )
}
