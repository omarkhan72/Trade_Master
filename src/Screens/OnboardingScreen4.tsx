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
import { CandlestickIcon, GraduationCapIcon } from '../Assets/icons';

const { width, height } = Dimensions.get('window');

const OnboardingScreen4: React.FC<NavigationProps<'Onboarding4'>> = ({ navigation }) => {
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
          <Text style={styles.subheading}>Master Trading with 50+ Lessons & Quizzes</Text>
        </Animated.View>

        {/* Candlestick Basics Card */}
        <Animated.View 
          style={[
            styles.cardContainer,
            { 
              opacity: fadeAnim, 
              transform: [{ translateY: Animated.multiply(slideAnim, 1.2) }] 
            }
          ]}
        >
          <View style={styles.cardHeader}>
            <CandlestickIcon size={width * 0.07} />
            <Text style={styles.cardTitle}>Candlestick Basics</Text>
          </View>
          
          <View style={styles.patternGrid}>
            <View style={styles.patternItem}>
              <Text style={styles.patternName}>Hammer</Text>
              <Text style={styles.patternDescription}>Bullish reversal</Text>
            </View>
            
            <View style={styles.patternItem}>
              <Text style={styles.patternName}>Doji</Text>
              <Text style={styles.patternDescription}>Indecision</Text>
            </View>
            
            <View style={styles.patternItem}>
              <Text style={styles.patternName}>Engulfing</Text>
              <Text style={styles.patternDescription}>Strong trend</Text>
            </View>
            
            <View style={styles.patternItem}>
              <Text style={styles.patternName}>Bullish Pin</Text>
              <Text style={styles.patternDescription}>Reversal</Text>
            </View>
          </View>
        </Animated.View>

        {/* Description Text */}
        <Animated.Text 
          style={[
            styles.descriptionText,
            { 
              opacity: fadeAnim, 
              transform: [{ translateY: Animated.multiply(slideAnim, 1.4) }] 
            }
          ]}
        >
          From budgeting to advanced chart patterns, learn at your own pace.
        </Animated.Text>

        {/* Lessons Feature */}
        <Animated.View 
          style={[
            styles.lessonFeature,
            { 
              opacity: fadeAnim, 
              transform: [{ translateY: Animated.multiply(slideAnim, 1.6) }] 
            }
          ]}
        >
          <View style={styles.iconContainer}>
            <GraduationCapIcon size={width * 0.07} />
          </View>
          <Text style={styles.lessonText}>50+ Bite-Sized Lessons</Text>
        </Animated.View>

        {/* Pagination Dots */}
        <View style={styles.paginationContainer}>
          <View style={[styles.paginationDot, styles.inactiveDot]} />
          <View style={[styles.paginationDot, styles.inactiveDot]} />
          <View style={[styles.paginationDot, styles.activeDot]} />
        </View>
      </ScrollView>

      {/* Fixed Bottom Navigation */}
      <View style={styles.navigationContainer}>
        <TouchableOpacity 
          style={styles.finishButton}
          onPress={() => navigation?.navigate('Home')}
          activeOpacity={0.8}
        >
          <Text style={styles.finishButtonText}>Finish</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.skipButton}
          onPress={() => navigation?.navigate('Home')}
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
  cardContainer: {
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: SPACING.large,
    elevation: 3,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: SPACING.medium,
    paddingVertical: SPACING.medium,
    backgroundColor: COLORS.darkBlue,
  },
  cardTitle: {
    color: COLORS.white,
    fontSize: SIZES.medium,
    fontWeight: 'bold',
    marginLeft: SPACING.medium,
  },
  patternGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: SPACING.small,
  },
  patternItem: {
    width: '50%',
    padding: SPACING.small,
    backgroundColor: '#1A1A1A',
    borderRadius: 10,
    marginBottom: SPACING.small,
  },
  patternName: {
    color: COLORS.white,
    fontSize: SIZES.small,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  patternDescription: {
    color: COLORS.white,
    fontSize: SIZES.xSmall,
    opacity: 0.7,
    fontWeight: '400',
  },
  descriptionText: {
    color: COLORS.white,
    fontSize: SIZES.medium,
    lineHeight: SIZES.large * 1.2,
    marginBottom: SPACING.large,
    textAlign: 'center',
    fontWeight: '400',
  },
  lessonFeature: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.darkGray,
    borderRadius: 15,
    padding: SPACING.medium,
    marginBottom: SPACING.xxLarge,
    elevation: 3,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  iconContainer: {
    width: width * 0.11,
    height: width * 0.11,
    borderRadius: width * 0.055,
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
  lessonText: {
    color: COLORS.white,
    fontSize: SIZES.medium,
    fontWeight: 'bold',
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
  finishButton: {
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
  finishButtonText: {
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

export default OnboardingScreen4; 