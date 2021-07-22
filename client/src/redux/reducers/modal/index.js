import {showModal,hideModal, getType} from "../../action/post";

export default function modelReducer(state = {isShow: false}, action) {
    switch (action.type) {
        case getType(showModal):
            return {isShow: true};
        case getType(hideModal):
            return {isShow: false};
        default:
            return state;
    }
}