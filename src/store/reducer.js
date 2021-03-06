import * as actionTypes from './action/actions';

const initialState = {
    items: [],
    contentItem: null,
    selectedItem: null,
    loading: true
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.START_LOADER:
            return {
                ...state,
                loading: true
            };
        case actionTypes.STOP_LOADER:
            return {
                ...state,
                loading: false
            };

        case actionTypes.UPDATE_VIDEO_CONTENT:
            return {
                ...state,
                contentItem : action.payload,
                loading: false
            }

        default:
            return state;
    }
};

export default reducer;



