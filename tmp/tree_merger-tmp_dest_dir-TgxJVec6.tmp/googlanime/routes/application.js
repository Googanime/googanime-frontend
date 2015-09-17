import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {

  beforeModel: function beforeModel() {
    this.transitionTo('search');
  },

  actions: {
    //call the account invalidateSession
    invalidateSession: function invalidateSession() {
      this.controllerFor('account').send('invalidate');
    },

    showData: function showData() {
      alert(authData);
    }
  }
});