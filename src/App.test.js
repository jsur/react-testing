import App from './App';
import React from 'react';
import { shallow } from 'enzyme';

describe('App', () => {

  let wrapper;

  beforeEach(() => {
    // beforeEach is run before every "it" assertion
    wrapper = shallow(<App />);
  });

  it('should have the `th` "Items"', () => {
    expect(
      // contains accepts a ReactElement and
      // returns a boolean whether or not the rendered
      // component contains that HTML
      wrapper.contains(<th>Items</th>)
    ).toBe(true);
  });

  it('should have a `button` element', () => {
    expect(
      // containsMatchingElement just checks that the given element
      // exists on the rendered component.
      // It does not look at its attributes
      wrapper.containsMatchingElement(
        <button>Add item</button>
      )
    ).toBe(true);
  });

  it('should have an `input` element', () => {
    expect(wrapper.containsMatchingElement(<input />))
    .toBe(true);
  });

  it('`button` should be disabled', () => {
    // .find expects an Enzyme selector as its argument
    // e.g. a CSS selector.
    // It returns a list of all matching elements
    const button = wrapper.find('button').first();
    expect(
      button.props().disabled
    ).toBe(true);
  });

});
