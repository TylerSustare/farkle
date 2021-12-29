import React, { ReactElement } from 'react';
import { Bootstrap } from '@components';
import { Navigator } from '@config/navigator';

export function App(): ReactElement {
  return (
    <Bootstrap>
      <Navigator />
    </Bootstrap>
  );
}
