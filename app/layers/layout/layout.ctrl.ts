/// <reference path="../main.d.ts"/>

class LayoutCtrl {

  constructor(
    private $state,
    private goToState,
    private MyUser /*: loopback.IMyUser <- interface in the making */
  ) {

  }

}

export { LayoutCtrl as default };
