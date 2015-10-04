/// <reference path="../main.d.ts"/>

class Controller {
  credentials: {
    username: string;
    password: string;
  }
  busyFlag: IFlag;
  submit() {

    this.busyFlag.switchOn();

    this.MyUser.login(this.credentials,
      // success
      ()=> {
        this.goToState.admin();
      },
      // fail
      ()=> {
        this.busyFlag.switchOff();
        alertify.error('Forkert brugernavn eller password');
      });

  }
  constructor(
    private $scope : ng.IScope,
    private Flag: IFlagConstructor,
    private goToState,
    private $element,
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
    controllerAs: 'vm',
    bindToController: true
  }
}

export {loginForm as default};
