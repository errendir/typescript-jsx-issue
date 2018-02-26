import * as React from 'react'

import { EnhanceAComponent } from './enhancer'

type ConcreteProps = { a: number }

class ConcreteComponent extends React.Component<ConcreteProps> {
  render() { return null }
}

const EnhancedConcreteComponent = EnhanceAComponent<ConcreteProps, ConcreteComponent, typeof ConcreteComponent>(ConcreteComponent)

const el1 = React.createElement(EnhancedConcreteComponent, { a: 11, ref: (instance) => instance.doMagic() })
const el2 = <EnhancedConcreteComponent a={11} ref={(instance) => instance.doMagic()} />