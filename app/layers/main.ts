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
import flagFactory from "./utilities/Flag";

appModule
  // global: init setup
  .config(rootRoutes)

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

  // shared: utilities
  .factory('Flag', flagFactory)

;
