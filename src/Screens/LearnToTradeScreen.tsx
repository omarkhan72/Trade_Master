import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
  Platform,
} from 'react-native';
import { COLORS } from '../utils/theme';
import { NavigationProps } from '../types/navigation';
import Icon from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get('window');

const LearnToTradeScreen: React.FC<NavigationProps<'LearnToTrade'>> = ({ navigation }) => {
  // Calculate responsive dimensions
  const getResponsiveDimensions = () => {
    const isSmallDevice = width < 375;
    const isMediumDevice = width >= 375 && width < 414;
    const isLargeDevice = width >= 414;
    
    return {
      cardWidth: isSmallDevice ? width - 40 : width - 30,
    };
  };
  
  const { cardWidth } = getResponsiveDimensions();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />
      
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        bounces={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Learn to Trade</Text>
          <Text style={styles.headerSubtitle}>Explore 50+ Lessons & Quizzes</Text>
        </View>
        
        {/* Featured Course Card */}
        <View style={[styles.featuredCard, { width: cardWidth }]}>
          <Image
            source={require('../Assets/Images/learntrade.jpg')}
            style={styles.featuredCardImage}
            resizeMode="cover"
          />
          <View style={styles.featuredCardContent}>
            <Text style={styles.featuredCardTitle}>Stock Market Basics</Text>
            <View style={styles.progressContainer}>
              <View style={styles.progressBar}>
                <View style={styles.progressFill} />
              </View>
              <Text style={styles.progressText}>75% Complete</Text>
            </View>
          </View>
        </View>
        
        {/* Categories Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Categories</Text>
          
          {/* Beginner Trading */}
          <TouchableOpacity style={styles.categoryCard}>
            <View style={styles.categoryIconContainer}>
              <MaterialCommunityIcons name="school" size={24} color="#0099FF" />
            </View>
            <View style={styles.categoryTextContainer}>
              <Text style={styles.categoryTitle}>Beginner Trading</Text>
              <Text style={styles.categorySubtitle}>12 lessons</Text>
            </View>
            <MaterialIcons name="chevron-right" size={24} color="#666" />
          </TouchableOpacity>
          
          {/* Intermediate Concepts */}
          <TouchableOpacity style={styles.categoryCard}>
            <View style={styles.categoryIconContainer}>
              <MaterialCommunityIcons name="chart-bar" size={24} color="#0099FF" />
            </View>
            <View style={styles.categoryTextContainer}>
              <Text style={styles.categoryTitle}>Intermediate Concepts</Text>
              <Text style={styles.categorySubtitle}>18 lessons</Text>
            </View>
            <MaterialIcons name="chevron-right" size={24} color="#666" />
          </TouchableOpacity>
          
          {/* Advanced Strategies */}
          <TouchableOpacity style={styles.categoryCard}>
            <View style={styles.categoryIconContainer}>
              <MaterialCommunityIcons name="trophy" size={24} color="#0099FF" />
            </View>
            <View style={styles.categoryTextContainer}>
              <Text style={styles.categoryTitle}>Advanced Strategies</Text>
              <Text style={styles.categorySubtitle}>20 lessons</Text>
            </View>
            <MaterialIcons name="chevron-right" size={24} color="#666" />
          </TouchableOpacity>
        </View>
        
        {/* Recommended Lesson */}
        <View style={styles.recommendedContainer}>
          <View style={styles.recommendedHeader}>
            <View style={styles.recommendedBadge}>
              <Text style={styles.recommendedBadgeText}>Recommended for You</Text>
            </View>
            <View style={styles.timeIcon}>
              <MaterialIcons name="access-time" size={20} color="#666" />
            </View>
          </View>
          
          <Text style={styles.recommendedTitle}>Support & Resistance Basics</Text>
          <Text style={styles.recommendedDescription}>
            Learn how to identify and use support and resistance levels in your trading strategy.
          </Text>
          
          <TouchableOpacity 
            style={styles.startLessonButton}
            onPress={() => navigation.navigate('LessonLibrary')}
          >
            <Text style={styles.startLessonButtonText}>Start Lesson</Text>
          </TouchableOpacity>
        </View>
        
        {/* Quick Access */}
        <View style={styles.quickAccessContainer}>
          <TouchableOpacity 
            style={styles.quickAccessCard}
            onPress={() => navigation.navigate('PatternQuiz')}
          >
            <MaterialCommunityIcons name="file-document-outline" size={24} color="#0099FF" />
            <Text style={styles.quickAccessTitle}>Quick Quiz</Text>
            <Text style={styles.quickAccessSubtitle}>Test your knowledge</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.quickAccessCard}
            onPress={() => navigation.navigate('CandlestickCheatSheet')}
          >
            <MaterialCommunityIcons name="file-document-outline" size={24} color="#0099FF" />
            <Text style={styles.quickAccessTitle}>Cheat Sheet</Text>
            <Text style={styles.quickAccessSubtitle}>Candlestick patterns</Text>
          </TouchableOpacity>
        </View>
        
        {/* Progress Section */}
        <View style={styles.yourProgressContainer}>
          <Text style={styles.yourProgressTitle}>Your Progress</Text>
          
          <View style={styles.overallProgressContainer}>
            <View style={styles.overallProgressTextContainer}>
              <Text style={styles.overallProgressText}>Overall Progress</Text>
              <Text style={styles.overallProgressCount}>40/50 lessons</Text>
            </View>
            
            <View style={styles.overallProgressBar}>
              <View style={styles.overallProgressFill} />
            </View>
          </View>
        </View>
        
        {/* Bottom Space */}
        <View style={styles.bottomSpace} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 80, // Space for footer
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 15,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#888',
  },
  featuredCard: {
    height: 200,
    marginHorizontal: 20,
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 25,
  },
  featuredCardImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  featuredCardContent: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  featuredCardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: 10,
  },
  progressContainer: {
    flexDirection: 'column',
  },
  progressBar: {
    height: 6,
    backgroundColor: '#333',
    borderRadius: 3,
    marginBottom: 8,
    width: '100%',
  },
  progressFill: {
    height: 6,
    width: '75%',
    backgroundColor: '#0099FF',
    borderRadius: 3,
  },
  progressText: {
    fontSize: 14,
    color: COLORS.white,
  },
  sectionContainer: {
    paddingHorizontal: 20,
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: 15,
  },
  categoryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1A1A1A',
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
  },
  categoryIconContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  categoryTextContainer: {
    flex: 1,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.white,
    marginBottom: 4,
  },
  categorySubtitle: {
    fontSize: 14,
    color: '#888',
  },
  recommendedContainer: {
    backgroundColor: '#1A1A1A',
    borderRadius: 15,
    marginHorizontal: 20,
    padding: 20,
    marginBottom: 25,
    borderLeftWidth: 4,
    borderLeftColor: '#0099FF',
  },
  recommendedHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  recommendedBadge: {
    backgroundColor: 'rgba(0, 153, 255, 0.15)',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  recommendedBadgeText: {
    color: '#0099FF',
    fontSize: 12,
    fontWeight: '600',
  },
  timeIcon: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  recommendedTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: 10,
  },
  recommendedDescription: {
    fontSize: 14,
    color: '#AAA',
    lineHeight: 20,
    marginBottom: 20,
  },
  startLessonButton: {
    backgroundColor: '#0099FF',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
  },
  startLessonButtonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '600',
  },
  quickAccessContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 25,
  },
  quickAccessCard: {
    width: '48%',
    backgroundColor: '#1A1A1A',
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',
  },
  quickAccessTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.white,
    marginTop: 10,
    marginBottom: 4,
  },
  quickAccessSubtitle: {
    fontSize: 12,
    color: '#888',
    textAlign: 'center',
  },
  yourProgressContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  yourProgressTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: 15,
  },
  overallProgressContainer: {
    backgroundColor: '#1A1A1A',
    borderRadius: 12,
    padding: 15,
  },
  overallProgressTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  overallProgressText: {
    fontSize: 16,
    color: COLORS.white,
  },
  overallProgressCount: {
    fontSize: 16,
    color: COLORS.white,
  },
  overallProgressBar: {
    height: 6,
    backgroundColor: '#333',
    borderRadius: 3,
    overflow: 'hidden',
  },
  overallProgressFill: {
    height: 6,
    width: '80%', // 40/50 = 80%
    backgroundColor: '#0099FF',
    borderRadius: 3,
  },
  bottomSpace: {
    height: 20,
  },
 
});

export default LearnToTradeScreen; 