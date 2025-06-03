import React, { useState } from 'react';
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
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const { width } = Dimensions.get('window');

const LessonLibraryScreen: React.FC<NavigationProps<'LessonLibrary'>> = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState('Beginner');

  // Calculate responsive dimensions
  const getResponsiveDimensions = () => {
    const isSmallDevice = width < 375;
    const cardPadding = isSmallDevice ? 15 : 20;
    return {
      cardWidth: width - (cardPadding * 2),
    };
  };
  
  const { cardWidth } = getResponsiveDimensions();

  // Get subtitle based on selected category
  const getCategorySubtitle = () => {
    switch (selectedCategory) {
      case 'All':
        return 'Explore All Lessons';
      case 'Beginner':
        return 'Explore Beginner Lessons';
      case 'Intermediate':
        return 'Explore Intermediate Lessons';
      case 'Advanced':
        return 'Explore Advanced Lessons';
      default:
        return 'Explore Beginner Lessons';
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />
      
      {/* Header with back button and search */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={28} color={COLORS.white} />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.searchButton}>
          <Ionicons name="search" size={24} color={COLORS.white} />
        </TouchableOpacity>
      </View>
      
      {/* Title */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Lesson Library</Text>
        <Text style={styles.subtitle}>{getCategorySubtitle()}</Text>
      </View>
      
      {/* Category Pills */}
      <View style={styles.categoriesWrapper}>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          contentContainerStyle={styles.categoriesContainer}
        >
          <TouchableOpacity 
            style={[styles.categoryPill, selectedCategory === 'All' && styles.activeCategoryPill]}
            onPress={() => setSelectedCategory('All')}
          >
            <Text style={[styles.categoryPillText, selectedCategory === 'All' && styles.activeCategoryText]}>All</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.categoryPill, selectedCategory === 'Beginner' && styles.activeCategoryPill]}
            onPress={() => setSelectedCategory('Beginner')}
          >
            <Text style={[styles.categoryPillText, selectedCategory === 'Beginner' && styles.activeCategoryText]}>Beginner</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.categoryPill, selectedCategory === 'Intermediate' && styles.activeCategoryPill]}
            onPress={() => setSelectedCategory('Intermediate')}
          >
            <Text style={[styles.categoryPillText, selectedCategory === 'Intermediate' && styles.activeCategoryText]}>Intermediate</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.categoryPill, selectedCategory === 'Advanced' && styles.activeCategoryPill]}
            onPress={() => setSelectedCategory('Advanced')}
          >
            <Text style={[styles.categoryPillText, selectedCategory === 'Advanced' && styles.activeCategoryText]}>Ad</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      
      {/* Featured Image */}
      <View style={[styles.featuredCard, { width: cardWidth }]}>
        <Image
          source={require('../Assets/Images/lessonlib.jpg')}
          style={styles.featuredCardImage}
          resizeMode="cover"
        />
        <View style={styles.featuredCardOverlay}>
          <View style={styles.featuredCardContent}>
            <Text style={styles.featuredCardTitle}>Financial Foundations</Text>
            <View style={styles.paginationDots}>
              <View style={[styles.paginationDot, styles.activeDot]} />
              <View style={styles.paginationDot} />
              <View style={styles.paginationDot} />
            </View>
          </View>
        </View>
      </View>
      
      {/* Lesson Cards */}
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Budgeting Basics Card */}
        <View style={styles.lessonCard}>
          <Image 
            source={require('../Assets/Images/global.png')}
            style={styles.lessonCardImage}
            resizeMode="cover"
          />
          <View style={styles.lessonCardContent}>
            <View style={styles.lessonCardHeader}>
              <Text style={styles.lessonCardTitle}>Budgeting Basics</Text>
              <View style={styles.lessonCardFooter}>
                <View style={styles.timeContainer}>
                  <Ionicons name="time-outline" size={14} color="#666" />
                  <Text style={styles.timeText}>5 min</Text>
                </View>
                <View style={styles.newBadge}>
                  <Text style={styles.newBadgeText}>New</Text>
                </View>
              </View>
            </View>
            <TouchableOpacity style={styles.startLessonButton}>
              <Text style={styles.startLessonButtonText}>Start Lesson</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        {/* Stock Market Fundamentals Card */}
        <View style={styles.lessonCard}>
          <Image 
            source={require('../Assets/Images/trading_background.jpg')}
            style={styles.lessonCardImage}
            resizeMode="cover"
          />
          <View style={styles.lessonCardContent}>
            <View style={styles.lessonCardHeader}>
              <Text style={styles.lessonCardTitle}>Stock Market Fundamentals</Text>
              <View style={styles.lessonCardFooter}>
                <View style={styles.timeContainer}>
                  <Ionicons name="time-outline" size={14} color="#666" />
                  <Text style={styles.timeText}>10 min</Text>
                </View>
                <View style={styles.completedBadge}>
                  <Ionicons name="checkmark-circle" size={16} color="#0099FF" />
                </View>
              </View>
            </View>
            <View style={styles.progressBarContainer}>
              <View style={styles.progressBar}>
                <View style={styles.progressFill} />
              </View>
            </View>
            <TouchableOpacity style={styles.startLessonButton}>
              <Text style={styles.startLessonButtonText}>Start Lesson</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        {/* Investment Strategies Card */}
        <View style={styles.lessonCard}>
          <Image 
            source={require('../Assets/Images/latesttech.png')}
            style={styles.lessonCardImage}
            resizeMode="cover"
          />
          <View style={styles.lessonCardContent}>
            <View style={styles.lessonCardHeader}>
              <Text style={styles.lessonCardTitle}>Investment Strategies</Text>
              <View style={styles.lessonCardFooter}>
                <View style={styles.timeContainer}>
                  <Ionicons name="time-outline" size={14} color="#666" />
                  <Text style={styles.timeText}>8 min</Text>
                </View>
              </View>
            </View>
            <View style={styles.progressBarContainer}>
              <View style={styles.progressBar}>
                <View style={[styles.progressFill, { width: '40%' }]} />
              </View>
            </View>
            <TouchableOpacity style={styles.startLessonButton}>
              <Text style={styles.startLessonButtonText}>Start Lesson</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        {/* Retirement Planning Card */}
        <View style={styles.lessonCard}>
          <Image 
            source={require('../Assets/Images/latestfed.png')}
            style={styles.lessonCardImage}
            resizeMode="cover"
          />
          <View style={styles.lessonCardContent}>
            <View style={styles.lessonCardHeader}>
              <Text style={styles.lessonCardTitle}>Retirement Planning</Text>
              <View style={styles.lessonCardFooter}>
                <View style={styles.timeContainer}>
                  <Ionicons name="time-outline" size={14} color="#666" />
                  <Text style={styles.timeText}>12 min</Text>
                </View>
              </View>
            </View>
            <TouchableOpacity style={styles.startLessonButton}>
              <Text style={styles.startLessonButtonText}>Start Lesson</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        {/* Bottom padding */}
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 5,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
  },
  searchButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    paddingHorizontal: 20,
    paddingBottom: 15,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  subtitle: {
    fontSize: 18,
    color: '#888',
    marginTop: 5,
  },
  categoriesWrapper: {
    paddingBottom: 15,
  },
  categoriesContainer: {
    paddingHorizontal: 20,
  },
  categoryPill: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 30,
    marginRight: 10,
    backgroundColor: '#1A1A1A',
    borderWidth: 1,
    borderColor: '#333',
  },
  activeCategoryPill: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  categoryPillText: {
    color: '#888',
    fontWeight: '500',
    fontSize: 16,
  },
  activeCategoryText: {
    color: COLORS.white,
    fontWeight: '600',
  },
  featuredCard: {
    height: 170,
    marginHorizontal: 20,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 15,
  },
  featuredCardImage: {
    width: '100%',
    height: '100%',
  },
  featuredCardOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
  },
  featuredCardContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 15,
  },
  featuredCardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: 8,
  },
  paginationDots: {
    flexDirection: 'row',
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    marginRight: 6,
  },
  activeDot: {
    backgroundColor: COLORS.primary,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 30,
    paddingTop: 5,
  },
  lessonCard: {
    backgroundColor: '#1A1A1A',
    borderRadius: 12,
    marginBottom: 10,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    height: 110,
  },
  lessonCardImage: {
    width: 75,
    height: 75,
    borderRadius: 8,
    marginLeft: 12,
    marginRight: 12,
  },
  lessonCardContent: {
    flex: 1,
    padding: 12,
    paddingRight: 15,
    justifyContent: 'space-between',
  },
  lessonCardHeader: {
    marginBottom: 6,
  },
  lessonCardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.white,
    marginBottom: 4,
  },
  lessonCardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeText: {
    fontSize: 12,
    color: '#666',
    marginLeft: 5,
  },
  newBadge: {
    backgroundColor: '#FF3B30',
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 4,
  },
  newBadgeText: {
    color: COLORS.white,
    fontSize: 10,
    fontWeight: '600',
  },
  completedBadge: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressBarContainer: {
    marginBottom: 10,
  },
  progressBar: {
    height: 3,
    backgroundColor: '#333',
    borderRadius: 1.5,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    width: '100%',
    backgroundColor: COLORS.primary,
  },
  startLessonButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 8,
    paddingVertical: 8,
    alignItems: 'center',
  },
  startLessonButtonText: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: '600',
  },
  bottomSpace: {
    height: 30,
  },
});

export default LessonLibraryScreen; 