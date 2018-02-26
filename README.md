Run `npm start` and look at the code triggering the error.

```
const el1 = React.createElement(EnhancedConcreteComponent, { a: 11, ref: (instance) => instance.doMagic() })
```
works well while seemingly equivalent:
```
const el2 = <EnhancedConcreteComponent a={11} ref={(instance) => instance.doMagic()} />
```
triggers an error.