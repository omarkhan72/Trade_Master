import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { OnboardingScreen, OnboardingScreen2, OnboardingScreen3, OnboardingScreen4 } from '../Screens';
import { CardStyleInterpolators } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import DailyProfitScreen from '../Screens/DailyProfitScreen';
import OpenPositionsScreen from '../Screens/OpenPositionsScreen';
import CashManagementScreen from '../Screens/CashManagementScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Onboarding"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        animation: 'slide_from_right',
        animationDuration: 300,
      }}
    >
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Onboarding2" component={OnboardingScreen2} />
      <Stack.Screen name="Onboarding3" component={OnboardingScreen3} />
      <Stack.Screen name="Onboarding4" component={OnboardingScreen4} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="DailyProfit" component={DailyProfitScreen} />
      <Stack.Screen name="OpenPositions" component={OpenPositionsScreen} />
      <Stack.Screen name="CashManagement" component={CashManagementScreen} />
      {/* Additional screens will be added here */}
    </Stack.Navigator>
  );
};

export default AppNavigator; 