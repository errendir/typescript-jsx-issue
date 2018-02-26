import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { EnhanceAComponent } from './enhancer'

type ConcreteProps = { a: number }

class ConcreteComponent extends React.Component<ConcreteProps> {
  render() { return null }
}

const EnhancedConcreteComponent = EnhanceAComponent<ConcreteProps, ConcreteComponent, typeof ConcreteComponent>(ConcreteComponent)

ReactDOM.render(<div>
  { React.createElement(EnhancedConcreteComponent, { a: 11, ref: (instance) => instance.doMagic() }) }
  <EnhancedConcreteComponent a={11} ref={(instance) => instance.doMagic()} />
</div>, document.querySelector("#whatever"))