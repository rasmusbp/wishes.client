/// <reference path="../main.d.ts"/>

declare var alertify;

import messages from './messages';

var types = {
  'confirm': ( msg, cb ) => {
    alertify.confirm(msg, cb);
  },
  'info': ( msg, cb ) => {
    alertify.log( msg )
    cb();
  },
  'success': ( msg, cb ) => {
    alertify.success( msg )
    cb();
  },
  'error': ( msg, cb ) => {
    alertify.error( msg );
    cb();
  },
};

alertify.set({ labels: {
    ok     : 'Ok',
    cancel : 'Fortryd'
} })

function notifyFactory($q: ng.IQService) {
    return (type, code, ...args) => {

      var defer = $q.defer();
      types[type](messages[code](...args), cb);

      function cb() {
        defer.resolve.apply(null, arguments);
      }

      return defer.promise;

    };
}

export {notifyFactory as default};
