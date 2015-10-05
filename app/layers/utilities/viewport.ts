/// <reference path="../main.d.ts"/>

function viewportFactory( screenSize ) {

    var sizes = {
      large: () => screenSize.is('lg'),
      medium : () => screenSize.is('md'),
      small : () => screenSize.is('sm'),
      xsmall : () => screenSize.is('xs')
    }

    return {
      on: screenSize.on,
      is: {
          large : sizes.large,
          medium : sizes.medium,
          small : sizes.small,
          xsmall : sizes.xsmall,
          xsmallOrSmall: () => sizes.xsmall() || sizes.small(),
          mediumOrLarge: () => sizes.medium() || sizes.large()
      }
    };

}

export {viewportFactory as default};
