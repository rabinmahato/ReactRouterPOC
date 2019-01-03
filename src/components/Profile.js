
import React from "react";
import Employee from  '../components/Employee';
import Loader from './Loader';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import * as actionTypes from '../store/action/';

class Profile extends React.Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    console.log('Profile componentDidMount');
    this.props.fnStartLoader();
    this.props.fetchSelectedItem(this.props.match.params.name, this);    
  }
  componentDidUpdate(){
    console.log('Profile componentDidUpdate');
    (this.props.selectedItem && !this.props.loading && (this.props.match.params.name !== this.props.selectedItem.id))  && this.props.fetchSelectedItem(this.props.match.params.name); 
  }

  render(){
    const id = this.props.match.params.name;
    return (
      <div>
         <Loader show={this.props.loading} />
        {
          this.props.selectedItem ? 
          <div>
            <img ref="itemImage" src={this.props.selectedItem.imageURL} className="img-responsive" alt="" style={{height:'auto', width: '90px'}}/>
            <h4>
              {this.props.selectedItem.name}
            </h4>
            <h5>
              {this.props.selectedItem.brand}
            </h5>
            <h6>
              {this.props.selectedItem.quanity}
            </h6>
            <span>Price: ${this.props.selectedItem.unitPrice * Number(this.props.selectedItem.quantity)}</span>
          </div> : null
        }

        {this.props.items.length ? this.props.items.map((ele)=>
        <Link to={ele.id} key={Math.random()}>
          {(id== ele.id) ?  <Employee class="box selected" name={ele.name} style={ele.style} qauntity={ele.quantity}/> :          
          <Employee class="box" name={ele.name} style={ele.style} qauntity={ele.quantity}/>
          }
        </Link>
        ): null}
      </div>
    );
  }
}


const mapStateToProps = state => {
    return {
        items: state.items,
        selectedItem: state.selectedItem,
        loading: state.loading
    };
}

const mapDispatchToProps = dispatch => {
    return {
      fetchSelectedItem: (selectedItemId, componentRef)=>{
        dispatch(actionTypes.fetchSelectedItem({selectedItemId :selectedItemId, componentRef: componentRef}));
      },
      fnStartLoader: () => {
        dispatch(actionTypes.startLoader());
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);