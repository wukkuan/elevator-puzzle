import React, { Component } from 'react'
import './App.css'

const CAR_WIDTH = 15
const CAR_HEIGHT = 30

const state = {
  shafts: [
    {
      carFloor: 0,
      floorRequests: [1],
    }, {
      carFloor: 0,
      floorRequests: [2],
    },
  ],
  floors: [
    {
      upRequested: false,
    },
    {
      upRequested: true,
      downRequested: false,
    },
    {
      upRequested: false,
      downRequested: true,
    },
    {
      downRequested: false,
    },
  ],
}

class Shaft extends Component {
  render() {
    const {
      floors,
      carFloor,
    } = this.props
    return (
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          border: '1px dashed black',
          width: CAR_WIDTH,
          height: floors * CAR_HEIGHT,
        }}
      >
        <div
          style={{
            transition: '1s bottom',
            position: 'absolute',
            bottom: carFloor * CAR_HEIGHT,
            width: CAR_WIDTH,
            height: CAR_HEIGHT,
            backgroundColor: 'blue',
          }}
        >
        </div>
      </div>
    )
  }
}

class App extends Component {
  render() {
    const shafts = state.shafts.map((shaft, idx) => {
      const floorButtons = Array.from(Array(state.floors.length)).map((_, floor) => (
        <button
          key={floor}
          style={{
            backgroundColor: shaft.floorRequests.includes(floor) ? 'lightgreen' : 'white'
          }}
        >
          {floor}
        </button>
      ))
      return (
        <div>
          <Shaft
            key={idx}
            floors={state.floors.length}
            carFloor={shaft.carFloor}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {floorButtons}
          </div>
        </div>
      )
    })
    const LOBBY_BUTTON_WIDTH = 25;
    const floorLobbies = state.floors.map(floor => (
      <div
        style={{
          display: 'flex',
          height: CAR_HEIGHT,
        }}
      >
        {
          typeof floor.upRequested === 'boolean' ? (
            <button
              style={{
                backgroundColor: floor.upRequested ? 'lightgreen' : 'white',
                width: LOBBY_BUTTON_WIDTH,
              }}
            >^</button>
          ) : <div style={{width: LOBBY_BUTTON_WIDTH}} />
        }
        {
          typeof floor.downRequested === 'boolean' ? (
            <button
              style={{
                width: LOBBY_BUTTON_WIDTH,
                backgroundColor: floor.downRequested ? 'lightgreen' : 'white',
              }}
            >v</button>
          ) : null
        }
      </div>
    ))
    return (
      <div
        style={{
          display: 'flex'
        }}
      >
        {shafts}
        <div
          style={{
            height: CAR_HEIGHT * state.floors.length,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {floorLobbies}
        </div>
      </div>
    )
  }
}

export default App
