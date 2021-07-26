import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { reducer } from './reducer'
import { items } from '../data'
import { setValues } from './actions'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

const middleware = []
middleware.push(thunk)
middleware.push(createLogger())

const formatData = (items) => {
  let rooms = items.map((item) => {
    let id = item.sys.id
    let images = item.fields.images.map((image) => image.fields.file.url)
    let room = { ...item.fields, images, id }

    return room
  })
  let featuredRooms = rooms.filter((room) => room.featured === true)
  let maxPrice = Math.max(...rooms.map((item) => item.price))
  let minPrice = Math.min(...rooms.map((item) => item.price))
  let maxSize = Math.max(...rooms.map((item) => item.size))
  let minSize = Math.min(...rooms.map((item) => item.size))
  return {
    rooms,
    featuredRooms,
    maxPrice,
    minPrice,
    maxSize,
    minSize,
  }
}

const parseData = (items) => {
  return function (dispatch) {
    const data = formatData(items)
    dispatch(setValues(data))
  }
}

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
)

store.dispatch(parseData(items))

export default store
