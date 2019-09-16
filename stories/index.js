import React from 'react';
import { storiesOf } from '@storybook/react';
import KButton from '../components/KButton';

storiesOf('KButton', module)
  .add('with text', () => (
    <KButton onClick={() => alert('clicked') }>Text</KButton>
  ))
