import React, { Component } from 'react'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
import { connect } from 'react-redux'
import Loading from './Loading'
import filterRooms from '../store/selectors'

class RoomContainer extends Component {
  render() {
    const { loading, rooms, filteredRooms } = this.props

    if (loading) return <Loading />

    return (
      <>
        <RoomFilter rooms={rooms} />
        <RoomList rooms={filteredRooms} />
      </>
    )
  }
}

const mapStateToProps = (state) => {
  const { loading, rooms } = state
  return {
    loading,
    rooms,
    filteredRooms: filterRooms(state),
  }
}

export default connect(mapStateToProps)(RoomContainer)
