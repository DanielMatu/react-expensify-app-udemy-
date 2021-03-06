import React from 'react'
import { shallow } from 'enzyme'
import expenses from '../fixtures/expenses'
import toJSON from 'enzyme-to-json'
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage'

test('should render header correctly', () => {
    const wrapper = shallow(<ExpenseDashboardPage />)
    expect(toJSON(wrapper)).toMatchSnapshot()
})