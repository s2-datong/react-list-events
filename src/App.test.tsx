import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const wrapper = render(<App />);
  const items = wrapper.container.getElementsByClassName('flex-item')
  expect(items.length).toBe(9);
});
