bridge.Location = {
  go: function(url) {
    return bridge.callFn(function(url) {
      window.location = url;
    }, url)
  },
  getHref: function() {
    return bridge.callFn(function() {
      return location.href;
    });
  }
};
