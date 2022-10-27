import AsyncStorage from '@react-native-community/async-storage';

export const saveValue = async recentValue => {
  try {
    const existingValue = await getValue();
    const newRecentValue = [recentValue, ...existingValue];
    return AsyncStorage.setItem(
      'DEMO::asyncStorage',
      JSON.stringify(newRecentValue),
    );
  } catch (err) {
    return;
  }
};

export const getValue = async () => {
  try {
    const result = await AsyncStorage.getItem('DEMO::asyncStorage');
    if (result) {
      return JSON.parse(result);
    }
    return [];
  } catch (err) {
    return [];
  }
};
