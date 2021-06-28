import * as t from '../types'

const main = (state = {
  info: {}
}, action) => {
  switch (action.type) {
    case t.SET_PRODUCTS:
      return {
        ...state, info: {
          products: action.payload
        }
      }
    default:
      return state
  }
}

export default main
