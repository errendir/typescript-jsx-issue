type EnhancedComponentClass<Props, Component extends React.Component<Props>, ComponentClass extends React.ComponentClass<Props>> 
  = React.ClassType<Props, EnhancedComponent<Props,Component>, ComponentClass>

interface EnhancedComponent<OuterProps, Component> extends React.Component<OuterProps> { 
  doMagic: () => Component
}

export function EnhanceAComponent<
  Props,
  Component extends React.Component<Props>,
  ComponentClass extends React.ComponentClass<Props>
>(component: ComponentClass): EnhancedComponentClass<Props, Component, ComponentClass> {
  // Ignore the details of the actual enhancement process
  return 0 as any
}