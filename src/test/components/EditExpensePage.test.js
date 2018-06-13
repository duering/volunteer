import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { EditExpensePage } from '../../components/EditExpensePage';

let editExpense, removeExpense, history, wrapper;

beforeEach(() => {
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<EditExpensePage 
    expense={expenses[1]} 
    editExpense={editExpense} 
    removeExpense={removeExpense} 
    history={history} 
  />);
});

test('should render EditExpensePage', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', () => {
  const id = expenses[1].id;
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
  expect(editExpense).toHaveBeenLastCalledWith(id, expenses[2]);
  expect(history.push).toHaveBeenLastCalledWith('/');
});

test('should handle removeExpense', () => {
  const id = expenses[1].id;
  wrapper.find('button').simulate('click');
  expect(removeExpense).toHaveBeenLastCalledWith(id);
  expect(history.push).toHaveBeenLastCalledWith('/');
});
