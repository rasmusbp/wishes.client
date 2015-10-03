import appModule from "./app.module";
import rootRoutes from "./root.routes";
import wishesRoutes from "./wishes/wishes.routes";
import * as authSetup from "./authentication/auth.routes";
import adminRoutes from "./admin/admin.routes";
import Logintrl from "./authentication/login.ctrl";
import isAuthenticated from "./authentication/isAuthenticated";
import LayoutCtrl from "./layout/layout.ctrl";
import WishesCtrl from "./wishes/wishes.ctrl";
import AdminCtrl from "./admin/admin.ctrl";
import loginForm from "./authentication/login.directive";
import spinnerWrapper from "./components/spinners/spinner.directive";
import wishItem from "./components/wish-items/wish.item.directive";
import wishItemAdminListCtrl from "./components/wish-items/wish.item.admin-list.ctrl";
import flagFactory from "./utilities/Flag";
import defer from "./utilities/defer";

appModule
  // global: init setup
  .config(rootRoutes)
  .run(function ($window, $injector) {
    $window.$injector = $injector;
  })

  // layer: main layout
  .controller('layoutCtrl', LayoutCtrl)

  // layer: authentication
  .config(authSetup.authRoutes)
  .run(authSetup.denyUnauthorizedAccess)
  .controller('loginCtrl', Logintrl)
  .factory('isAuthenticated', isAuthenticated)

  // layer: admin
  .config(adminRoutes)
  .controller('adminCtrl', AdminCtrl)
  .directive('wLoginForm', loginForm)

  // layer: wishes
  .config(wishesRoutes)
  .controller('wishesCtrl', WishesCtrl)

  // shared: components
  .directive('wSpinnerWrapper', spinnerWrapper)
  .directive('wWishItem', wishItem)
  .controller('wishItemAdminListCtrl', wishItemAdminListCtrl)

  // shared: utilities
  .factory('Flag', flagFactory)
  .factory('defer', defer)

;
