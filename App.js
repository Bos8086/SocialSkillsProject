import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Appearance,
  useWindowDimensions,
  Button
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ProfilePage from "./screens/ProfilePage";
import IntroPage from "./screens/IntroPage";
import AutisticHomePage from "./screens/AutisticHomePage";
import NonAutistcHomePage from "./screens/NonAutisticHomePage";
import FormalPage from "./screens/FormalPage";
import InformalPage from "./screens/InformalPage";
import WelcomePage from "./screens/WelcomePage";
import Settings from "./screens/Settings";
import SupportServices from "./screens/SupportServices";
import ConversationsPage from "./screens/ConversationsPage";
import TipsPage from "./screens/TipsPage";
import BodyLanguage from "./screens/BodyLanguage";
import {MyProvider}  from "./utils/context"; // Import your context provider
import IdiomsPage from "./screens/IdiomsPage";
import FormalHomePage from "./screens/FormalHomePage";
import InformalHomePage from "./screens/InformalHomePage";
import FormalQuizPage from "./screens/FormalQuizPage";
import InformalQuizPage from "./screens/InformalQuizPage";
import DisclaimerScreen from "./screens/DisclaimerScreen";
import 'expo-dev-client';

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

const colorScheme = Appearance.getColorScheme();

const AutisticSupportDrawerNavigator = () => {
  const dimensions = useWindowDimensions();
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: colorScheme == "light" ? "white" : "lightgrey",
          width: dimensions.width / 2,
        },
      }}
      
    >
      <Drawer.Group>
        <Drawer.Screen
          name="AutisticHomePage"
          component={NonAutistcHomePage}
          options={{
            title: "Ways to Support",
            headerRight: () => (
              <Button title="Back" onPress={() => navigation.navigation(" Autistc Support")} />
            ),
            drawerActiveBackgroundColor:
              colorScheme == "light" ? "blue" : "grey",
            
          }}
        ></Drawer.Screen>
        <Drawer.Screen
          name="AutisticServices"
          component={SupportServices}
          options={{
            title: "Support Services",
            drawerActiveBackgroundColor:
              colorScheme == "light" ? "blue" : "grey",
          }}
        ></Drawer.Screen>
      </Drawer.Group>
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
   
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
            name="DisclaimerScreen"
            component={DisclaimerScreen}
            options={{ title: "Disclaimer" }}
          />

          <Stack.Screen
            name="WelcomePage"
            component={WelcomePage}
            options={{ title: "Welcome" }}
          />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen
            name="IntroPage"
            component={IntroPage}
            options={{ title: "Home Page" }}
          />
          <Stack.Screen
            name="AutisticHomePage"
            component={AutisticHomePage}
            options={{ title: "Autistic" }}
          />
          <Stack.Screen
            name="ConversationsPage"
            component={ConversationsPage}
            options={{ title: "Conversations" }}
          />
          <Stack.Screen
            name="TipsPage"
            component={TipsPage}
            options={{ title: "Tips" }}
          />
          <Stack.Screen
            name="NonAutisticHomePage"
            component={AutisticSupportDrawerNavigator}
            //options={{ headerShown: false }}
            options={{ 
              title: " Autistc Support",
             

          }}
          />
          <Stack.Screen
            name="FormalPage"
            component={FormalPage}
            options={{ title: " Formal Conversations " }}
          />
           <Stack.Screen
            name="FormalHomePage"
            component={FormalHomePage}
            options={{ title: " Formal HomePage " }}
          />
          <Stack.Screen
            name="FormalQuizPage"
            component={FormalQuizPage}
            options={{ title: " Formal Quiz " }}
          />
          <Stack.Screen
            name="InFormalQuizPage"
            component={InformalQuizPage}
            options={{ title: " InFormal Quiz " }}
          />
          <Stack.Screen
            name="InFormalHomePage"
            component={InformalHomePage}
            options={{ title: " InFormal HomePage " }}
          />
          <Stack.Screen
            name="InformalPage"
            component={InformalPage}
            options={{ title: " InFormal Conversations " }}
          />
          <Stack.Screen 
            name="BodyLanguage"
            component={BodyLanguage}
            options={{ title: " Body Language " }}
          />

          <Stack.Screen 
            name="IdiomsPage"
            component={IdiomsPage}
            options={{ title: " Idioms " }}
          />

          <Stack.Screen name="ProfilePage" component={ProfilePage} />


        </Stack.Navigator>
      </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
