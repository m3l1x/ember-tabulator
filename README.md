# ember-tabulator

A table renderer component that wraps [Tabulator](http://tabulator.info/).


## Compatibility

* Ember.js v4.4 or above
* Ember CLI v4.4 or above
* Node.js v16 or above


## Installation

```
ember install ember-tabulator
```


## Usage

```hbs
<EmberTabulator
  @data={{this.data}}
  @columns={{this.columns}}
/>
```

All [supported options of Tabulator](http://tabulator.info/docs/4.7/options) can be given as component arguments, e.g.:

<<<<<<< HEAD
```hbs
<EmberTabulator
  @height="400px"
  @headerSort={{false}}
  @resizableColumns={{true}}
  @data={{this.data}}
  @columns={{this.columns}}
/>
```
=======
## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.


## License

This project is licensed under the [MIT License](LICENSE.md).
>>>>>>> 4ffd364 (v3.24.0...v5.2.0)
