import Modifier from 'ember-modifier';
import { registerDestructor } from '@ember/destroyable';
import { TabulatorFull as Tabulator } from 'tabulator-tables/dist/js/tabulator_esm.min.js';

export default class EmberTabulatorInitModifier extends Modifier {
  tabulator = undefined;

  constructor(owner, args) {
    super(owner, args);
    registerDestructor(this, () => {
      this.tabulator?.destroy();
      this.tabulator = undefined;
    });
  }

  modify(element, [options], { onUpdate }) {
    this.tabulator?.destroy();
    this.tabulator = new Tabulator(element, options);
    onUpdate?.(this.tabulator);
  }
}
