import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider, InitialWindowMetrics } from 'react-native-safe-area-context';

import TobTabs from './TobTabs';
import { AppHeader } from '@components';
import { lightTheme, darkTheme } from '../core/theme';
import { PreferencesContext } from '../core/PreferencesContext';
const AppStack = () => {
  const [isThemeDark, setIsThemeDark] = React.useState(false);

  let theme = isThemeDark ? darkTheme : lightTheme;

  const toggleTheme = React.useCallback(() => {
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);

  const preferences = React.useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark],
  );
  return (
    <PreferencesContext.Provider value={preferences}>
      <SafeAreaProvider initialMetrics={InitialWindowMetrics}>
        <PaperProvider theme={theme}>
          <NavigationContainer theme={theme}>
            <AppHeader title={''} dark />
            <TobTabs />
          </NavigationContainer>
        </PaperProvider>
      </SafeAreaProvider>
    </PreferencesContext.Provider>
  );
};
export default AppStack;
