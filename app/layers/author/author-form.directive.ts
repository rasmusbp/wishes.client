/// <reference path="../main.d.ts"/>

class Controller {
  wish: any;
  busyFlag: IFlag;
  submit() {
    var deferedLoader = this.defer(this.busyFlag.switchOn);
    this.wish.$save()
      .then(deferedLoader.cancel)
      .then(this.goToState.admin)
  }
  constructor(
    Flag: IFlagConstructor,
    Owner, /*: loopback.IOwner <- interface in the making */
    private defer: IDefer,
    private goToState
  ) {
    this.owners = Owner.find();
    this.busyFlag = new Flag('isBusy', this);
  }
}

function authorForm() {
  return {
    restrict: 'E',
    scope: {
      wish: '=',
      isEditMode: '='
    },
    transclude: true,
    templateUrl: 'layers/author/author-form.view.html',
    controller: Controller,
    controllerAs: 'vm',
    bindToController: true
  }
}

export {authorForm as default};
