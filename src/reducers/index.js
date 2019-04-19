import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';

export default combineReducers({
    //name of the property in state is post and it is initialized with 
    // what is returned by postsReducer, either action.payload if state
    // changed, or state if unchanged
    posts: postsReducer,
    users: usersReducer
});