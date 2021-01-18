ember-tabulator
==============================================================================

A table renderer component that wraps [Tabulator](http://tabulator.info/).


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.16 or above
* Ember CLI v2.13 or above
* Node.js v10 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-tabulator
```


Usage
------------------------------------------------------------------------------

```hbs
<EmberTabulator
  @data={{this.data}}
  @columns={{this.columns}}
/>
```

All [supported options of Tabulator](http://tabulator.info/docs/4.7/options) can be given as component arguments, e.g.:

```hbs
<EmberTabulator
  @height="400px"
  @headerSort={{false}}
  @resizableColumns={{true}}
  @data={{this.data}}
  @columns={{this.columns}}
/>
```
