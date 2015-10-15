/// <reference path="../../main.d.ts"/>

class Controller {
  diameter: any;
  type: string;
  constructor(
  ) {
    this.type = this.type || 'circular';
    this.diameter = this.diameter || '100%';
  }
}

function spinnerWrapper() {
  return {
    restrict: 'E',
    scope: {
      showWhen: '=',
      type: '@',
      diameter: '@'
    },
    transclude: true,
    templateUrl: ( element, attrs ) => {
      return ({
        'wrapper': 'layers/components/spinners/spinner-wrapper.directive.view.html',
        'fullscreen': 'layers/components/spinners/spinner-fullscreen.directive.view.html'
      })[attrs.template];
    },
    controller: Controller,
    controllerAs: 'vm',
    bindToController: true
  }
}

export {spinnerWrapper as default};
