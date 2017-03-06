bridge.DataLayer = {
  get: function() {
    return bridge.callFn(function() {
      return window.dataLayer;
    });
  }
};
