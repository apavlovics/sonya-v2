import {render, screen} from '@testing-library/react'
import Footer from './Footer'

// Load i18next instance for translations to work
import './i18n'

describe('Footer should', () => {

  test('render the copyright years', () => {
    render(<Footer />)
  
    const currentYear = new Date().getFullYear()
    const element = screen.getByText(new RegExp(`© 2014–${currentYear}`))
    expect(element).toBeInTheDocument()
  })

  test('render the email', () => {
    render(<Footer />)
  
    const element = screen.getByText(/sonya@sonya.lv/)
    expect(element).toBeInTheDocument()
  })
})
