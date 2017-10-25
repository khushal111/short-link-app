import React from 'react';
import { Accounts } from 'meteor/accounts-base';

export default class Lnk extends React.Component{
  onLogout(){
    Accounts.logout();
  }

  render(){
    return(
      <div>
        <h1>Your Minified Links</h1>
        <button onClick={this.onLogout.bind(this)}>Logout</button>
      </div>
    );
  }
}
