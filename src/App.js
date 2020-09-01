import React from 'react';
import { Switch , Route } from 'react-router-dom';
import {connect} from 'react-redux';

import './App.css';
import './pages/homepage/homepage.component';
import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth,createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.actions';


 {/* Switch - The moment it finds a mtached url 
      - it won't look further - if we remove exact,it will just match the first component that matches the route */}
      
class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        //console.log(userRef);
        userRef.onSnapshot(snapshot =>{
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      }
      
      else{
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact  path = '/' component = {HomePage} />
          <Route exact path = '/shop' component = {ShopPage} />
          <Route exact path = '/signin' component = {SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

//invoking the setCurrentUser action with the user payload- which returns the objecct - so we are just dispatching the object
const mapDispatchToProps = dispatch =>({
  setCurrentUser : user => dispatch(setCurrentUser(user))
});

export default connect(null,mapDispatchToProps)(App);
