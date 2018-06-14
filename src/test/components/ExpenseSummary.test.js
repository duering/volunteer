import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { ExpenseSummary } from '../../components/ExpenseSummary';

test('should correctly render ExpenseSummary with 1 expense', () => {
  const wrapper = shallow(<ExpenseSummary expenseCount={1} expensesTotal={320} />);
  expect(wrapper).toMatchSnapshot();
  expect(wrapper.text()).toEqual('Viewing 1 expense totalling $3.20')
});

test('should correctly render ExpenseSummary with multiple expenses', () => {
  const wrapper = shallow(<ExpenseSummary expenseCount={2} expensesTotal={200} />);
  expect(wrapper).toMatchSnapshot();
  expect(wrapper.text()).toEqual('Viewing 2 expenses totalling $2.00')
});