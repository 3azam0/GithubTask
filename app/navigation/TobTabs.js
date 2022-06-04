import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useTheme } from 'react-native-paper';
import ExplorScreen from '@screens/ExploreScreen';
import ReposScreen from '@screens/ReposScreen';
import { widthPercentageToDP } from 'react-native-responsive-screen';

const Tab = createMaterialTopTabNavigator();

export default MyTabs = () => {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      style={{ backgroundColor: colors.white }}
      screenOptions={{
        tabBarActiveTintColor: colors.txtBlue,
        tabBarIndicatorStyle: { backgroundColor: colors.green },
        tabBarLabelStyle: { fontSize: 12 },
        tabBarItemStyle: { width: widthPercentageToDP(30), marginHorizontal: 3 },
        tabBarIndicatorContainerStyle: { marginHorizontal: widthPercentageToDP(6.6), width: widthPercentageToDP(45) },
      }}>
      <Tab.Screen name="Explore" component={ExplorScreen} />
      <Tab.Screen name="Repositories" component={ReposScreen} />
    </Tab.Navigator>
  );
};
