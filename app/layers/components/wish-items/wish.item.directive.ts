/// <reference path="../../main.d.ts"/>

class Controller {
  constructor(
  ) {
  }
}

function directive() {
  return {
    restrict: 'E',
    scope: {
      wish: '='
    },
    transclude: true,
    templateUrl: ( elem, attrs ) => {
      var base = 'layers/components/wish-items';
      return ({
        'public' : `${base}/wish.item.directive.public.view.html`,
        'admin-list' : `${base}/wish.item.directive.admin-list.view.html`,
        'edit' :  `${base}/wish.item.directive.edit.view.html`,
      })[attrs.type];
    },
    controller: Controller,
    controllerAs: 'wishItemMainCtrl',
    bindToController: true
  }
}

export {directive as default};
