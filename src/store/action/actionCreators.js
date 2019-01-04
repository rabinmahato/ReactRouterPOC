import * as actionTypes from './actions';
import zeeAxios from '../../axios/zee5-axios';

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


