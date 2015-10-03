function deferFactory( $timeout ) {
  return function( method: Function, timer: number = 500 ) {
     var buffer = $timeout(method, timer);
     return {
       cancel: $timeout.cancel.bind(null, buffer)
     }
  };
}

export {deferFactory as default};
