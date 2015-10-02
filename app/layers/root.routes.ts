/// <reference path="./main.d.ts"/>

function rootRoutes( $stateProvider: ng.ui.IStateProvider ) {

  $stateProvider
    .state('root', {
      url: '',
      templateUrl: 'layers/layout/layout.view.html',
      controller: 'layoutCtrl',
      controllerAs: 'layoutCtrl'
    });
}

export { rootRoutes as default };
