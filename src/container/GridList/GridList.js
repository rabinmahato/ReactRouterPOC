import React, {Component} from 'react';
import './GridList.scss';


class GridList extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    onClick = ()=> {

    }

    onMouseOver = ()=> {

    }

    onMouseOut = ()=> {

    }

    render(){
        return (
            <div className="GridList"
                onClick={() => this.onClick()}
                onMouseOver={() => this.onMouseOver()}
                onMouseOut={() => this.onMouseOut()}>
                    {this.props.children}
            </div>
        );
    }
}

export default GridList;