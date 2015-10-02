/// <reference path="../main.d.ts"/>

export var authRoutes = function authRoutes( $stateProvider: ng.ui.IStateProvider ) {
  $stateProvider
  	.state('root.login', {
		  url: '/login',
      views: {
        'login': {
          templateUrl: 'layers/authentication/login.view.html',
          controller: 'loginCtrl'
        }
      }
  	})
    .state('root.logout', {
        onEnter: (
          $state: ng.ui.IStateService,
          MyUser /*: loopback.IMyUser <- interface in the making */
        ) => {
          MyUser.logout(() => {
            $state.go('root.wishes');
          });
        }
  	});
}

export var denyUnauthorizedAccess = function denyUnauthorizedAccess(
  $state: ng.ui.IStateService,
  $rootScope : ng.IRootScopeService
) {
  $rootScope.$on('$stateChangeError', ( ...args ) => {
      var error = _.last(args);
      if ( error === 'unauthorized') {
        $state.go('root.login');
      }
  });
}
