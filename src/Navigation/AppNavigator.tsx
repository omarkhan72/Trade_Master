import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { OnboardingScreen, OnboardingScreen2, OnboardingScreen3, OnboardingScreen4, NewsScreen, TradeSimulatorScreen, AIScreenerAssistantScreen } from '../Screens';
import HomeScreen from '../Screens/HomeScreen';
import DailyProfitScreen from '../Screens/DailyProfitScreen';
import OpenPositionsScreen from '../Screens/OpenPositionsScreen';
import CashManagementScreen from '../Screens/CashManagementScreen';
import TopMoversScreen from '../Screens/TopMoversScreen';
import PatternQuizScreen from '../Screens/PatternQuizScreen';
import CandlestickCheatSheetScreen from '../Screens/CandlestickCheatSheetScreen';
import TradeSetupDetailsScreen from '../Screens/TradeSetupDetailsScreen';
import LearnToTradeScreen from '../Screens/LearnToTradeScreen';
import LessonLibraryScreen from '../Screens/LessonLibraryScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Onboarding"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
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
      <Stack.Screen name="TopMovers" component={TopMoversScreen} />
      <Stack.Screen name="News" component={NewsScreen} />
      <Stack.Screen name="TradeSimulator" component={TradeSimulatorScreen} />
      <Stack.Screen name="AIScreenerAssistant" component={AIScreenerAssistantScreen} />
      <Stack.Screen name="PatternQuiz" component={PatternQuizScreen} />
      <Stack.Screen name="CandlestickCheatSheet" component={CandlestickCheatSheetScreen} />
      <Stack.Screen name="TradeSetupDetails" component={TradeSetupDetailsScreen} />
      <Stack.Screen name="LearnToTrade" component={LearnToTradeScreen} />
      <Stack.Screen name="LessonLibrary" component={LessonLibraryScreen} />
      {/* Additional screens will be added here */}
    </Stack.Navigator>
  );
};

export default AppNavigator; 