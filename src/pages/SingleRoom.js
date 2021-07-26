import React, { Component } from 'react'
import { connect } from 'react-redux'
import defaultBcg from '../images/room-1.jpeg'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import StyledHero from '../components/StyledHero'
import Hero from '../components/Hero'

class SingleRoom extends Component {
  constructor(props) {
    super(props)
    this.state = {
      defaultBcg,
    }
  }

  render() {
    const { room } = this.props
    if (!room)
      return (
        <Hero>
          <Banner title="no such room could be found">
            <Link to="/rooms" className="btn-primary">
              back to room
            </Link>
          </Banner>
        </Hero>
      )

    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images,
    } = room

    const [mainImg, ...otherImg] = images

    return (
      <>
        <StyledHero img={mainImg || this.state.defaultBcg}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              back to rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {otherImg.map((item, index) => {
              return <img key={index} src={item} alt={name} />
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price : ${price}</h6>
              <h6>size : {size}sqft</h6>
              <h6>
                max capacity :{' '}
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>
                {pets ? '' : 'no '} {'pets allowed'}
              </h6>
              <h6>{breakfast && 'free breakfast included'}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>extras</h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}> - {item}</li>
            })}
          </ul>
        </section>
      </>
    )
  }
}

const mapStateToProps = ({ rooms }, ownProps) => {
  return {
    room: rooms.find((room) => room.slug === ownProps.match.params.slug),
  }
}

export default connect(mapStateToProps)(SingleRoom)
