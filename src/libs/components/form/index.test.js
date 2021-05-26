import React from 'react'
import Form from '.'
import { render } from "@testing-library/react";

let emit;

beforeAll(() => {
  ({ emit } = window._virtualConsole);
});

beforeEach(() => {
    render(<Form />)
  window._virtualConsole.emit = jest.fn();
});

afterAll(() => {
  window._virtualConsole.emit = emit;
});

it('...', () => {
    
});

