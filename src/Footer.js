export default function Footer() {

  // TODO Switch to server time
  const currentYear = new Date().getFullYear()
  return (
    <footer>
      ©&nbsp;{currentYear} Smart Casual SIA<br />
      +371 2238 0067<br />
      <a href="mailto:info@smartcasual.lv">info@smartcasual.lv</a>
    </footer>
  )
}
