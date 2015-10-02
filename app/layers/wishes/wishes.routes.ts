/// <reference path="../main.d.ts"/>

function wishesRoutes( $stateProvider: ng.ui.IStateProvider ) {

  $stateProvider
    .state('root.wishes', {
      url: '/wishes',
      views: {
        'public': {
          templateUrl: 'layers/wishes/wishes.view.html',
          controller: 'wishesCtrl',
          controllerAs: 'wishesCtrl'
        }
      }
    });
}

export { wishesRoutes as default };
