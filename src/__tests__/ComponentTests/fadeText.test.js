import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FadeText from '../../components/FadeText'



test('button works', async () => {
  const { getByText } = render(<FadeText />)

   
  // Click button
  fireEvent.click(getByText('Toggle text'))
  
  

})