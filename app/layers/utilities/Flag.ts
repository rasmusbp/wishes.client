class Flag {

  switchOn: Function;
  switchOff: Function;
  toggle: Function;

  constructor(
    key: string,
    bindTo: any,
    value: boolean = false
  ) {

    bindTo[key] = value;

    this.switchOn = () => {
      bindTo[key] = true;
    }

    this.switchOff = () => {
      bindTo[key] = false;
    }

    this.toggle = () => {
      bindTo[key] = !bindTo[key];
    }

  }

}

function flagFactory() {
  return Flag;
}

export {flagFactory as default};
