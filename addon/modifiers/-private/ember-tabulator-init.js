import Modifier from 'ember-modifier';
import { registerDestructor } from '@ember/destroyable';
import { Tabulator } from 'tabulator-tables/dist/js/tabulator_esm.min.js';

function cleanup(tabulator) {
  tabulator?.destroy();
  tabulator = undefined;
}

export default class EmberTabulatorInitModifier extends Modifier {
  tabulator = undefined;

  constructor(owner, args) {
    super(owner, args);
    registerDestructor(this, cleanup);
  }

  modify(element, [options], { onUpdate }) {
    this.tabulator?.destroy();
    this.tabulator = new Tabulator(element, options);
    onUpdate?.(this.tabulator);
  }
}
