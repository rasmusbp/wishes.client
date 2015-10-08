/// <reference path="../../main.d.ts"/>

class Controller {
  constructor(
  ) {
  }
}

function grid( $compile ) {
  return {
    restrict: 'E',
    scope: {
      items: '='
    },
    transclude: true,
    templateUrl: 'layers/components/grid/grid.directive.view.html',
    controller: Controller,
    controllerAs: 'gridCtrl',
    bindToController: true,
    link: function(scope, element, attrs, controller, transclude) {

      transclude(scope, function(clone, scope){

        var li = angular.element(
          `<li class="w-grid--item" ng-repeat="item in gridCtrl.items"></li>`
        );

        li.append(clone);
        var liCompiled = $compile(li.clone())(scope);

        element.find('.w-grid-transclude').append(liCompiled);

      });



    }
  }
}

export {grid as default};
