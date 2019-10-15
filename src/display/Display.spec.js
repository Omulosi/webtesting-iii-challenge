// Test away!
import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Display from './Display';

afterEach(rtl.cleanup)

let display;

describe('Display component', () => {
  test('Display closed if closed prop is true', () => {
    display = rtl.render(<Display closed={true}/>);
    expect(display.queryByText(/closed/i)).toBeInTheDocument();
  });
  test('Display locked if locked prop is true', () => {
    display = rtl.render(<Display locked={true}/>);
    expect(display.queryByText(/locked/i)).toBeInTheDocument();
  });
  test('when locked or closed use red-led class', () => {
    display = rtl.render(<Display locked={true} closed={true}/>);
    expect(display.queryByText(/locked/i)).toHaveClass('red-led');
    expect(display.queryByText(/closed/i)).toHaveClass('red-led');
  });
  test('when unlocked or open use green-led class', () => {
    display = rtl.render(<Display locked={false} closed={false}/>);
    expect(display.queryByText(/unlocked/i)).toHaveClass('green-led');
    expect(display.queryByText(/open/i)).toHaveClass('green-led');
  });
})
