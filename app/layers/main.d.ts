/// <reference path="../../typings/tsd.d.ts"/>

declare var alertify;

interface IFlagConstructor {
  new (key: string, bindTo: any, value?: boolean) : IFlag;
}

interface IFlag {
    switchOn() : void;
    switchOff() : void;
    toggle() : void;
}

interface IDefer {
  (method: Function, timer?: number ) : { cancel: Function }
}

declare module app {
  interface isAuthenticated {
    (): Thenable<string>; // 'authorized' | 'unauthorized'
  }
}

declare module loopback {
  interface IResource {

  }

  interface IMyUser extends IResource {

  }

}
