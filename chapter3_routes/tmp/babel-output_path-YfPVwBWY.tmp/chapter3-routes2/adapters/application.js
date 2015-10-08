//  app/adapters/application.js

import Ember from 'ember';
// import config from '../config/environment';
// import Firebase from 'firebase';
import FirebaseAdapter from 'emberfire/adapters/firebase';

var inject = Ember.inject;

export default FirebaseAdapter.extend({
  firebase: inject.service()
});
// firebase: new FireBase(config.firebase)