class LoginCtrl {

  constructor(
    goToState,
    MyUser
  ) {
    if ( MyUser.isAuthenticated() ) {
      goToState.wishes();
    }
  }

}

export { LoginCtrl as default };
