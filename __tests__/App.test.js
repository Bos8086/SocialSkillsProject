import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Linking,
  Appearance,
} from "react-native";
import React from "react";
import darkMode from "../styles/darkMode";
import { render, fireEvent } from '@testing-library/react-native';
import { useNavigation } from '@react-navigation/native';


import SupportServices from '../screens/SupportServices';
import FormalHomePage from "../screens/FormalHomePage";
import ConversationsPage from "../screens/ConversationsPage";
import WelcomePage from "../screens/WelcomePage";






//afterEach(cleanup);

//jest.useFakeTimers()

//expect.extend({ toHaveStyle });


// Mock the navigation object
// jest.mock('@react-navigation/native', () => ({
//   useNavigation: () => ({
//     navigate: jest.fn(),
//   }),
// }));

const navigationMock = {
  navigate: jest.fn(),
  goBack: jest.fn(),
  // Add any other methods or properties your component uses
};




//SupportServices all buttons
test('Test Pressable Buttons in Support Services', () => {
  const { getByText } = render(<SupportServices/>); // Render your component

  // Define the text content for each button
  const buttonTexts = [
    'https://autismwales.org/en/',
    'https://apcymru.org.uk/',
    'https://www.autismspeaks.org/',
    'https://autismadhdadvocates.co.uk/',
  ];

  // Iterate through each button text and simulate a button press
  buttonTexts.forEach((text) => {
    const pressableElement = getByText(text); // Find the button by its text content
    fireEvent.press(pressableElement); // Simulate a button press

    // You can add assertions here to check if the Linking.openURL function is called
    // You may need to mock the Linking.openURL function to avoid actual URL navigation in tests
  });
});



//Welcome Page
test('Test click to continue button on WelcomePage', () => {
  const { getByText } = render(<WelcomePage navigation={navigationMock} />); // Render your WelcomePage component

  const buttonText = 'Click Here to continue'; // Text content of your button

  const button = getByText(buttonText); // Find the button by its text content
  fireEvent.press(button); // Simulate a press event

  // Assert that navigation.navigate was called
  expect(navigationMock.navigate).toHaveBeenCalledWith('IntroPage');
});


test('Test Examples Button in FormalHome Page', () => {
  const { getByText } = render(<FormalHomePage navigation={navigationMock} />); // Render your WelcomePage component

  const buttonText = 'Examples'; // Text content of your button

  const button = getByText(buttonText); // Find the button by its text content
  fireEvent.press(button); // Simulate a press event

  // Assert that navigation.navigate was called
  expect(navigationMock.navigate).toHaveBeenCalledWith('FormalPage');
});