import axios from 'axios'

const BASE_URL = process.env.REACT_APP_BASE_URL

export function getList() {
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function setDescription(newDescription) {
    return {
        type: 'NUM_NAME_ALTERED',
        payload: newDescription
    }
}

export function setMonth(newMonth) {
    return {
        type: 'NUM_MONTH_ALTERED',
        payload: newMonth
    }
}

export function setYear(newYear) {
    return {
        type: 'NUM_YEAR_ALTERED',
        payload: newYear
    }
}

export function create(...values) {
    console.log(values)
    // axios.post(`${BASE_URL}/billingCycles`, values)
    return {
        type: 'TEMP',

    }
}