import React, { Component } from "react";
import { Button, View, Image, Text, StyleSheet } from "react-native";
import Item from './Item';
import { Link } from 'react-router-dom';
import Loader from './Loader';
import logo from '../assets/logo.svg';
import {connect} from 'react-redux';
import * as actionTypes from '../store/action/';


class Home extends Component {
  toProfileHandler = () =>{
    this.props.navigation.navigate('Profile',{name: 'Rabin'});
  }
  componentWillMount(){
    console.log('Home -------[componentWillMount]');
  }
  componentDidMount(){
    console.log('Home -------[componentDidMount]');
    this.props.onFetchItems();
  }
  componentDidUpdate(){
    console.log('Home -------[componentDidUpdate]');
  }
  componentWillUnmount(){
    console.log('Home -------[componentWillUnmount]');
  }
  fnReloadList=()=>{
    this.props.onFetchItems();
  }
  render() {
    //const props = this.props;
    return (
        <React.Fragment>
            <Loader show={this.props.loading} />
            <View style={styles.header}>
                <Image
                    accessibilityLabel="React logo"
                    source={{ uri: logo }}
                    resizeMode="contain"
                    style={styles.logo}
                />
                <Text style={styles.title}>React Native Web with multiple routes</Text>
            </View>
            
            <Button onPress={() => this.fnReloadList()} title="Reload List" />
            {this.props.items.length ? this.props.items.map((ele)=>
            <Link key={Math.random()} to={"/product/"+ele.id} >
                <Item class="box" name={ele.name} style={ele.style} qauntity={ele.quantity}/>
            </Link>
            ): null}
        </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
    app: {
      marginHorizontal: "auto",
      maxWidth: 500
    },
    logo: {
      height: 80
    },
    header: {
      padding: 20
    },
    title: {
      fontWeight: "bold",
      fontSize: "1.5rem",
      marginVertical: "1em",
      textAlign: "center"
    },
    text: {
      lineHeight: "1.5em",
      fontSize: "1.125rem",
      marginVertical: "1em",
      textAlign: "center"
    },
    link: {
      color: "#1B95E0"
    },
    code: {
      fontFamily: "monospace, monospace"
    }
});

const mapStateToProps = state => {
    return {
        items: state.items,
        loading: state.loading
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchItems: () => {
            dispatch(actionTypes.fetchItems());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
