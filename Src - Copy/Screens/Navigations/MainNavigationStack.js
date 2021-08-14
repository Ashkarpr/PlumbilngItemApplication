import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import RegistrationPage from "../RegistrationPage";
import LoginPage from "../LoginPage";

const Stack= createStackNavigator();

const MainNavigationStack =()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="RegistrationPage" component={RegistrationPage}/>
            <Stack.Screen name="LoginPage" component={LoginPage}/>
        </Stack.Navigator>
    )
}

export default MainNavigationStack;