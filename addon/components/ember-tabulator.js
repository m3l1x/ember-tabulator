import { action } from '@ember/object';
import Component from '@glimmer/component';

export default class EmberTabulatorComponent extends Component {
  instance = undefined;

  @action
  setInstance(instance) {
    this.instance = instance;
  }

  @action
  updateData() {
    this.instance?.setData(this.args.data);
  }
}
