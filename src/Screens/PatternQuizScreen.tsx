import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  Platform,
  ScrollView,
} from 'react-native';
import { COLORS } from '../utils/theme';
import { NavigationProps } from '../types/navigation';
import Icon from 'react-native-vector-icons/Feather';

const { width, height } = Dimensions.get('window');

const PatternQuizScreen: React.FC<NavigationProps<'PatternQuiz'>> = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState('Hammer');
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />
      
      {/* Back Button */}
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Icon name="chevron-left" size={32} color={COLORS.white} />
      </TouchableOpacity>
      
      <ScrollView 
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={styles.scrollContent}
        bounces={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Pattern Quiz Challenge</Text>
          <Text style={styles.subHeaderText}>Test Your Candlestick Skills</Text>
        </View>
        
        {/* Progress Section */}
        <View style={styles.progressSection}>
          <View style={styles.progressLabelContainer}>
            <Text style={styles.progressLabel}>Progress</Text>
            <Text style={styles.questionsCount}>2/10 Questions</Text>
          </View>
          
          <View style={styles.progressBarContainer}>
            <View style={styles.progressBarBackground}>
              <View style={styles.progressBarFill} />
            </View>
          </View>
        </View>
        
        {/* Score Circle */}
        <View style={styles.scoreContainer}>
          <View style={styles.scoreCircle}>
            <Text style={styles.scoreText}>80%</Text>
          </View>
          <Text style={styles.scoreLabel}>Correct</Text>
        </View>
        
        {/* Question Card */}
        <View style={styles.questionCard}>
          <Text style={styles.questionText}>Identify this pattern:</Text>
          
          <View style={styles.patternImageContainer}>
            <View style={styles.greenSquare} />
          </View>
        </View>
        
        {/* Answer Options */}
        <View style={styles.optionsContainer}>
          <TouchableOpacity 
            style={styles.selectedOption} 
            onPress={() => setSelectedOption('Hammer')}
          >
            <Text style={styles.optionText}>Hammer</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.optionButton} 
            onPress={() => setSelectedOption('Doji')}
          >
            <Text style={styles.optionText}>Doji</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.optionButton} 
            onPress={() => setSelectedOption('Engulfing')}
          >
            <Text style={styles.optionText}>Engulfing</Text>
          </TouchableOpacity>
        </View>
        
        {/* Hint Button */}
        <TouchableOpacity style={styles.hintButton}>
          <Icon name="help-circle" size={20} color="#777" />
          <Text style={styles.hintText}>Need a hint?</Text>
        </TouchableOpacity>
        
        {/* Submit Button */}
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Submit Answer</Text>
        </TouchableOpacity>
        
        {/* Space for bottom indicator */}
        <View style={styles.bottomSpace} />
      </ScrollView>
      
      {/* Bottom Indicator outside ScrollView */}
      {/* <View style={styles.bottomIndicator} /> */}
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
    paddingBottom: 20,
  },
  backButton: {
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 5,
  },
  header: {
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: 5,
  },
  subHeaderText: {
    fontSize: 18,
    color: '#888',
    marginBottom: 20,
  },
  progressSection: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  progressLabelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  progressLabel: {
    color: COLORS.white,
    fontSize: 16,
  },
  questionsCount: {
    color: COLORS.white,
    fontSize: 16,
  },
  progressBarContainer: {
    width: '100%',
  },
  progressBarBackground: {
    height: 8,
    backgroundColor: '#333',
    borderRadius: 4,
    width: '100%',
  },
  progressBarFill: {
    height: 8,
    width: '20%',
    backgroundColor: '#0099FF',
    borderRadius: 4,
  },
  scoreContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  scoreCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 3,
    borderColor: '#0099FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  scoreText: {
    color: COLORS.white,
    fontSize: 22,
    fontWeight: 'bold',
  },
  scoreLabel: {
    color: COLORS.white,
    fontSize: 16,
  },
  questionCard: {
    backgroundColor: '#222',
    borderRadius: 12,
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 20,
  },
  questionText: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  patternImageContainer: {
    width: '100%',
    aspectRatio: 1.6,
    backgroundColor: '#111',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  greenSquare: {
    width: width * 0.40,
    height: width * 0.40,
    backgroundColor: '#00FF66',
  },
  optionsContainer: {
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  optionButton: {
    backgroundColor: '#222',
    borderRadius: 10,
    paddingVertical: 18,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  selectedOption: {
    backgroundColor: '#1A1A1A',
    borderRadius: 10,
    paddingVertical: 18,
    paddingHorizontal: 20,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#0099FF',
  },
  optionText: {
    color: COLORS.white,
    fontSize: 18,
    paddingLeft: 10,
  },
  hintButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
  },
  hintText: {
    color: '#777',
    fontSize: 16,
    marginLeft: 5,
  },
  submitButton: {
    backgroundColor: '#0099FF',
    borderRadius: 10,
    paddingVertical: 18,
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 30,
  },
  submitButtonText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: '600',
  },
  bottomSpace: {
    height: 20,
  },
  // bottomIndicator: {
  //   width: 135,
  //   height: 5,
  //   backgroundColor: '#666',
  //   borderRadius: 2.5,
  //   alignSelf: 'center',
  //   marginBottom: 8,
  //   position: 'absolute',
  //   bottom: 0,
  // },
});

export default PatternQuizScreen; 