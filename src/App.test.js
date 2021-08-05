import {render, screen} from '@testing-library/react'
import App from './App'

test('renders the main title', () => {
  render(<App testMode />)
  const elements = screen.getAllByText(/sonya pavlovich/i)
  elements.forEach(element => expect(element).toBeInTheDocument())
})
