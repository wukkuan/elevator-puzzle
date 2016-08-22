import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import {
  floorRequest,
  lobbyUpRequest,
  lobbyDownRequest,
  step,
} from './reducers'


function handleFloorRequest(state, shaft, floor) {
  const nextState = floorRequest(state, shaft, floor)
  render(nextState)
}

function handleLobbyUpRequest(state, floor) {
  const nextState = lobbyUpRequest(state, floor)
  render(nextState)
}

function handleLobbyDownRequest(state, floor) {
  const nextState = lobbyDownRequest(state, floor)
  render(nextState)
}

function handleStep(state) {
  render(step(state))
}

function render(state) {
  ReactDOM.render(
    <App
      appState={state}
      onFloorRequest={handleFloorRequest}
      onLobbyUpRequest={handleLobbyUpRequest}
      onLobbyDownRequest={handleLobbyDownRequest}
      onStep={handleStep}
    />,
    document.getElementById('root'),
  )
}

render(step())
