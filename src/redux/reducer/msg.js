import request from '../request'
import {
  API_TXT_MSGS,
} from '../api'

const GET_TXT_MSGS = "GET_TXT_MSGS";


const initState = {
  msgs: null,
}

export const getTxtMsgs = (id) => (dispatch, getState) => {
  dispatch({
    type: GET_TXT_MSGS,
    payload: {
      promise: request.get(API_TXT_MSGS, {
        operateId: id
      }),
    }
  })
}

export default function msgReducer(state = initState, action) {
  switch (action.type) {
    case `${GET_TXT_MSGS}_PENDING`:
      return { ...state,
        fcMsgs: true
      }
    case `${GET_TXT_MSGS}_FULFILLED`:
      return { ...state,
        fcMsgs: false,
        msgs: action.payload
      }
    case `${GET_TXT_MSGS}_REJECT`:
      return { ...state,
        fcMsgs: false,
      }

    default:
      return { ...state
      }
  }
}
