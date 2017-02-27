/// <reference path="../main.d.ts"/>

class LayoutCtrl {

  theme: any;

  isMainView() {
    return this.$state.current.name === 'root.wishes';
  }

  constructor(
    private $state,
    private goToState,
    private MyUser /*: loopback.IMyUser <- interface in the making */
  ) {

    if ($state.current.name === 'root') {
      goToState.wishes();
    }
  }

}

export { LayoutCtrl as default };
