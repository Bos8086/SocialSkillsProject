jest.mock('@react-navigation/native', () => {
    return {
      createNavigatorFactory: jest.fn()
    };
  });
  
  jest.mock('@react-native-async-storage/async-storage', () =>
    require('@react-native-async-storage/async-storage/jest/async-storage-mock')
  );
  jest.mock('@react-navigation/native', () => {
      return {
        useNavigation: jest.fn(),
        useFocusEffect: jest.fn(),
        useIsFocused: jest.fn(),
        NavigationContainer:jest.fn()
      };
    });
    jest.mock('@react-navigation/drawer',() => 
    {
      return{
          createDrawerNavigator:jest.fn()
      }
    })
    jest.mock('@react-navigation/native-stack',() => 
    {
      return{
          createNativeStackNavigator:jest.fn()
      }
    })