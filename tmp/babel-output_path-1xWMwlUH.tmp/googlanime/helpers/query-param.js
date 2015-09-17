export { queryParam };
import Ember from 'ember';

function queryParam(input, controller) {
  return controller.get(input);
}

;

export default Ember.Handlebars.makeBoundHelper(queryParam);