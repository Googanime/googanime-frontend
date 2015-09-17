import RedirectHandler from 'torii/redirect-handler';

export default {
  name: 'torii-callback',
  before: 'torii',
  initialize: function initialize(container, app) {
    app.deferReadiness();
    RedirectHandler.handle(window.location.toString())["catch"](function () {
      app.advanceReadiness();
    });
  }
};