import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Platform,
} from 'react-native';
import { COLORS } from '../utils/theme';
import { NavigationProps } from '../types/navigation';
import Icon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get('window');

const CandlestickCheatSheetScreen: React.FC<NavigationProps<'CandlestickCheatSheet'>> = ({ navigation }) => {
  const [selectedPattern, setSelectedPattern] = useState('Hammer');
  
  // Calculate responsive dimensions
  const getResponsiveDimensions = () => {
    const isSmallDevice = width < 375;
    const isMediumDevice = width >= 375 && width < 414;
    const isLargeDevice = width >= 414;
    
    return {
      cardWidth: isSmallDevice ? '47%' : '48%',
      iconSize: isSmallDevice ? 24 : isMediumDevice ? 28 : 32,
    };
  };
  
  const { cardWidth, iconSize } = getResponsiveDimensions();
  
  const patternCards = [
    {
      id: 'hammer',
      name: 'Hammer',
      type: 'Bullish Reversal',
      description: 'Single candle bottom reversal',
      icon: 'chart-line'
    },
    {
      id: 'doji',
      name: 'Doji',
      type: 'Indecision',
      description: 'Equal open and close',
      icon: 'chart-timeline-variant'
    },
    {
      id: 'engulfing',
      name: 'Engulfing',
      type: 'Trend Reversal',
      description: 'Two-candle reversal signal',
      icon: 'chart-bell-curve'
    },
    {
      id: 'morning_star',
      name: 'Morning Star',
      type: 'Bullish Reversal',
      description: 'Three-candle bottom reversal',
      icon: 'star'
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />
      
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        bounces={false}
      >
        {/* Header with Back Button */}
        <View style={styles.headerContainer}>
          <TouchableOpacity 
            style={styles.backButton} 
            onPress={() => navigation.goBack()}
          >
            <Icon name="chevron-left" size={32} color={COLORS.white} />
          </TouchableOpacity>
          
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerTitle}>Candlestick Cheat Sheet</Text>
            <Text style={styles.headerSubtitle}>Master 20+ Essential Trading Patterns</Text>
          </View>
        </View>
        
        {/* Selected Pattern Display */}
        <View style={styles.selectedPatternContainer}>
          <View style={styles.selectedPattern}>
            <Text style={styles.selectedPatternText}>Hammer Pattern</Text>
          </View>
        </View>
        
        {/* Pattern Grid */}
        <View style={styles.patternGrid}>
          {patternCards.map((pattern) => (
            <TouchableOpacity 
              key={pattern.id} 
              style={[styles.patternCard, { width: cardWidth }]}
              onPress={() => setSelectedPattern(pattern.name)}
            >
              <View style={styles.patternImageContainer}>
                {pattern.id === 'hammer' && (
                  <View style={styles.chartImage}>
                    <FontAwesome name="line-chart" size={iconSize} color="#0099FF" />
                  </View>
                )}
                {pattern.id === 'doji' && (
                  <View style={styles.chartImage}>
                    <MaterialCommunityIcons name="chart-timeline-variant" size={iconSize} color="#0099FF" />
                  </View>
                )}
                {pattern.id === 'engulfing' && (
                  <View style={styles.chartImage}>
                    <MaterialCommunityIcons name="chart-bell-curve" size={iconSize} color="#FF3B30" />
                  </View>
                )}
                {pattern.id === 'morning_star' && (
                  <View style={styles.chartImage}>
                    <Ionicons name="star" size={iconSize} color="#0099FF" />
                  </View>
                )}
              </View>
              <Text style={styles.patternName}>{pattern.name}</Text>
              <Text style={styles.patternType}>{pattern.type}</Text>
              <Text style={styles.patternDescription}>{pattern.description}</Text>
            </TouchableOpacity>
          ))}
        </View>
        
        {/* Quiz Section */}
        <View style={styles.quizSection}>
          <Text style={styles.quizTitle}>Ready to Practice?</Text>
          <Text style={styles.quizSubtitle}>Test your pattern recognition skills</Text>
          
          <TouchableOpacity 
            style={styles.startQuizButton}
            onPress={() => navigation.navigate('PatternQuiz')}
          >
            <Text style={styles.startQuizButtonText}>Start Pattern Quiz</Text>
          </TouchableOpacity>
        </View>
        
        {/* Bottom Space */}
        <View style={styles.bottomSpace} />
      </ScrollView>
      
      {/* Bottom Indicator */}
      <View style={styles.bottomIndicator} />
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
    paddingBottom: 30,
  },
  headerContainer: {
    paddingTop: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  backButton: {
    marginRight: 10,
    marginTop: 5,
  },
  headerTextContainer: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 18,
    color: '#888',
    marginBottom: 20,
  },
  selectedPatternContainer: {
    paddingHorizontal: 20,
    marginVertical: 15,
  },
  selectedPattern: {
    borderWidth: 2,
    borderColor: '#0099FF',
    borderRadius: 10,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedPatternText: {
    color: '#0099FF',
    fontSize: 20,
    fontWeight: '500',
  },
  patternGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  patternCard: {
    backgroundColor: '#1A1A1A',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  patternImageContainer: {
    width: '100%',
    height: 70,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chartImage: {
    width: '100%',
    height: '100%',
    backgroundColor: '#111',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  patternName: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 5,
  },
  patternType: {
    color: '#0099FF',
    fontSize: 16,
    marginBottom: 5,
  },
  patternDescription: {
    color: '#888',
    fontSize: 14,
  },
  quizSection: {
    marginTop: 10,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  quizTitle: {
    color: COLORS.white,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  quizSubtitle: {
    color: '#888',
    fontSize: 16,
    marginBottom: 20,
  },
  startQuizButton: {
    borderWidth: 2,
    borderColor: '#0099FF',
    borderRadius: 10,
    paddingVertical: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  startQuizButtonText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: '500',
  },
  bottomSpace: {
    height: 40,
  },
  bottomIndicator: {
    width: 135,
    height: 5,
    backgroundColor: '#666',
    borderRadius: 2.5,
    alignSelf: 'center',
    marginBottom: 8,
    position: 'absolute',
    bottom: 0,
  },
});

export default CandlestickCheatSheetScreen; 