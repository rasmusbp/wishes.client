/// <reference path="../main.d.ts"/>

class Controller {
  credentials: {
    username: string;
    password: string;
  }
  busyFlag: IFlag;
  submit() {

    if (!this.$scope['loginForm'].$valid) {
      return;
    }

    this.busyFlag.switchOn();

    this.MyUser.login(this.credentials,
      // success
      ()=> {
        this.$state.go('root.admin');
      },
      // fail
      ()=> {
        this.$mdToast.show({
          templateUrl: 'loginFormErrorMessage',
          parent : this.$element[0].querySelectorAll('.message'),
          hideDelay: 3000,
          position: 'top right'
        });
      });
  }
  constructor(
    private $scope : ng.IScope,
    private Flag: IFlagConstructor,
    private $state: ng.ui.IStateService,
    private $element,
    private $mdToast : ng.material.IToastService,
    private MyUser /*: loopback.IMyUser <- interface in the making */
  ) {
    this.busyFlag = new Flag('isBusy', this);
  }
}

function loginForm() {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'layers/authentication/login.directive.view.html',
    controller: Controller,
    controllerAs: 'vm'
  }
}

export {loginForm as default};
