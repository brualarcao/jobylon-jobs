import React from 'react';
import { render } from '@testing-library/react';
import Text from './index'

describe('Text Component', () => {
    it('Should render a Text component with size normal and color white', () => {
      const { getByTestId } = render(
        <Text size="normal" color="white" dataTest="text-test">
          Testing component
        </Text>
      );
  
      const text = getByTestId('text-test');
  
      expect(text).toBeInTheDocument();
      expect(text).toHaveTextContent('Testing component');
    });

    it('Should render a Text component with size large and color lighter', () => {
      const { getByTestId } = render(
        <Text size="large" color="lighter" dataTest="text-test">
          Testing component
        </Text>
      );
  
      const text = getByTestId('text-test');
  
      expect(text).toBeInTheDocument();
      expect(text).toHaveTextContent('Testing component');
    });

    it('Should render a Text component with size small and color darker', () => {
      const { getByTestId } = render(
        <Text size="small" color="darker" dataTest="text-test">
          Testing component
        </Text>
      );
  
      const text = getByTestId('text-test');
  
      expect(text).toBeInTheDocument();
      expect(text).toHaveTextContent('Testing component');
    });
  });