/// <reference path="../../main.d.ts"/>

import WishItemCtrl from './WishItemCtrl';

class WishItemAuthorCtrl extends WishItemCtrl {

    owners: any;
    wish: any;
    uploader1: any;
    uploader2: any;
    isUserDone: boolean; // updated in view

    onImageRemove() {
      if ( !this.isEditMode ) return;
      this.updateWish();
    }
    onImageUpload() {
      if ( !this.isEditMode ) return;
      this.updateWish();
    }
    onImageUploadError() {
      this.notify('error', 'image_upload_error');
    }
    submit() {
        this.updateWish()
            .then(() => {
                if (this.isUserDone) {
                    this.goToState.wishes();
                } else {
                    this.$state.reload();
                }
            })
            .catch(() => this.notify('error', 'submit_error') )
    }
    constructor(
        // super's dependencies
        $injector,

        // local dependencies
        private goToState,
        private $state,
        Owner, /*: loopback.IOwner <- interface in the making */

        FileUploader
    ) {

        super($injector);
        this.isUserDone = false;
        this.owners = Owner.find();

    }
}

function wishItemAuthor() {
    return {
        restrict: 'E',
        scope: {
            wish: '=',
            isEditMode: '=',
            onDelete: '&',
            onSave: '&'
        },
        templateUrl: 'layers/components/wish-items/wish-item.author.directive.view.html',
        controller: WishItemAuthorCtrl,
        controllerAs: 'vm',
        bindToController: true
    }
}

export { wishItemAuthor as default};
