/// <reference path="../main.d.ts"/>

function adminRoutes( statesProvider, $stateProvider: ng.ui.IStateProvider ) {

  var states = statesProvider.get();

  $stateProvider
  	.state(states.admin, {
		  url: '/admin',
      resolve: [ (isAuthenticated)=> { return isAuthenticated(); } ],
      views: {
        'admin': {
          templateUrl: 'layers/admin/admin.view.html',
          controller: 'adminCtrl',
          controllerAs: 'adminCtrl',
        }
      }
  	});
}

export { adminRoutes as default };
