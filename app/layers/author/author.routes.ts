/// <reference path="../main.d.ts"/>

function createEditRoutes( statesProvider, $stateProvider: ng.ui.IStateProvider ) {

  var states = statesProvider.get();
  var resolve = [ (isAuthenticated)=> { return isAuthenticated(); } ];
  var editView = {
    'author': {
      templateUrl: 'layers/author/author.view.html',
      controller: 'authorCtrl',
      controllerAs: 'authorCtrl',
    }
  };

  $stateProvider
  	.state(states.edit, {
		  url: '/edit/:id',
      resolve: resolve,
      views: editView
  	})
    .state(states.create, {
		  url: '/new',
      resolve: resolve,
      views: editView
  	});
}

export { createEditRoutes as default };
