/// <reference path="./main.d.ts"/>

function rootRoutes( statesProvider, $stateProvider: ng.ui.IStateProvider ) {

  var states = statesProvider.get();

  $stateProvider
    .state(states.root, {
      url: '',
      templateUrl: 'layers/layout/layout.view.html',
      controller: 'layoutCtrl',
      controllerAs: 'layoutCtrl'
    });
}

export { rootRoutes as default };
