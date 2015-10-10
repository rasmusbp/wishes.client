/// <reference path="../../main.d.ts"/>

class OwnerQuickActions {
  owner: any;
  updateOwnerProxy() {
    this.updateOwner( 'owner_updated' );
  }
  updateOwner( type ) {
    return this.owner.$save()
        .then(() => {
          this.notify('success',
            type,
            this.owner.name
          );
        });
  }
  constructor(
    private notify
  ) {

  }
}

function ownerQuickActions() {
  return {
    restrict: 'E',
    scope: {
      owner: '='
    },
    templateUrl: 'layers/components/owner-item/owner-quick-actions.directive.view.html',
    controller: OwnerQuickActions,
    controllerAs: 'vm',
    bindToController: true
  }
}

export {ownerQuickActions as default};
