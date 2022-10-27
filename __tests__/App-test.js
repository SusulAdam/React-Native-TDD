import 'react-native';
import React from 'react';
import App from '../App';
import renderer from 'react-test-renderer';
import AsyncStorage from '@react-native-community/async-storage';
import {getValue, saveValue} from '../utils/asyncStorage';

it('renders correctly', () => {
  renderer.create(<App />);
});

beforeEach(async () => {
  await AsyncStorage.clear();
});

describe('getValues', () => {
  test('if no results exist at key, return an empty array', async () => {
    const result = await getValue();
    expect(result).toEqual([]);
  });

  test('returns an array of recent values', async () => {
    await AsyncStorage.setItem('DEMO::asyncStorage', JSON.stringify([{id: 1}]));
    const result = await getValue();
    expect(result).toEqual([{id: 1}]);
  });
});

describe('saveValues', () => {
  test('if no recent values exist, add item', async () => {
    await saveValue({id: 1});

    const result = await getValue();
    expect(result).toEqual([{id: 1}]);
  });

  test('add the latest values to the start of the array', async () => {
    await saveValue({id: 1});
    await saveValue({id: 2});

    const result = await getValue();
    expect(result).toEqual([{id: 2}, {id: 1}]);
  });
});
