import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import TobTabs from './TobTabs'
import { AppHeader } from '@components';

const AppStack = ()=>{
    return (
<NavigationContainer>
<AppHeader
title={''}
search 
/>
<TobTabs />
</NavigationContainer>
)
}
export default AppStack;