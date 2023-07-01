import { render, screen } from '@testing-library/react'
import App from './App'

describe('App should', () => {

  test('render the main title', () => {
    render(<App testMode />)

    const elements = screen.getAllByText(/sonya pavlovich/i)
    expect(elements).not.toBeEmpty()
    elements.forEach(element => expect(element).toBeInTheDocument())
  })
})
