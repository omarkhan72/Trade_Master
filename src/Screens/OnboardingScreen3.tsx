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
  Animated,
} from 'react-native';
import { COLORS, SIZES, SPACING } from '../utils/theme';
import { NavigationProps } from '../types/navigation';
import { LightningIcon, ChartBarIcon, GridIcon, ArrowRightIcon } from '../Assets/icons';

const { width, height } = Dimensions.get('window');

const OnboardingScreen3: React.FC<NavigationProps<'Onboarding3'>> = ({ navigation }) => {
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
        {/* Header */}
        <Animated.View 
          style={[
            styles.header,
            { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }
          ]}
        >
          <Text style={styles.heading}>Learn to Trade Like a Pro</Text>
          <Text style={styles.subheading}>Get AI-Powered Trade Coaching</Text>
        </Animated.View>

        {/* Chat Example */}
        <Animated.View 
          style={[
            styles.chatContainer,
            { 
              opacity: fadeAnim, 
              transform: [{ translateY: Animated.multiply(slideAnim, 1.2) }] 
            }
          ]}
        >
          <View style={styles.chatIconContainer}>
            <GridIcon size={width * 0.08} />
          </View>
          
          <View style={styles.chatContent}>
            <View style={styles.questionBubble}>
              <Text style={styles.questionText}>Why did my trade fail?</Text>
            </View>
            
            <View style={styles.answerBubble}>
              <Text style={styles.answerText}>
                Your stop-loss was too tight. Consider using a wider range based on recent volatility.
              </Text>
            </View>
          </View>
        </Animated.View>

        {/* Features */}
        <Animated.View 
          style={[
            styles.featuresContainer,
            { 
              opacity: fadeAnim, 
              transform: [{ translateY: Animated.multiply(slideAnim, 1.4) }] 
            }
          ]}
        >
          {/* Feature 1 */}
          <View style={styles.featureItem}>
            <View style={styles.featureIconContainer}>
              <LightningIcon size={width * 0.08} />
            </View>
            <View style={styles.featureTextContainer}>
              <Text style={styles.featureTitle}>AI Analyzes Every Trade</Text>
              <Text style={styles.featureDescription}>
                Get instant feedback on your trading decisions
              </Text>
            </View>
          </View>

          {/* Feature 2 */}
          <View style={styles.featureItem}>
            <View style={styles.featureIconContainer}>
              <ChartBarIcon size={width * 0.08} />
            </View>
            <View style={styles.featureTextContainer}>
              <Text style={styles.featureTitle}>Smart Pattern Detection</Text>
              <Text style={styles.featureDescription}>
                Ask questions like "Why did my trade fail?" and get real-time pattern insights
              </Text>
            </View>
          </View>
        </Animated.View>

        {/* Pagination Dots */}
        <View style={styles.paginationContainer}>
          <View style={[styles.paginationDot, styles.inactiveDot]} />
          <View style={[styles.paginationDot, styles.activeDot]} />
          <View style={[styles.paginationDot, styles.inactiveDot]} />
        </View>
      </ScrollView>

      {/* Fixed Bottom Navigation */}
      <View style={styles.navigationContainer}>
        <TouchableOpacity 
          style={styles.nextButton}
          onPress={() => navigation?.navigate('Onboarding4')}
          activeOpacity={0.8}
        >
          <Text style={styles.nextButtonText}>Next</Text>
          <ArrowRightIcon size={18} color={COLORS.white} />
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
    paddingHorizontal: SPACING.large,
    paddingTop: SPACING.large,
    paddingBottom: SPACING.xxLarge * 2,
  },
  header: {
    marginBottom: SPACING.xxLarge,
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
    fontWeight: '300',
  },
  chatContainer: {
    backgroundColor: COLORS.darkGray,
    borderRadius: 20,
    padding: SPACING.large,
    marginBottom: SPACING.xxLarge,
    flexDirection: 'row',
    elevation: 3,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  chatIconContainer: {
    width: width * 0.12,
    height: width * 0.12,
    borderRadius: width * 0.06,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACING.medium,
    elevation: 2,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  chatContent: {
    flex: 1,
  },
  questionBubble: {
    backgroundColor: '#1A1A1A',
    borderRadius: 15,
    padding: SPACING.medium,
    alignSelf: 'flex-start',
    marginBottom: SPACING.medium,
    maxWidth: '90%',
  },
  questionText: {
    color: COLORS.white,
    fontSize: SIZES.small,
    fontWeight: '500',
  },
  answerBubble: {
    backgroundColor: 'transparent',
    alignSelf: 'flex-start',
    maxWidth: '90%',
  },
  answerText: {
    color: COLORS.white,
    fontSize: SIZES.small,
    lineHeight: SIZES.large * 1.2,
    fontWeight: '400',
  },
  featuresContainer: {
    marginBottom: SPACING.xxLarge,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.darkBlue,
    borderRadius: 15,
    padding: SPACING.large,
    marginBottom: SPACING.medium,
    elevation: 3,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  featureIconContainer: {
    width: width * 0.12,
    height: width * 0.12,
    borderRadius: width * 0.06,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACING.large,
    elevation: 2,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  featureTextContainer: {
    flex: 1,
  },
  featureTitle: {
    color: COLORS.white,
    fontSize: SIZES.medium,
    fontWeight: 'bold',
    marginBottom: SPACING.xSmall,
  },
  featureDescription: {
    color: COLORS.white,
    fontSize: SIZES.small,
    opacity: 0.8,
    lineHeight: SIZES.medium * 1.3,
    fontWeight: '400',
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
    flexDirection: 'row',
    justifyContent: 'center',
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
    marginRight: SPACING.small,
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

export default OnboardingScreen3; 