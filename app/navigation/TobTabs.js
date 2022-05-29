import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ExplorScreen from '@screens/ExploreScreen'
import ReposScreen from '@screens/ReposScreen'
import { widthPercentageToDP } from 'react-native-responsive-screen';

const Tab = createMaterialTopTabNavigator();

export default  MyTabs = ()=> {
  return (
    <Tab.Navigator
    
    screenOptions={{
        tabBarLabelStyle: { fontSize: 12 },
        tabBarItemStyle: {  width: widthPercentageToDP(30),marginHorizontal:3 },
        tabBarIndicatorContainerStyle:{marginHorizontal:widthPercentageToDP(6.6), width: widthPercentageToDP(45)}
        
      }}>
      <Tab.Screen  name="Explore" s component={ExplorScreen} />
      <Tab.Screen name="Repositories" component={ReposScreen} />

    </Tab.Navigator>
  );
}