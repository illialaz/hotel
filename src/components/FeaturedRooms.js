import React, { Component } from 'react'
import { connect } from 'react-redux'
import Loading from './Loading'
import Room from './Room'
import Title from './Title'

class FeaturedRooms extends Component {
  render() {
    let { loading, rooms } = this.props

    rooms = rooms.map((room) => {
      return <Room key={room.id} room={room} />
    })

    return (
      <section className="featured-rooms">
        <Title title="featured rooms" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    )
  }
}

const mapStateToProps = ({ loading, featuredRooms }) => {
  return {
    loading,
    rooms: featuredRooms,
  }
}

export default connect(mapStateToProps)(FeaturedRooms)
