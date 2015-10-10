//
// Imports for Angular
import appModule from "./app.module";
import rootRoutes from "./root.routes";
import wishesRoutes from "./wishes/wishes.routes";
import authErrorHandler from "./authentication/authErrorHandler";
import * as authSetup from "./authentication/auth.routes";
import authorRoutes from "./author/author.routes";
import Logintrl from "./authentication/login.ctrl";
import isAuthenticated from "./authentication/isAuthenticated";
import LayoutCtrl from "./layout/layout.ctrl";
import WishesCtrl from "./wishes/wishes.ctrl";
import AuthorCtrl from "./author/author.ctrl";
import loginForm from "./authentication/login.directive";
import spinnerWrapper from "./components/spinners/spinner.directive";
import inputList from "./components/input-list/input-list.directive";
import imageUploader from "./components/image-uploader/image-uploader.directive";
import grid from "./components/grid/grid.directive";

import wishListItem from "./components/wish-items/wish-list-item.directive";
import wishGridItem from "./components/wish-items/wish-grid-item.directive";
import wishItemAuthor from "./components/wish-items/wish-item.author.directive";
import wishQuickActions from "./components/wish-items/wish-quick-actions.directive";
import ownerQuickActions from "./components/owner-item/owner-quick-actions.directive";

import flagFactory from "./utilities/Flag";
import defer from "./utilities/defer";
import notifyFactory from "./utilities/notify";
import * as stateHelpers from "./utilities/states-helpers";
import viewport from "./utilities/viewport";
import WishSchema from "./utilities/WishSchema";
import onImagesLoaded from "./utilities/onImagesLoaded";

appModule
  // global: init setup
  .config(rootRoutes)
  .run(function ($window, $injector) {
    $window.$injector = $injector;
  })

  // layer: main layout
  .controller('layoutCtrl', LayoutCtrl)

  // layer: authentication
  .config(authErrorHandler)
  .config(authSetup.authRoutes)
  .run(authSetup.denyUnauthorizedAccess)
  .controller('loginCtrl', Logintrl)
  .directive('wLoginForm', loginForm)
  .factory('isAuthenticated', isAuthenticated)

  // layer: edit + create
  .config(authorRoutes)
  .controller('authorCtrl', AuthorCtrl)

  // layer: wishes
  .config(wishesRoutes)
  .controller('wishesCtrl', WishesCtrl)

  // shared: components
  .directive('wSpinnerWrapper', spinnerWrapper)
  .directive('wGrid', grid)
  .directive('wInputList', inputList)
  .directive('wImageUploader', imageUploader)
  .directive('wishGridItem', wishGridItem)
  .directive('wishListItem', wishListItem)
  .directive('wishItemAuthor', wishItemAuthor)
  .directive('wishQuickActions', wishQuickActions)
  .directive('ownerQuickActions', ownerQuickActions)

  // shared: utilities
  .factory('Flag', flagFactory)
  .factory('defer', defer)
  .factory('notify', notifyFactory)
  .provider('states', stateHelpers.states)
  .factory('goToState', stateHelpers.goToState)
  .factory('viewport', viewport)
  .factory('onImagesLoaded', onImagesLoaded)
  .value('WishSchema', WishSchema)

;
