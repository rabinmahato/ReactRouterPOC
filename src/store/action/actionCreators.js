import * as actionTypes from './actions';
import itemsAxios from '../../axios/items-axios';
import zeeAxios from '../../axios/zee5-axios';

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
        itemsAxios.get('/shoppingcart-6df6b.json')
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

export const fetchSelectedItem = ({selectedItemId, oComponentRef}) => {
    return (dispatch) => {
        dispatch(startLoader());
        itemsAxios.get(`/shoppingcart-6df6b/${selectedItemId}.json`)
        .then(res => {
            if(res.data){
                res.data.id = selectedItemId;
                dispatch(updateSelectedItem(res.data));
            } else {
                oComponentRef.props.history.push('/NotFound');
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


export const fetchVideoContent = (selectedVideoId, oComponentRef) => {
    return (dispatch) => {
        dispatch(startLoader());
        zeeAxios.get(`content/details/${selectedVideoId}?translation=en&country=IN`)
        .then(res => {
            if(res.data){
                dispatch(updateSelectedVideoContent(res.data));
            } else {
                oComponentRef.props.history.push('/NotFound');
            }
        })
        .catch(err => {
            dispatch(stopLoader());            
            oComponentRef.props.history.push('/NotFound');
        });
    }
}

export const updateSelectedVideoContent = (selectedVideoContent) => {
    return {
        type: actionTypes.UPDATE_VIDEO_CONTENT,
        payload: selectedVideoContent
    };
}


