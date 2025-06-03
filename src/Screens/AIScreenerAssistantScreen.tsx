import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';
import { COLORS, SIZES, SPACING } from '../utils/theme';
import { NavigationProps } from '../types/navigation';
import Icon from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get('window');

const AIScreenerAssistantScreen: React.FC<NavigationProps<'AIScreenerAssistant'>> = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('Stocks');
  const [sentiment, setSentiment] = useState('Bullish');
  
  const renderTab = (tabName: string) => {
    const isActive = activeTab === tabName;
    return (
      <TouchableOpacity
        style={[styles.tabButton, isActive && styles.activeTabButton]}
        onPress={() => setActiveTab(tabName)}
      >
        <Text style={[styles.tabText, isActive && styles.activeTabText]}>
          {tabName}
        </Text>
        {isActive && <View style={styles.activeTabIndicator} />}
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>AI Screener Assistant</Text>
        <Text style={styles.subHeaderText}>Find Your Next Trade</Text>
      </View>
      
      {/* Asset Category Tabs */}
      <View style={styles.tabsContainer}>
        {renderTab('Stocks')}
        {renderTab('Forex')}
        {renderTab('Crypto')}
        {renderTab('Commodities')}
      </View>
      
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* AI Pick Card */}
        <View style={styles.aiPickCard}>
          <View style={styles.aiPickHeader}>
            <View style={styles.aiPickBadge}>
              <Text style={styles.aiPickBadgeText}>AI PICK</Text>
            </View>
            
            <View style={styles.aiPickContent}>
              <Text style={styles.aiPickTitle}>Undervalued Tech: AAPL</Text>
              <Text style={styles.aiPickDescription}>
                Strong buy signal based on technical analysis
              </Text>
            </View>
            
            <Icon name="trending-up" size={24} color="#0099FF" style={styles.trendIcon} />
          </View>
        </View>
        
        {/* Technical Indicators */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Technical Indicators</Text>
          
          <View style={styles.indicatorRow}>
            <View style={[styles.checkBox, styles.checkBoxChecked]}>
              <Icon name="check" size={16} color="#FFF" />
            </View>
            <Text style={styles.indicatorText}>RSI {'<'} 30</Text>
          </View>
          
          <View style={styles.indicatorRow}>
            <View style={styles.checkBox}></View>
            <Text style={styles.indicatorText}>Volume {'>'} Average</Text>
          </View>
          
          <View style={styles.indicatorRow}>
            <View style={styles.checkBox}></View>
            <Text style={styles.indicatorText}>MACD Crossover</Text>
          </View>
          
          <View style={styles.indicatorRow}>
            <View style={styles.checkBox}></View>
            <Text style={styles.indicatorText}>Golden Cross</Text>
          </View>
        </View>
        
        {/* Market Sentiment */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Market Sentiment</Text>
          
          <TouchableOpacity style={styles.dropdownContainer}>
            <Text style={styles.dropdownText}>{sentiment}</Text>
            <Icon name="chevron-down" size={20} color="#0099FF" />
          </TouchableOpacity>
        </View>
        
        {/* Price Range */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Price Range</Text>
          
          <View style={styles.priceRangeContainer}>
            <View style={styles.priceInputContainer}>
              <TextInput
                style={styles.priceInput}
                placeholder="Min"
                placeholderTextColor="#888"
                keyboardType="numeric"
              />
            </View>
            
            <View style={styles.priceInputContainer}>
              <TextInput
                style={styles.priceInput}
                placeholder="Max"
                placeholderTextColor="#888"
                keyboardType="numeric"
              />
            </View>
          </View>
        </View>
        
        {/* Apply Filters Button */}
        <TouchableOpacity style={styles.applyFiltersButton}>
          <Text style={styles.applyFiltersText}>Apply Filters</Text>
        </TouchableOpacity>
        
        {/* Bottom spacing */}
        <View style={styles.bottomSpace} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: 4,
  },
  subHeaderText: {
    fontSize: 18,
    color: COLORS.gray,
  },
  tabsContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 15,
    alignItems: 'center',
    position: 'relative',
  },
  activeTabButton: {
    borderBottomColor: '#0099FF',
  },
  tabText: {
    color: COLORS.gray,
    fontSize: 16,
  },
  activeTabText: {
    color: '#0099FF',
    fontWeight: 'bold',
  },
  activeTabIndicator: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: '#0099FF',
  },
  aiPickCard: {
    backgroundColor: '#222',
    borderRadius: 12,
    margin: 20,
    padding: 20,
  },
  aiPickHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  aiPickBadge: {
    backgroundColor: '#0099FF',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginRight: 12,
  },
  aiPickBadgeText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 14,
  },
  aiPickContent: {
    flex: 1,
  },
  aiPickTitle: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  aiPickDescription: {
    color: COLORS.gray,
    fontSize: 14,
  },
  trendIcon: {
    marginLeft: 10,
  },
  sectionContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: 15,
  },
  indicatorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  checkBox: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#555',
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkBoxChecked: {
    backgroundColor: '#0099FF',
    borderColor: '#0099FF',
  },
  indicatorText: {
    color: COLORS.white,
    fontSize: 16,
  },
  dropdownContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#222',
    borderRadius: 10,
    padding: 15,
    height: 56,
  },
  dropdownText: {
    color: COLORS.white,
    fontSize: 16,
  },
  priceRangeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priceInputContainer: {
    backgroundColor: '#222',
    borderRadius: 10,
    padding: 15,
    width: '48%',
  },
  priceInput: {
    color: COLORS.white,
    fontSize: 16,
  },
  applyFiltersButton: {
    backgroundColor: '#0099FF',
    borderRadius: 10,
    paddingVertical: 18,
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  applyFiltersText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: '500',
  },
  bottomSpace: {
    height: 20,
  },
});

export default AIScreenerAssistantScreen; 