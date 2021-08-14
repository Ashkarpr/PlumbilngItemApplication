import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import MainNavigationStack from "./Src/Screens/Navigations/MainNavigationStack";

const App=()=>{
  return(
    <NavigationContainer>
      <MainNavigationStack/>
    </NavigationContainer>
  )}

  export default App;