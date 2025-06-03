import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

// Auth screens will be imported here once created
// import { LoginScreen, SignUpScreen } from '../Screens';

const AuthStack = createNativeStackNavigator<Pick<RootStackParamList, 'Login' | 'SignUp'>>();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* These screens will be uncommented when implemented */}
      {/* <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="SignUp" component={SignUpScreen} /> */}
    </AuthStack.Navigator>
  );
};



export default AuthNavigator; 