import * as actionTypes from './actions';
import axios from '../../items-axios';

export const updateFetchedItems = (fetchedItems) =>{
    return (dispatch, state) => {
        dispatch({
            type: actionTypes.UPDATE_ITEMS,
            payload: fetchedItems
        });
    }
}

export const fetchItems = () => {
    return (dispatch) => {
        dispatch(startLoader());
        axios.get('/shoppingcart-6df6b.json')
        .then(res => {
            const fetchedItems = [];
            for (let key in res.data) {
                fetchedItems.push({
                    ...res.data[key],
                    id: key 
                });
            }
            dispatch(updateFetchedItems(fetchedItems));
        })
        .catch(err => {
            dispatch(stopLoader());
        });
    }
}

export const fetchSelectedItem = ({selectedItemId, componentRef}) => {
    return (dispatch) => {
        dispatch(startLoader());
        axios.get(`/shoppingcart-6df6b/${selectedItemId}.json`)
        .then(res => {
            if(res.data){
                res.data.id = selectedItemId;
                dispatch(updateSelectedItem(res.data));
            } else {
                componentRef.props.history.push('/NotFound');
            }
        })
        .catch(err => {
            dispatch(stopLoader());
        });
    }
}

export const updateSelectedItem = (selectedItemData) => {
    return {
        type: actionTypes.UPDATE_SELECTED_ITEM,
        payload: selectedItemData
    };
}

export const startLoader = () => {
    return { type: actionTypes.START_LOADER };
}

export const stopLoader = () => {
    return { type: actionTypes.STOP_LOADER };
}


