
'use strict';

var appModule = angular
  .module('Wishes', [
    'ui.router',
    'resources',
    'matchMedia',
    'uiSwitch'
  ]);

export { appModule as default };
