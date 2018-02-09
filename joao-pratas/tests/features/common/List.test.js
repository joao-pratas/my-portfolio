import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { List } from 'src/features/common';

describe('common/List', () => {
  it('renders node with correct class name', () => {
    const renderedComponent = shallow(
      <List />
    );

    expect(
      renderedComponent.find('.common-list').getElement()
    ).to.exist;
  });
});
