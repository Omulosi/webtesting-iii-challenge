// Test away!
import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Controls from './Controls';

afterEach(rtl.cleanup)

describe('Controls component', () => {
  test('Provide button to toggle the closed state', () => {
    let controls = rtl.render(<Controls closed={true}/>);
    expect(controls.queryByText(/open gate/i)).toBeInTheDocument();
    controls = rtl.render(<Controls closed={false}/>);
    expect(controls.queryByText(/close gate/i)).toBeInTheDocument();
  });
  test('Provide button to toggle the locked state', () => {
    let controls = rtl.render(<Controls locked={true} closed={false}/>);
    expect(controls.queryByText(/unlock/i)).toBeInTheDocument();
    controls = rtl.render(<Controls locked={false}/>);
    expect(controls.queryAllByText(/lock/i)).not.toBeNull();
  });
  test('closed toggle button disbled if gate is locked', () => {

  })
})
