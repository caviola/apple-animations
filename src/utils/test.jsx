import React from 'react';
import { render as baseRender } from '@testing-library/react';

export function render(component) {
  const result = baseRender(component);
  return {
    ...result,
    setProps(newProps) {
      result.rerender(React.cloneElement(component, newProps));
    },
  };
}
