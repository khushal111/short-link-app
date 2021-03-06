import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom'
import { Tracker } from 'meteor/tracker';
import {routes,onAuthChange} from '../imports/routes/routes';


import Signup from '../imports/ui/Signup';
import Lnk from '../imports/ui/Link';
import NotFound from '../imports/ui/NotFound';
import Login from '../imports/ui/Login';

const unauthenticatedPages = ['/','/signup'];
const authenticatedPages = ['/links'];

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Login}/>
    <Route path="/signup" component={Signup}/>
    <Route path="/links" component={Lnk}/>
    <Route path="*" component={NotFound}/>
  </Router>
);

//window.browserHistory = browserHistory;

//Code to Route Pages when logged in and logged out

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
});

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});
