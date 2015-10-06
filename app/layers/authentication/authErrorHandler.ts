/// <reference path="../main.d.ts"/>

function authErrorHandler($httpProvider: ng.IHttpProvider) {

    $httpProvider.interceptors.push(function($q, $injector, LoopBackAuth, notify) {
        return {
            responseError: function(rejection) {

                if (rejection.status == 401) {
                    LoopBackAuth.clearUser();
                    LoopBackAuth.clearStorage();
                    $injector.get('goToState').login();
                    notify('error', 'logged_out');
                }
                if (rejection.status == 500) {
                    notify('error', 'server_error');
                }
                
                return $q.reject(rejection);
            }
        };

    });
}

export {authErrorHandler as default};
