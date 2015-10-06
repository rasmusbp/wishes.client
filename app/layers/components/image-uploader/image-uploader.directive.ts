/// <reference path="../../main.d.ts"/>

declare var Modernizr;

var containerBase = '/api/containers/images';

class Controller {
  uploader: any;
  outputUrl: string;
  fileName: string;
  isUploading: boolean;
  uploadProgress: number;
  uploadingFlag: IFlag;
  deferedUploadFlag: IDeferedMethod;
  ImageContainer: any;
  onDelete: Function;
  onUploadSuccess: Function;
  onUploadError: Function;
  file: any;
  hasDragAndDrop() {
    return Modernizr.draganddrop;
  }

  isTouch() {
    return Modernizr.touch;
  }
  getUrl( fileName ) {
    return `${containerBase}/download/${fileName}`
  }
  triggerFilePicker($event: Event) {
    var input = this.$element[0].querySelectorAll('.w-image-uploader__input')[0];
    angular.element(input).trigger('click');
  }
  setUploadProgress( value ) {
    this.uploadProgress = value;
  }
  constructor (
    $scope,
    defer,
    Flag : IFlagConstructor,
    private $element : Element[],
    private Container,
    FileUploader
  ) {

    this.uploadingFlag = new Flag('isUploading', this);

    // TODO: abstract this
    var uploader = new FileUploader({
        url: `${containerBase}/upload`,
        formData: [
          { key: 'value' }
        ],
        queueLimit: 1,
        removeAfterUpload: true,
        autoUpload: !this.isTouch()
    });

    this.isUploading = false;
    this.uploadProgress = 0;

    uploader.filters.push({
        name: 'imageFilter',
        fn: function(item, options) {
            var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
            return '|jpg|png|jpeg|gif|'.indexOf(type) !== -1;
        }
    });

    uploader.onSuccessItem = (item, result, ...args) => {
        var fileName = result.result.files.file[0].name;

        $scope.commitToNgModel( this.getUrl( fileName ) );

        // reset progress bar
        this.deferedUploadFlag.cancel();
        this.uploadingFlag.switchOff();
        this.setUploadProgress(0);

        this.onUploadSuccess.apply(null, [item, result, ...args]);

    };

    uploader.onErrorItem = (...args) => {
        this.onUploadError(...args);
    };

    uploader.onAfterAddingFile = (item) => {

      // if upload is still in progress after 0.5s
      // then show progress bar
      this.deferedUploadFlag = defer(this.uploadingFlag.switchOn);

      // auto-upload doesn't work on touch devices
      // so we process this manually
      if ( this.isTouch() ) {
        this.uploader.addToQueue( item );
        this.uploader.uploadAll();
      }

    };

    uploader.onProgressItem = (item, progress) => {
      this.setUploadProgress(progress);
    }

    this.uploader = uploader;

  }
}

function imageUploader() {
  return {
    restrict: 'E',
    require: 'ngModel',
    scope: {
      onDelete: '&',
      onUploadError: '&',
      onUploadSuccess: '&'
    },
    transclude: true,
    templateUrl: 'layers/components/image-uploader/image-uploader.directive.view.html',
    controller: Controller,
    controllerAs: 'ctrl',
    bindToController: true,
    link: ( scope, element, attr, ngModelCtrl : ng.INgModelController ) => {

      ngModelCtrl.$render = function() {
          scope.outputUrl = ngModelCtrl.$viewValue;
          scope.fileName = getFileName( scope.outputUrl );
      };

      scope.deleteFileHandler = deleteFileHandler;
      scope.commitToNgModel = commitToNgModel;

      function deleteFileHandler( event ) {
        event.preventDefault();
        deleteFile().then(scope.ctrl.onDelete);
        return false;

      }
      function deleteFile() {
        return scope.ctrl.Container.removeFile({
          container: 'images',
          file: scope.fileName
        }).$promise
          .then(() => scope.outputUrl = '' )
          .then(() => commitToNgModel( scope.outputUrl ) )
      }

      function commitToNgModel( outputUrl ) {
        ngModelCtrl.$setViewValue( outputUrl );
        ngModelCtrl.$commitViewValue();
        ngModelCtrl.$render();
      }

      function getFileName( outputUrl ) {
        return (outputUrl || '').replace(`${containerBase}/download/`, '');
      }

    }
  }
}

export { imageUploader as default};
