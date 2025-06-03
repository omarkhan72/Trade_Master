import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from 'react-native';
import { COLORS, SIZES, SPACING } from '../utils/theme';
import { ChartIcon, AICoachingIcon, ShieldIcon } from '../Assets/icons';
import { NavigationProps } from '../types/navigation';

const { width, height } = Dimensions.get('window');

const OnboardingScreen: React.FC<NavigationProps<'Onboarding'>> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />
      
      {/* Main content */}
      <View style={styles.content}>
        {/* Logo/Chart Icon */}
        <View style={styles.logoContainer}>
          <ChartIcon width={width * 0.3} height={width * 0.3} />
        </View>

        {/* Features Section */}
        <View style={styles.featuresContainer}>
          <View style={styles.featureItem}>
            <View style={styles.iconContainer}>
              <AICoachingIcon size={width * 0.08} />
            </View>
            <Text style={styles.featureText}>AI Coaching</Text>
          </View>
          
          <View style={styles.featureItem}>
            <View style={styles.iconContainer}>
              <ShieldIcon size={width * 0.08} />
            </View>
            <Text style={styles.featureText}>Zero Risk</Text>
          </View>
        </View>

        {/* Welcome Text */}
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeTitle}>Welcome to</Text>
          <Text style={styles.welcomeTitle}>TradeMaster!</Text>
          <Text style={styles.welcomeSubtitle}>
            Master trading with AI coaching & zero risk
          </Text>
        </View>

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.getStartedButton}
            onPress={() => navigation?.navigate('Onboarding2')}
          >
            <Text style={styles.getStartedText}>Get Started</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.loginButton}
            onPress={() => navigation?.navigate('Login')}
          >
            <Text style={styles.loginText}>Already have an account? Log In</Text>
          </TouchableOpacity>
        </View>

        {/* Bottom Indicator */}
        <View style={styles.indicatorContainer}>
          <View style={styles.indicator} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    flex: 1,
    paddingHorizontal: SPACING.large,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: height * 0.05,
    marginBottom: height * 0.05,
  },
  featuresContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom: height * 0.05,
  },
  featureItem: {
    alignItems: 'center',
    marginHorizontal: SPACING.medium,
  },
  iconContainer: {
    width: width * 0.15,
    height: width * 0.15,
    borderRadius: width * 0.075,
    backgroundColor: COLORS.darkBlue,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SPACING.small,
  },
  featureText: {
    color: COLORS.white,
    fontSize: SIZES.medium,
    fontWeight: '500',
  },
  welcomeContainer: {
    alignItems: 'center',
    marginBottom: height * 0.05,
  },
  welcomeTitle: {
    color: COLORS.white,
    fontSize: SIZES.xxxLarge,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: SIZES.xxxLarge * 1.2,
  },
  welcomeSubtitle: {
    color: COLORS.white,
    fontSize: SIZES.medium,
    marginTop: SPACING.medium,
    textAlign: 'center',
    opacity: 0.8,
  },
  buttonContainer: {
    width: '100%',
    marginTop: height * 0.02,
  },
  getStartedButton: {
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.large,
    paddingVertical: SPACING.medium,
    alignItems: 'center',
    marginBottom: SPACING.large,
  },
  getStartedText: {
    color: COLORS.white,
    fontSize: SIZES.large,
    fontWeight: 'bold',
  },
  loginButton: {
    alignItems: 'center',
  },
  loginText: {
    color: COLORS.white,
    fontSize: SIZES.medium,
    textDecorationLine: 'underline',
  },
  indicatorContainer: {
    position: 'absolute',
    bottom: height * 0.02,
    alignItems: 'center',
    width: '100%',
  },
  indicator: {
    width: width * 0.3,
    height: 5,
    backgroundColor: COLORS.white,
    borderRadius: 5,
  },
});

export default OnboardingScreen; 