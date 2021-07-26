import {
  CHANGE_PRICE,
  CHANGE_CAPACITY,
  CHANGE_TYPE,
  CHANGE_MINSIZE,
  CHANGE_MAXSIZE,
  CHANGE_BREAKFAST,
  CHANGE_PETS,
  SET_VALUES,
} from './constants'

const initialState = {
  rooms: [],
  featuredRooms: [],
  sortedRooms: [],
  loading: true,
  roomType: 'all',
  capacity: 1,
  price: 0,
  minPrice: 0,
  maxPrice: 0,
  minSize: 0,
  maxSize: 0,
  breakfast: false,
  pets: false,
}

export const reducer = (state = initialState, action) => {
  let {
    rooms,
    featuredRooms,
    loading,
    price,
    maxPrice,
    minPrice,
    maxSize,
    minSize,
    roomType,
    capacity,
    breakfast,
    pets,
  } = action

  switch (action.type) {
    case SET_VALUES:
      return {
        ...state,
        rooms,
        featuredRooms,
        loading,
        price,
        maxPrice,
        minPrice,
        maxSize,
        minSize,
      }

    case CHANGE_TYPE:
      return { ...state, roomType: roomType }

    case CHANGE_CAPACITY:
      capacity = parseInt(capacity)
      return { ...state, capacity }

    case CHANGE_PRICE:
      price = parseInt(price)
      return { ...state, price }

    case CHANGE_MINSIZE:
      minSize = parseInt(minSize)
      return { ...state, minSize }

    case CHANGE_MAXSIZE:
      maxSize = parseInt(maxSize)
      return { ...state, maxSize }

    case CHANGE_BREAKFAST:
      return { ...state, breakfast }

    case CHANGE_PETS:
      return { ...state, pets }

    default:
      return state
  }
}
