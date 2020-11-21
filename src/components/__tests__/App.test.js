import React from 'react';
import { shallow, render, mount } from 'enzyme';
import App from 'components/App';
import NavBar from 'components/Nav/NavBar';

import Root from 'Root';

let wrapper;
beforeEach(() => {
  wrapper = mount(
    <Root>
      <App />
    </Root>
  );
});

afterEach(() => {
  wrapper.unmount();
});

it('shows the li and img components in nav bar', () => {
  expect(wrapper.find(NavBar).length).toEqual(1);
  expect(wrapper.find('li').length).toEqual(4);
  expect(wrapper.find('img').length).toEqual(4);
});
