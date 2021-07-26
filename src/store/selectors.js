import { createSelector } from 'reselect'

const selectRooms = (state) => state.rooms
const selectType = (state) => state.roomType
const selectCapacity = (state) => state.capacity
const selectPrice = (state) => state.price
const selectMinSize = (state) => state.minSize
const selectMaxSize = (state) => state.maxSize
const selectBreakfast = (state) => state.breakfast
const selectPets = (state) => state.pets
const filterRooms = createSelector(
  [
    selectRooms,
    selectType,
    selectCapacity,
    selectPrice,
    selectMinSize,
    selectMaxSize,
    selectBreakfast,
    selectPets,
  ],
  (rooms, type, capacity, price, minSize, maxSize, breakfast, pets) => {
    if (type !== 'all') {
      rooms = rooms.filter((item) => item.type === type)
    }

    if (capacity !== 1) {
      rooms = rooms.filter((item) => item.capacity >= capacity)
    }

    rooms = rooms.filter((item) => item.price <= price)

    rooms = rooms.filter((item) => item.size >= minSize && item.size <= maxSize)

    if (breakfast) {
      rooms = rooms.filter((item) => item.breakfast === true)
    }

    if (pets) {
      rooms = rooms.filter((item) => item.pets === true)
    }
    return rooms
  }
)

export default filterRooms

export {
  selectRooms,
  selectType,
  selectCapacity,
  selectPrice,
  selectMinSize,
  selectMaxSize,
  selectBreakfast,
  selectPets,
}
