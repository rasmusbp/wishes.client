/// <reference path="../main.d.ts"/>

function adminRoutes( $stateProvider: ng.ui.IStateProvider ) {
  $stateProvider
  	.state('root.admin', {
		  url: '/admin',
      resolve: [ (isAuthenticated)=> { return isAuthenticated(); } ]
  	})
}

export { adminRoutes as default };
