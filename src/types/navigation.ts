import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Onboarding: undefined;
  Onboarding2: undefined;
  Onboarding3: undefined;
  Onboarding4: undefined;
  SignUp: undefined;
  Login: undefined;
  Home: undefined;
  DailyProfit: undefined;
  OpenPositions: undefined;
  CashManagement: undefined;
  TopMovers: undefined;
  News: undefined;
  TradeSimulator: undefined;
  AIScreenerAssistant: undefined;
  PatternQuiz: undefined;
  CandlestickCheatSheet: undefined;
  Trade: undefined;
  Learn: undefined;
  Profile: undefined;
  // Add other screens here as they are created
};

export type NavigationProps<T extends keyof RootStackParamList> = {
  navigation: NativeStackNavigationProp<RootStackParamList, T>;
}; 