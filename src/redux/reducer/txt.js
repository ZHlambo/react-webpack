import request from '../request'
import {
  API_TXTS,
  API_TXT_INFO,
} from '../api'

const GET_TXTS = "GET_TXTS";
const GET_TXT_INFO = "GET_TXT_INFO";
const PUT_TXT_INFO = "PUT_TXT_INFO";


const initState = {
  txts: null,
}

export const getTxts = () => (dispatch, getState) => {
  dispatch({
    type: GET_TXTS,
    payload: {
      promise: request.get(API_TXTS)
    }
  })
}

export const getTxtInfo = (id, data) => (dispatch, getState) => {
  dispatch({
    type: GET_TXT_INFO,
    payload: {
      promise: request.get(API_TXT_INFO, {
        operateId: id
      }),
    }
  })
}

export const putTxtInfo = (id, data) => (dispatch, getState) => {
  dispatch({
    type: PUT_TXT_INFO,
    payload: {
      promise: request.put(API_TXT_INFO, {
        operateId: id,
        data
      }),
    }
  })
}

export default function txtReducer(state = initState, action) {
  switch (action.type) {
    case `${GET_TXTS}_PENDING`:
      return { ...state,
        fcTxts: true
      }
    case `${GET_TXTS}_FULFILLED`:
      return { ...state,
        fcTxts: false,
        txts: action.payload
      }
    case `${GET_TXTS}_REJECT`:
      return { ...state,
        fcTxts: false,
      }

    case `${PUT_TXT_INFO}_PENDING`:
      return { ...state,
        fcPutTxt: true
      }
    case `${PUT_TXT_INFO}_FULFILLED`:
      return { ...state,
        fcPutTxt: false,
        updateTxt: action.payload
      }
    case `${PUT_TXT_INFO}_REJECT`:
      return { ...state,
        fcPutTxt: false,
      }

    case `${GET_TXT_INFO}_PENDING`:
      return { ...state,
        fcGetTxt: true
      }
    case `${GET_TXT_INFO}_FULFILLED`:
      return { ...state,
        fcGetTxt: false,
        txtInfo: action.payload
      }
    case `${GET_TXT_INFO}_REJECT`:
      return { ...state,
        fcGetTxt: false,
      }

    default:
      return { ...state
      }
  }
}
