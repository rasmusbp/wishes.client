/// <reference path="../main.d.ts"/>

class LayoutCtrl {

  constructor(
    private MyUser /*: loopback.IMyUser <- interface in the making */
  ) {
    console.log('layout ctrl');
  }

}

export { LayoutCtrl as default };
