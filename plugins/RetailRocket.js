// Provide helpers to work with RR

bridge.RetailRocket = {
  // itemsIds - array of ids
  recommendations(itemsIds, options) {
    return bridge.callFn(function(itemsIds, options) {
      return new floctory.Promise(function(resolve) {
        window.rrApiOnReady = window.rrApiOnReady || [];
        rrApiOnReady.push(function() {
          retailrocket.recommendation
            .forProducts(retailrocket.api.getPartnerId(), itemsIds, 'alternative', options, resolve);
        })
      });
    }, itemsIds, options);
  }
};
