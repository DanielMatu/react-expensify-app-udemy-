import moment from 'moment'
import { setStartDate,
    setEndDate,
    setTextFilter,
    sortByAmount,
    sortByDate
} from '../../actions/filters'

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})

test('should generate set and date action object', () => {
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})

test('should generate set text filter object with text value', () => {
    const action = setTextFilter('Something in')
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'Something in'
    })
})

test('should generate set text filter object with default', () => {
    const action = setTextFilter('')
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})

test('should set filter to sort by amount', () => {
    const action = sortByAmount()
    expect(action).toEqual({ type: 'SORT_BY_AMOUNT' })
})

test('should set filter to sort by date', () => {
    const action = sortByDate()
    expect(action).toEqual({ type: 'SORT_BY_DATE' })
})