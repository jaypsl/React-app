
import { FETCH_WEATHER } from '../actions/index';
export default function(state=[], action){

console.log('action received', action.payload);
switch(action.type){
case FETCH_WEATHER:
return state.concat([action.payload.data]);
}
return state;
}