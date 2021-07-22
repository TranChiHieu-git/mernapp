import {getPost, getType, createPost, updatePost} from "../../action/post";

export default function postReducer(state = {}, action) {
    switch (action.type) {
        case getType(getPost.getPostRequest):
            return {...state, isLoading: true};
        case getType(getPost.getPostSuccess):
            return {...state, isLoading: false, data: action.payload};
        case getType(getPost.getPostFailure):
            return {...state, isLoading: false};
        case getType(createPost.createPostSuccess):
            return {...state, data: {...state.data, result: [...state.data.result, action.payload.result]}};
        case getType(updatePost.updatePostSuccess):
            let temp = [...state.data.result].map(x => {
                if (x._id === action.payload.result._id) {
                    return action.payload.result;
                }
                return x;
            });
            return {...state, data: {...state.data, result: [...temp]}};
        default:
            return state;
    }
}