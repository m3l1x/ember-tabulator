import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class EmberTabulatorComponent extends Component {
  @tracked instance;

  @action
  setInstance(instance) {
    this.instance = instance;
  }
}
