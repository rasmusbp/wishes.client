
'use strict';

var appModule = angular
  .module('Wishes', [
    'ui.router',
    'resources',
    'matchMedia',
    'angularFileUpload',
    'iso.directives',
    'uiSwitch'
  ]);

export { appModule as default };
