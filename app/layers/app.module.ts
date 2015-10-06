
'use strict';

var appModule = angular
  .module('Wishes', [
    'ui.router',
    'resources',
    'matchMedia',
    'angularFileUpload',
    'uiSwitch'
  ]);

export { appModule as default };
