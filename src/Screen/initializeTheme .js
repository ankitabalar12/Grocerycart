import AsyncStorage from "@react-native-community/async-storage";


export const initializeTheme = async () => {
  try {
    const storedTheme = await AsyncStorage.getItem('theme');
    return storedTheme || 'light'; // If no theme is stored, default to 'light'
  } catch (error) {
    console.error('Error retrieving theme preference:', error);
    return 'light'; // Return default theme in case of an error
  }
};
