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

export function lobbyUpRequest(state, floor) {
  const nextState = cloneDeep(state)
  nextState.floors[floor].upRequested = true;
  return nextState;
}

export function lobbyDownRequest(state, floor) {
  const nextState = cloneDeep(state)
  nextState.floors[floor].downRequested = true;
  return nextState;
}

export function step(state) {
  return state;
}
