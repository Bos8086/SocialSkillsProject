import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SecureStore from 'expo-secure-store';

export const getData = async (key) => {
    // get Data from Storage
    try {
      const data = await AsyncStorage.getItem(key);
      if (data !== null) {
        console.log(data);
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  