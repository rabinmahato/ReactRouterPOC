import React from 'react';
import { secondsToHms } from '../../utility/common';
import './GridListItem.scss';

const gridLlistItem = (props) => (
    <div className="GridList--content">
        <img src={props.coverImage} alt={props.imageDescription} className="Poster"></img>
        <div className="Title">{props.title}</div>
        <div className="HTMLText Genre">{`${props.assettype}s ${secondsToHms(props.duration)}`}</div>
    </div>
)

export default gridLlistItem;