/*
 * Copyright (C) 2014-2018 L&T Technology Services, All Rights Reserved.
 *
 * This source code and any compilation or derivative thereof is the
 * proprietary information of L&T and is confidential in nature.
 * Under no circumstances is this software to be exposed to or placed under
 * an Open Source License of any type without the expressed written permission
 * of L&T.
 */

import React, {Component} from 'react';
//import ReactComponent from 'framework/react/component/';
// import MyStack from 'framework/stack'
//import {Logger} from 'framework/logger'
//import LaunchSequence from 'app/managers/launch_sequence'
import LoadingScreen from '../loading_screen/';
//import TagManager from 'app/managers/tag_manager'
//import {APP_VERSION} from 'app/definitions/configuration'
import './index.scss';

class SplashScreen extends Component {
  constructor(props) {
    super(props);
  }
/*
  destroyOnHide = true
  MODULE_NAME = "SplashScreen"*/

/*  onMountComplete() {
    this.keys.loader.show()
    LaunchSequence.getLaunchApis()
      .then(() => {
        this.keys.loader.hide()
        return LaunchSequence.isUserLoggedIn()
          .then(() => this.getAppSupport("navigation").openCollectionScreen())
          .catch(() => {
            console.log("NOT authorised")
            this.keys.loader.show()
            return LaunchSequence.getGuestAuthenticationApis()
              .then(() => {
                this.keys.loader.hide()
                this.getAppSupport("navigation").openWelcomeScreen()
              })
          })
      })
      .catch((e) => this.getAppSupport("navigation").openFullScreenError(e, this.onMountComplete.bind(this)))
  }*/

  render() {
    return (
      <div className="SplashScreen">
        <LoadingScreen className="ScreenLoader" key="loader" />
        <div className="AppVersion">{`App Version: ${'1.20'}`}</div>
      </div>
    )
  }

/*  onShow() {
    Logger.log(this.MODULE_NAME, 'onShow')
    TagManager.sendPageInfo("splash")
  }

  onKeyBack() {
    this.getOttApp().exit()
  }*/
}


export default SplashScreen;