import React from 'react';

export default (props) =>{
    const loader = (<div className="loader-position">
                        <div className="loader"></div>
                    </div>);
    return (props.show) ? loader : null;
}