/**
 * @format
 */

import 'react-native';
import React from 'react';
import {describe, test} from '@jest/globals';
import {render} from 'react-test-renderer';
import App from '../App';


describe("App Component", ()=>{
  test('Should render welcome message', () => {
    const { getByPlaceholderText, getByText } = render(<App />);  });

})
