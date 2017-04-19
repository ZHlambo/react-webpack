import request from '../request'

const initState = {
    name: 'Drod'
}

export const getUrl = () => (dispatch, getState) => {
    dispatch({
        type: 'type',
        payload: {
            promise: request.get('http://lsp.baicaiyun.cn/api/shopitem/client/v1/cats/root')
        }
    })
}

export default function authReducer(state = initState, action) {
    switch (action.type) {
        default:
          return state
    }
}
