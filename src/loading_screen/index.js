/*
 * Copyright (C) 2014-2018 L&T Technology Services, All Rights Reserved.
 *
 * This source code and any compilation or derivative thereof is the
 * proprietary information of L&T and is confidential in nature.
 * Under no circumstances is this software to be exposed to or placed under
 * an Open Source License of any type without the expressed written permission
 * of L&T.
 */

/**
 * @author Suryaprakash Thirumurugesan
 */
import React, {Component} from 'react';
//import ReactComponent from 'framework/react/component/'
// import MyComponent from 'framework/component'
import LoaderIcon from '../assets/loader.gif';

class LoadingScreen extends Component {
	constructor(props){
		super(props);
	}
	render() {
	    return (
	      <div>
	        <img className="Loader" key="loader" src={LoaderIcon} />
	      </div>
	    )
	 }
}


export default  LoadingScreen;