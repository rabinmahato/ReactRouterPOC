import React from 'react';

const Item = (props) => (
    <React.Fragment>
        <div className={props.class}>
            <span>{props.name}</span>
            <span>{props.style}</span>
            <span>{props.qauntity}</span>
        </div>
    </React.Fragment>
);

export default Item;