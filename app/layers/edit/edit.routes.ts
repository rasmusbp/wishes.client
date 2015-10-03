/// <reference path="../main.d.ts"/>

function editRoutes( statesProvider, $stateProvider: ng.ui.IStateProvider ) {

  var states = statesProvider.get();

  $stateProvider
  	.state(states.edit, {
		  url: '/edit/:id',
      resolve: [ (isAuthenticated)=> { return isAuthenticated(); } ],
      views: {
        'admin': {
          templateUrl: 'layers/edit/edit.view.html',
          controller: 'editCtrl',
          controllerAs: 'editCtrl',
        }
      }
  	});
}

export { editRoutes as default };
