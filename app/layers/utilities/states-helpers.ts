var _statesMap = {
    root: 'root',
    wishes: 'root.wishes',
    login: 'root.login',
    logout: 'root.logout',
    edit: 'root.edit',
    create: 'root.create',
};

export var states = function states() {

    function _get() {
        return _statesMap;
    }

    return {
        get: _get,
        $get: _get
    }
}

export var goToState = function goToState( $state ) {

  var methodMap = {};

  Object.keys(_statesMap).forEach(( name ) => {
    methodMap[name] = (...args) => {
      $state.go.apply(null, [_statesMap[name], ...args]);
    }
  });

  return methodMap;

}
