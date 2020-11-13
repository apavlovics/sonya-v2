export default function Footer() {

  // TODO Switch to server time
  const currentYear = new Date().getFullYear()
  return (
    <footer>
      ©&nbsp;{currentYear} Smart Casual SIA<br />
      <a href="tel:+37122380067">+371 2238 0067</a><br />
      <a href="mailto:info@smartcasual.lv">info@smartcasual.lv</a>
    </footer>
  )
}
