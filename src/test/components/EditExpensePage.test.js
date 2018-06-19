import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { EditExpensePage } from '../../components/EditExpensePage';

let startEditExpense, startRemoveExpense, history, wrapper;

beforeEach(() => {
  startEditExpense = jest.fn();
  startRemoveExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<EditExpensePage 
    expense={expenses[1]} 
    startEditExpense={startEditExpense} 
    startRemoveExpense={startRemoveExpense} 
    history={history} 
  />);
});

test('should render EditExpensePage', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle startEditExpense', () => {
  const id = expenses[1].id;
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
  expect(startEditExpense).toHaveBeenLastCalledWith(id, expenses[2]);
  expect(history.push).toHaveBeenLastCalledWith('/');
});

test('should handle startRemoveExpense', () => {
  const id = expenses[1].id;
  wrapper.find('button').simulate('click');
  expect(startRemoveExpense).toHaveBeenLastCalledWith(id);
  expect(history.push).toHaveBeenLastCalledWith('/');
});
