import {render, screen} from '@testing-library/react'
import App from './App'

test('renders Smart Casual name', () => {
  render(<App />)
  const elements = screen.getAllByText(/smart casual/i)
  elements.forEach(element => expect(element).toBeInTheDocument())
})
