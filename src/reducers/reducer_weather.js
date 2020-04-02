// Import the action type from the actions file
import { FETCH_WEATHER } from "../actions/actionTypes";
// Set the default value of state to an empty array
export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return state.concat([action.payload]);
  }
  return state;
}
