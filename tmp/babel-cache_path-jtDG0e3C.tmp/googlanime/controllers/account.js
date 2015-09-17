import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    invalidate: function invalidate() {
      this.get('session').invalidate();
      console.debug("Session has been shut down");
    } }
});