import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

export const changeDescription = (newDescription) => ({
    type: 'DESCRIPTION_CHANGE',
    payload: newDescription
})

export const search = () => {
    return (dispatch, getState) => {
        const description = getState().todo.description
        const search = description ? `&description__regex=/${description}/` : ''
        const request = axios.get(`${URL}?sort=-createdAt${search}`)
            .then(res => dispatch({type: 'TODO_SEARCH',
            payload: res.data}))
    }
}

export const add = (description) => {
    return dispatch => {
        axios.post(URL, { description })
            .then(res => dispatch(clear()))
            .then(res => dispatch(search()))
    }
}

export const markAsDone = (task) => {
    return dispatch => {
        axios.put(`${URL}/${task._id}`, {...task, done: true})
            .then(res => dispatch(search()))
    }
}

export const markAsPending = (task) => {
    return dispatch => {
        axios.put(`${URL}/${task._id}`, {...task, done: false})
            .then(res => dispatch(search()))
    }
}

export const remove = (task) => {
    return dispatch => {
        axios.delete(`${URL}/${task._id}`)
            .then(res => dispatch(search()))
    }
}

export const clear = () => {
    return [{
        type: 'TODO_CLEAR'
    }, search()]
}