/// <reference path="../../main.d.ts"/>

declare var Isotope;

class Controller {
    constructor(
    ) {
    }
}

function grid(
    $compile,
    onImagesLoaded,
    $timeout) {
    return {
        restrict: 'E',
        scope: {
            items: '=',
            context: '=',
            filterBy: '=?',
            sortBy: '=?',
            sortByOptions: '=?'
        },
        transclude: true,
        template: '<span></span>', // <- transclusion is programmaticaly added in link method
        controller: Controller,
        controllerAs: 'gridCtrl',
        bindToController: true,
        link: function(scope, element, attrs, controller, transclude) {

            var filter = scope.gridCtrl.filter ? `| ${scope.gridCtrl.filter}` : ``;
            var repeater = `item in gridCtrl.localItems = (gridCtrl.items)`
            var itemTemplate = `<div class="w-grid--item" ng-repeat="${repeater}"></div>`;

            // programmaticaly transclude content so we can inject the scope
            transclude(scope, function(clone, scope) {

                var item = angular.element( itemTemplate );

                item.append(clone);
                var itemCompiled = $compile(item.clone())(scope);

                element.append(itemCompiled);

            });

            var dispose = scope.$watch('gridCtrl.localItems.length', (length) => {
              if ( !length ) return;
              dispose();
              renderGrid().then((isotope) => {

                scope.$watch('gridCtrl.localItems.length', () => isotope.layout() );
                scope.$watchCollection(() => {
                  return ([scope.gridCtrl.sortBy]).concat(scope.gridCtrl.filterBy);
                }, (val) => {

                  isotope.arrange({
                    sortBy: val[0],
                    filter: function() {

                      var value = val[1] ? val[1].value : null,
                          selector = val[1] ? val[1].selector : null;

                      if (!value || val[1] === '') return true;

                      var DOMValue = this.querySelector( selector ).innerText;
                      return DOMValue === value;

                    }
                  })
                });

              });
            });


            function renderGrid() {

              var images = element[0].querySelectorAll('img');

              return onImagesLoaded(images).then(() => {
                return new Isotope(element[0], {
                    itemSelector: '.w-grid--item',
                    getSortData: getSortOptions(),
                    masonry: {
                        columnWidth: '.w-grid--item',
                        gutter: 10
                    }
                });
              });

            }

            function getSortOptions() {
              if ( !scope.gridCtrl.sortByOptions ) return {};
              var options = {};
              scope.gridCtrl.sortByOptions.forEach( key  => options[key] =  `.${key}`);
              return options;
            }

        }
    }
}

export {grid as default};
