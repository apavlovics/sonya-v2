const Footer = () => {
  // TODO Switch to server time
  const currentYear = new Date().getFullYear()
  return (
    <footer>
      ©&nbsp;{currentYear} Smart Casual<br /><a href="mailto:info@smartcasual.lv">info@smartcasual.lv</a>
    </footer>
  )
}

export default Footer
