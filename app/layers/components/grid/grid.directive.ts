/// <reference path="../../main.d.ts"/>

declare var Isotope;

class Controller {
    constructor(
    ) {
    }
}

function grid($compile, viewport, $q) {
    return {
        restrict: 'E',
        scope: {
            items: '='
        },
        transclude: true,
        templateUrl: 'layers/components/grid/grid.directive.view.html',
        controller: Controller,
        controllerAs: 'gridCtrl',
        bindToController: true,
        link: function(scope, element, attrs, controller, transclude) {

            // programmaticaly transclude content so we can inject the scope
            transclude(scope, function(clone, scope) {

                var li = angular.element(
                    `<li class="w-grid--item" ng-repeat="item in gridCtrl.items"></li>`
                );

                li.append(clone);
                var liCompiled = $compile(li.clone())(scope);

                element.find('.w-grid-transclude').append(liCompiled);

            });

            scope.$watch('items.length', function() {

                var images = element[0].querySelectorAll('img');

                // TODO: put this in a service
                function onImagesLoaded(images) {

                    var promises = [];
                    var count = 0;
                    var imageArray = Array.prototype.slice.call(images);

                    imageArray.forEach((image) => {
                        var defer = $q.defer();
                        promises.push(defer.promise);
                        if (image.height) { // <- already loaded
                            defer.resolve(image);
                            return;
                        }
                        image.onload = () => {
                            defer.resolve(image);
                        };
                    });

                    return $q.all(promises);

                }

                onImagesLoaded(images).then(() => {
                    console.log('her');
                    var iso = new Isotope('.w-grid', {
                        itemSelector: '.w-grid--item',
                        percentPosition: true,
                        masonry: {
                            columnWidth: 300,
                            gutter: 10
                        }
                    });
                });
                
            });







        }
    }
}

export {grid as default};
