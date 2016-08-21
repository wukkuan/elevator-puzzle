import React, { Component } from 'react'
import './App.css'

const CAR_WIDTH = 15
const CAR_HEIGHT = 30

function createArray(length) {
  return Array.from(Array(length))
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
    const shafts = this.props.appState.shafts.map((shaft, shaftIdx) => {
      const floorButtons = createArray(this.props.appState.floors.length).map(
        (_, floor) => (
          <button
            key={floor}
            style={{
              backgroundColor: shaft.floorRequests.includes(floor) ? 'lightgreen' : 'white'
            }}
            onClick={this.props.onFloorRequest.bind(null, this.props.appState, shaftIdx, floor)}
          >
            {floor}
          </button>
        )
      )
      return (
        <div key={shaftIdx}>
          <Shaft
            floors={this.props.appState.floors.length}
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
    const floorLobbies = this.props.appState.floors.map((floor, floorIdx) => (
      <div
        key={floorIdx}
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
              onClick={this.props.onLobbyUpRequest.bind(null, this.props.appState, floorIdx)}
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
              onClick={
                this.props.onLobbyDownRequest.bind(null, this.props.appState, floorIdx)
              }
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
            height: CAR_HEIGHT * this.props.appState.floors.length,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {floorLobbies}
        </div>
        <button
          onClick={this.props.onStep.bind(this, this.props.appState)}
        >Step</button>
      </div>
    )
  }
}

export default App
