// Add custom Jest matchers for asserting on DOM nodes
// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'
import * as matchers from 'jest-extended';

// Stub window scrolling during testing
const noop = () => { }
Object.defineProperty(window, 'scrollTo', { value: noop, writable: true })

// Add matchers from Jest Extended
expect.extend(matchers);
