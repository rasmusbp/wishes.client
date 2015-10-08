/// <reference path="../../main.d.ts"/>

function inputList() {
    return {
        restrict: 'E',
        require: 'ngModel',
        scope: {
            initPlaceholder: '@',
            labelId: '@'
        },
        templateUrl: 'layers/components/input-list/input-list.directive.view.html',
        link: function link(scope, element, attrs, ngModelCtrl) {

            ngModelCtrl.$render = function() {
                scope.values = ngModelCtrl.$viewValue;
            };

            scope.currentValue = undefined;
            scope.addCurrentValueAndClearInput = addCurrentValueAndClearInput;
            scope.removeValue = removeValue;
            scope.handleEnter = handleEnter;

            function getIndex( value ) {
                return scope['values'].indexOf( value );
            }

            function clearInput() {
                scope.currentValue = '';
            }

            function addValue(value) {
                if (!value || value === '') return;
                var index = getIndex(value);
                if ( index > -1 ) return;
                scope['values'].push(value);
                commitToNgModel( scope['values'] );
            }

            function removeValue(value) {
                if (!value) return;
                var index = getIndex(value);
                if ( index === -1 ) return;
                scope['values'].splice(index, 1);
            }

            function addCurrentValueAndClearInput() {
              addValue( scope.currentValue );
              clearInput();
              commitToNgModel( scope['values'] );
            }

            function commitToNgModel( values ) {
              ngModelCtrl.$setViewValue( values );
              ngModelCtrl.$commitViewValue();
            }

            function handleEnter( event ) {
              if (event.keyCode === 13) {
                addCurrentValueAndClearInput();
                event.preventDefault();
                return false;
              }
            }

        }
    }
}

export {inputList as default};
