import React from 'react';
import { NavigationContainer as RNNavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppNavigator } from './index';

const NavigationContainer = () => {
  // Here you can add authentication state logic later
  // const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  
  return (
    <SafeAreaProvider>
      <RNNavigationContainer>
        <AppNavigator />
        {/* You can conditionally render different navigators based on auth state:
          isAuthenticated ? <MainAppNavigator /> : <AuthNavigator />
        */}
      </RNNavigationContainer>
    </SafeAreaProvider>
  );
};

export default NavigationContainer; 