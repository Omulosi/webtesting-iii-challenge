// Test away
import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dashboard from './Dashboard';

afterEach(rtl.cleanup)

let dashboard;

beforeEach(() => {
  dashboard = rtl.render(<Dashboard />);
})

describe('Dashboard component', () => {
  test('shows controls and display', () => {
    expect(dashboard.container).toMatchSnapshot();
  });
})
