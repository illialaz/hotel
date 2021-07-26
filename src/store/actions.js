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

export const setValues = (data) => {
  const { rooms, featuredRooms, maxPrice, minPrice, maxSize, minSize } = data
  return {
    type: SET_VALUES,
    rooms,
    featuredRooms,
    loading: false,
    price: maxPrice,
    maxPrice,
    minPrice,
    maxSize,
    minSize,
  }
}

export const changeType = ({ roomType }) => {
  return {
    type: CHANGE_TYPE,
    roomType,
  }
}

export const changeCapacity = ({ capacity }) => {
  return {
    type: CHANGE_CAPACITY,
    capacity,
  }
}

export const changePrice = ({ price }) => {
  return {
    type: CHANGE_PRICE,
    price,
  }
}

export const changeMinSize = ({ minSize }) => {
  return {
    type: CHANGE_MINSIZE,
    minSize,
  }
}

export const changeMaxSize = ({ maxSize }) => {
  return {
    type: CHANGE_MAXSIZE,
    maxSize,
  }
}

export const changeBreakfast = ({ breakfast }) => {
  return {
    type: CHANGE_BREAKFAST,
    breakfast,
  }
}

export const changePets = ({ pets }) => {
  return {
    type: CHANGE_PETS,
    pets,
  }
}
