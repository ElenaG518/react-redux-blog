import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => async dispatch => {
    const response =  await jsonPlaceholder.get('/posts'); 

    dispatch({ type: 'FETCH_POSTS', payload: response })
};

// same as:
export const fetchPostsToo = () => {
    return async function(dispatch) {
        const response = await jsonPlaceholder.get('/posts');
        
        dispatch({ type: 'FETCH_POSTS', payload: response })
    };
};    