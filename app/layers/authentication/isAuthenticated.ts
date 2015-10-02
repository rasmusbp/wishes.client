/// <reference path="../main.d.ts"/>

factory.$inject = ['$q', 'MyUser']

function factory(
  $q: ng.IQService,
  MyUser /*: loopback.IMyUser <- interface in the making */
) {
  return function isAuthenticated() {

    var $defer = $q.defer();
    var isAuthenticated = MyUser.isAuthenticated();

    if ( isAuthenticated ) {
      $defer.resolve( 'authorized' );
    } else {
      $defer.reject( 'unauthorized' );
    }

    return $defer.promise;

  }
}

export default factory;
