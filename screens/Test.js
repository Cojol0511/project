import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";

import { createAppContainer, createSwitchNavigator } from "react-navigation";

const MainNavigator = createSwitchNavigator({
  Login: LoginScreen,
  Profile: ProfileScreen,
});

const App = createAppContainer(MainNavigator);

export default App;
