import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());
    // console.log(getState().posts);

    // create an array of unique userIds based on posts
        // const userIds = _.uniq(_.map(getState().posts, 'userId')); 

    // for each unique userId, we are going to dispatch fetchUser, but we don't have to wait
    // this time around since we are not displaying the data right away.  We only have to wait
    // if we are doing somethihgn with the data.  Also, await does not work with forEach.
        // userIds.forEach(id => dispatch(fetchUser(id)));

    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(id => dispatch(fetchUser(id)))
        .value();
}

// 1 when we call fetchPosts, return a function.  
// 2 that function will go through thunk
// 3 thunk will run that function
// 4 that function will run the async function and wait for response
// 5 action creator return an 'action' with the fetched data on 'payload' property
//  6 reducer sees the action, returns the data off the 'payload'
// 7 if some new state object, redux/react-redux cause app to rerender
export const fetchPosts = () => async dispatch => {
    const response =  await jsonPlaceholder.get('/posts'); 

    dispatch({ type: 'FETCH_POSTS', payload: response.data })
};

// same as:
export const fetchPostsToo = () => {
    return async function(dispatch) {
        const response = await jsonPlaceholder.get('/posts');
        
        dispatch({ type: 'FETCH_POSTS', payload: response })
    };
}; 

// export const fetchUser = id =>  dispatch => _fetchUser(id, dispatch);
// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);

//     dispatch({type: 'FETCH_USER', payload: response.data})
// });


export const fetchUser = id =>  async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({type: 'FETCH_USER', payload: response.data})
};


