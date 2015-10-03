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
    templateUrl: 'layers/components/spinners/spinner.directive.view.html',
    controller: Controller,
    controllerAs: 'vm',
    bindToController: true
  }
}

export {spinnerWrapper as default};
