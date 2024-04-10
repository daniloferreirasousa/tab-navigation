import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeStack from "./HomeStack";
import TabAboutScreen from '../pages/TabAboutScreen';
import TabConfigScreen from '../pages/TabConfigScreen';

import CustomTabBar from "../components/CustomTabBar";
import TabBarIcon from "../components/TabBarIcon";

const Tab = createBottomTabNavigator();

export default () => {
    return (
        <Tab.Navigator
            initialRouteName="TabHome"
            screenOptions={({route}) => ({
                tabBarIcon: () => <TabBarIcon name={route.name} />
            })}
        >
            <Tab.Screen name="TabAbout" component={TabAboutScreen} options={{title: 'Sobre'}}/>
            <Tab.Screen name="TabHome" component={HomeStack} options={{title: 'Início'}}/>
            <Tab.Screen name="TabConfig" component={TabConfigScreen} options={{title: 'Config', tabBarStyle: {display: 'none'}}}/>
        </Tab.Navigator>
    )
}