import React, { Component } from 'react';
import firebase from 'firebase';
import Login from './Login';
import RootNavigation from './Navigation'
import Loader from './Loader';
import { GoogleSignin } from 'react-native-google-signin';

import creds from '../auth_helpers/firebaseCreds';

export default class App extends Component {

    state = {loggedIn: null};

    componentWillMount(){

        firebase.initializeApp(creds);

        firebase.auth().onAuthStateChanged((user) => {
            if(user){
              this.setState({loggedIn: true});
            }
            else{
              this.setState({loggedIn: false});
            }
          });

        //Google initializer
        GoogleSignin.configure({
            iosClientId: '<FROM DEVELOPER CONSOLE>', // only for iOS
          })
          .then(() => {
            // you can now call currentUserAsync()
          });
    }

    renderInitialView(){
        console.log('hi from react')
        // if(this.state.loggedIn === true){
        //     return <RootNavigation />;
        // }
        // if(this.state.loggedIn === false){
            return <Login />;
        // }
        // return <Loader size='large'/>
    }

    render() {
        return (
            this.renderInitialView()
        );
    }
}

