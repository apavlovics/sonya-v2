import { render, screen } from '@testing-library/react'
import { HelmetProvider } from 'react-helmet-async'
import Contact from './Contact'

// Load i18next instance for translations to work
import './i18n'

describe('Contact should', () => {

  test('render the email', () => {
    render(<HelmetProvider><Contact /></HelmetProvider>)

    const elements = screen.getAllByText(/sonya@sonya.lv/)
    expect(elements).toHaveLength(2)
  })
})
