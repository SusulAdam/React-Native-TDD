import 'react-native';
import React from 'react';
import App from '../App';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});

describe('getValues', () => {
  test.todo('if no results exist at key, return an empty array');

  test.todo('returns an array of recent values');
});

describe('saveValues', () => {
  test.todo('if no recent values exist, add item');

  test.todo('add the latest values to the start of the array');
});
