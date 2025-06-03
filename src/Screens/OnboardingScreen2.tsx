import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  ScrollView,
  Image,
  Animated,
} from 'react-native';
import { COLORS, SIZES, SPACING } from '../utils/theme';
import { NavigationProps } from '../types/navigation';
import { TrendingUpIcon, ClockIcon } from '../Assets/icons';

const { width, height } = Dimensions.get('window');

const OnboardingScreen2: React.FC<NavigationProps<'Onboarding2'>> = ({ navigation }) => {
  // Animation values
  const fadeAnim = new Animated.Value(0);
  const slideAnim = new Animated.Value(50);

  useEffect(() => {
    // Start animations when component mounts
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />
      
      <ScrollView 
        style={styles.scrollView} 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Trading Image with Overlay */}
        <Animated.View 
          style={[
            styles.imageContainer,
            { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }
          ]}
        >
          <Image 
            source={require('../Assets/Images/trading_background.jpg')} 
            style={styles.backgroundImage}
            resizeMode="cover"
          />
          
          {/* Trading Icon Overlay */}
          <View style={styles.iconOverlay}>
            <TrendingUpIcon width={60} height={60} />
          </View>
          
          {/* Buy/Sell Buttons */}
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.buyButton}>
              <Text style={styles.buttonText}>Buy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sellButton}>
              <Text style={styles.buttonText}>Sell</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>

        {/* Main Content Area */}
        <Animated.View 
          style={[
            styles.mainContent,
            { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }
          ]}
        >
          {/* Heading */}
          <Text style={styles.heading}>Learn to Trade Like a Pro</Text>
          <Text style={styles.subheading}>Practice with $100,000 in Virtual Funds</Text>
          
          {/* Feature Box */}
          <View style={styles.featureBox}>
            <Text style={styles.featureText}>
              Start with $100,000 virtual funds to simulate trades in stocks, forex, and crypto.
            </Text>
          </View>

          {/* Risk-Free Trading Feature */}
          <View style={styles.riskFreeContainer}>
            <ClockIcon size={24} />
            <Text style={styles.riskFreeText}>Trade Risk-Free, 24/7</Text>
          </View>

          {/* Pagination Dots */}
          <View style={styles.paginationContainer}>
            <View style={[styles.paginationDot, styles.activeDot]} />
            <View style={[styles.paginationDot, styles.inactiveDot]} />
            <View style={[styles.paginationDot, styles.inactiveDot]} />
          </View>
        </Animated.View>
      </ScrollView>

      {/* Fixed Bottom Navigation */}
      <View style={styles.navigationContainer}>
        <TouchableOpacity 
          style={styles.nextButton}
          onPress={() => navigation?.navigate('Onboarding3')}
          activeOpacity={0.8}
        >
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.skipButton}
          onPress={() => navigation?.navigate('SignUp')}
          activeOpacity={0.6}
        >
          <Text style={styles.skipButtonText}>Skip</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  imageContainer: {
    width: '100%',
    height: height * 0.35,
    overflow: 'hidden',
    position: 'relative',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 5,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    backgroundColor: '#1E2532',
  },
  iconOverlay: {
    position: 'absolute',
    top: '45%',
    left: '50%',
    transform: [{ translateX: -30 }, { translateY: -30 }],
  },
  buttonsContainer: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: SPACING.large,
  },
  buyButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 15,
    paddingVertical: SPACING.small,
    paddingHorizontal: SPACING.xLarge,
    marginRight: SPACING.medium,
    minWidth: 90,
    alignItems: 'center',
    elevation: 3,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  sellButton: {
    backgroundColor: COLORS.sell,
    borderRadius: 15,
    paddingVertical: SPACING.small,
    paddingHorizontal: SPACING.xLarge,
    minWidth: 90,
    alignItems: 'center',
    elevation: 3,
    shadowColor: COLORS.sell,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: SIZES.medium,
    fontWeight: 'bold',
  },
  mainContent: {
    flex: 1,
    paddingHorizontal: SPACING.large,
    paddingTop: SPACING.large,
    paddingBottom: SPACING.xxLarge * 2, // Add extra padding at bottom for navigation
  },
  heading: {
    color: COLORS.white,
    fontSize: SIZES.xxLarge,
    fontWeight: 'bold',
    marginBottom: SPACING.small,
  },
  subheading: {
    color: COLORS.white,
    fontSize: SIZES.medium,
    opacity: 0.8,
    marginBottom: SPACING.large * 1.5,
    fontWeight: '300',
  },
  featureBox: {
    width: '100%',
    backgroundColor: COLORS.darkGray,
    borderRadius: 15,
    padding: SPACING.large,
    marginBottom: SPACING.large,
    elevation: 2,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  featureText: {
    color: COLORS.white,
    fontSize: SIZES.medium,
    lineHeight: SIZES.large * 1.3,
    textAlign: 'center',
    fontWeight: '400',
  },
  riskFreeContainer: {
    width: '100%',
    backgroundColor: COLORS.darkBlue,
    borderRadius: 15,
    padding: SPACING.large,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.xxLarge,
    elevation: 2,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  riskFreeText: {
    color: COLORS.primary,
    fontSize: SIZES.medium,
    fontWeight: 'bold',
    marginLeft: SPACING.medium,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: SPACING.large,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: COLORS.primary,
  },
  inactiveDot: {
    backgroundColor: COLORS.gray,
    opacity: 0.5,
  },
  navigationContainer: {
    width: '100%',
    paddingHorizontal: SPACING.large,
    paddingBottom: SPACING.large,
    position: 'absolute',
    bottom: 0,
    backgroundColor: COLORS.background,
  },
  nextButton: {
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.large,
    paddingVertical: SPACING.medium,
    alignItems: 'center',
    marginBottom: SPACING.medium,
    elevation: 3,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  nextButtonText: {
    color: COLORS.white,
    fontSize: SIZES.medium,
    fontWeight: 'bold',
  },
  skipButton: {
    alignItems: 'center',
    marginBottom: SPACING.medium,
  },
  skipButtonText: {
    color: COLORS.white,
    fontSize: SIZES.small,
    textDecorationLine: 'underline',
  },
});

export default OnboardingScreen2; 