/// <reference path="../main.d.ts"/>

function onImagesLoaded( $q: ng.IQService ) {
  return ( images ) => {

        var imageArray = Array.prototype.slice.call(images);

        var promises = imageArray.map((image) => {

            var defer = $q.defer();

            if (image.height) { // <- already loaded
                defer.resolve(image);
            } else {
                image.onload = function( defer, image ) {
                    image.onload = null;
                    defer.resolve(image);
                }.bind(null, defer, image);
            }

            return defer.promise;

        });

        return $q.all(promises);

  };
}

export {onImagesLoaded as default};
