/// <reference path="../main.d.ts"/>

function adminRoutes( $stateProvider: ng.ui.IStateProvider ) {
  $stateProvider
  	.state('root.admin', {
		  url: '/admin',
      resolve: [ (isAuthenticated)=> { return isAuthenticated(); } ],
      views: {
        'admin': {
          templateUrl: 'layers/admin/admin.view.html',
          controller: 'adminCtrl',
          controllerAs: 'adminCtrl',
        }
      }
  	})
}

export { adminRoutes as default };
