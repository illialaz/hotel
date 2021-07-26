import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'

import Title from '../components/Title'
import {
  changeType,
  changeCapacity,
  changePrice,
  changeMinSize,
  changeMaxSize,
  changeBreakfast,
  changePets,
} from '../store/actions'

const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))]
}

class RoomsFilter extends Component {
  render() {
    const {
      dispatch,
      roomType,
      capacity,
      price,
      minPrice,
      maxPrice,
      minSize,
      maxSize,
      breakfast,
      pets,
      rooms,
    } = this.props

    let types = getUnique(rooms, 'type')
    types = ['all', ...types]
    types = types.map((item, index) => {
      return (
        <option value={item} key={index}>
          {item}
        </option>
      )
    })

    let people = getUnique(rooms, 'capacity')
    people = people.map((item, index) => {
      return (
        <option value={item} key={index}>
          {item}
        </option>
      )
    })

    return (
      <section className="filter-container">
        <Title title="search rooms" />
        <form className="filter-form">
          <div className="form-group">
            <label htmlFor="type">room type</label>
            <select
              name="type"
              id="type"
              value={roomType}
              className="form-control"
              onChange={(e) => {
                dispatch(changeType({ roomType: e.target.value }))
              }}
            >
              {types}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="capacity">guests</label>
            <select
              name="capacity"
              id="capacity"
              value={capacity}
              className="form-control"
              onChange={(e) => {
                dispatch(changeCapacity({ capacity: e.target.value }))
              }}
            >
              {people}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="price">room price ${price}</label>
            <input
              type="range"
              name="price"
              min={minPrice}
              max={maxPrice}
              id="price"
              value={price}
              onChange={(e) => {
                dispatch(changePrice({ price: e.target.value }))
              }}
              className="form-control"
            ></input>
          </div>

          <div className="form-group">
            <label htmlFor="size">room size</label>
            <div className="size-inputs">
              <input
                type="number"
                name="minSize"
                id="size"
                value={minSize}
                onChange={(e) => {
                  dispatch(changeMinSize({ minSize: e.target.value }))
                }}
                className="size-input"
              />
              <input
                type="number"
                name="maxSize"
                id="size"
                value={maxSize}
                onChange={(e) => {
                  dispatch(changeMaxSize({ maxSize: e.target.value }))
                }}
                className="size-input"
              />
            </div>
          </div>

          <div className="form-group">
            <div className="single-extra">
              <input
                type="checkbox"
                name="breakfast"
                id="breakfast"
                checked={breakfast}
                onChange={(e) => {
                  dispatch(changeBreakfast({ breakfast: e.target.checked }))
                }}
              />
              <label htmlFor="breakfast">breakfast</label>
            </div>

            <div className="single-extra">
              <input
                type="checkbox"
                name="pets"
                id="pets"
                checked={pets}
                onChange={(e) => {
                  dispatch(changePets({ pets: e.target.checked }))
                }}
              />
              <label htmlFor="pets">pets</label>
            </div>
          </div>
        </form>
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  const {
    roomType,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = state

  return {
    roomType,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  }
}

export default connect(mapStateToProps)(RoomsFilter)
