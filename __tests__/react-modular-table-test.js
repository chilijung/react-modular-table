import React from 'react';
import {expect} from 'chai';
import {DivTable, DivRow, DivCell} from 'ModularTable';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('ModularTable', function() {
  it('expect render a DivTable', () => {
    const wrapper = mount(<DivTable/>);
    expect(wrapper.find('DivTable')).to.have.length(1);
  });

  it('expect render a DivRow', () => {
    const wrapper = mount(<DivRow/>);
    expect(wrapper.find('DivRow')).to.have.length(1);
  });

  it('expect render a DivCell', () => {
    const wrapper = mount(<DivCell/>);
    expect(wrapper.find('DivCell')).to.have.length(1);
  });
});
