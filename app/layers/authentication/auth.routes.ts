/// <reference path="../main.d.ts"/>

export var authRoutes = function authRoutes( statesProvider, $stateProvider: ng.ui.IStateProvider ) {

  var states = statesProvider.get();

  $stateProvider
  	.state(states.login, {
		  url: '/login',
      views: {
        'login': {
          templateUrl: 'layers/authentication/login.view.html',
          controller: 'loginCtrl'
        }
      }
  	})
    .state(states.logout, {
        onEnter: (
          goToState,
          MyUser /*: loopback.IMyUser <- interface in the making */
        ) => {
          MyUser.logout(() => {
            goToState.wishes();
          });
        }
  	});
}

export var denyUnauthorizedAccess = function denyUnauthorizedAccess(
  goToState,
  $rootScope : ng.IRootScopeService
) {
  $rootScope.$on('$stateChangeError', ( ...args ) => {
      var error = args[args.length - 1];
      if ( error === 'unauthorized') {
        goToState.login();
      }
  });
}
