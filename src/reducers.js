import cloneDeep from 'lodash.clonedeep'
import uniq from 'lodash.uniq'

export function floorRequest(state, shaft, floor) {
  const nextState = cloneDeep(state)
  nextState.shafts[shaft].floorRequests.push(floor)
  nextState.shafts[shaft].floorRequests = uniq(
    nextState.shafts[shaft].floorRequests
  )
  return nextState;
}

function lobbyRequest(state, floor, floorDirection) {
  return state;
}

export function lobbyUpRequest(state, floor) {
  return lobbyRequest(state, floor, 1);
}

export function lobbyDownRequest(state, floor) {
  return lobbyRequest(state, floor, -1);
}

export function step(state) {
  return state;
}
