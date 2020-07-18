import Modifier from 'ember-modifier';
import Tabulator from 'tabulator-tables';

export default class EmberTabulatorInitModifier extends Modifier {
  tabulator = undefined;

  get options() {
    return this.args.positional[0];
  }

  get setInstance() {
    return this.args.named.onUpdate;
  }

  didReceiveArguments() {
    this.tabulator?.destroy();
    this.tabulator = new Tabulator(this.element, this.options);
    this.setInstance(this.tabulator);
  }

  willRemove() {
    this.tabulator?.destroy();
    this.tabulator = undefined;
  }
}
