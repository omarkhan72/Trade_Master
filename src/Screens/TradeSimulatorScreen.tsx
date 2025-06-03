import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import { COLORS, SIZES, SPACING } from '../utils/theme';
import { NavigationProps } from '../types/navigation';
import Icon from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Slider from '@react-native-community/slider';
import { RootStackParamList } from '../types/navigation';

const { width } = Dimensions.get('window');

const TradeSimulatorScreen: React.FC<NavigationProps<'TradeSimulator'>> = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('Stocks');
  const [stopLoss, setStopLoss] = useState(1.20);
  const [takeProfit, setTakeProfit] = useState(1.40);
  const [lotSize, setLotSize] = useState('0.1 Lot');
  const [selectedTool, setSelectedTool] = useState('');

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
  
  const handleToolPress = (toolName: string, navigateTo?: keyof RootStackParamList) => {
    setSelectedTool(toolName);
    if (navigateTo) {
      navigation.navigate(navigateTo);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Trade Simulator</Text>
        <Text style={styles.balanceText}>Virtual Balance: $100,000</Text>
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
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Icon name="search" size={20} color="#888" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search Tesla, BTC, EUR/USD"
            placeholderTextColor="#888"
          />
        </View>
        
        {/* Chart Placeholder */}
        <View style={styles.chartContainer}>
          <Text style={styles.chartPlaceholderText}>Static Chart Placeholder</Text>
        </View>
        
        {/* Trading Form */}
        <View style={styles.tradingForm}>
          {/* Entry Price */}
          <Text style={styles.formLabel}>Entry Price</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.currencySymbol}>$</Text>
            <TextInput
              style={styles.priceInput}
              placeholder="0.00"
              keyboardType="numeric"
              placeholderTextColor="#fff"
            />
          </View>
          
          {/* Position Size */}
          <Text style={styles.formLabel}>Position Size</Text>
          <TouchableOpacity style={styles.dropdownContainer}>
            <Text style={styles.dropdownText}>{lotSize}</Text>
            <Icon name="chevron-down" size={20} color="#fff" />
          </TouchableOpacity>
          
          {/* Stop Loss & Take Profit */}
          <View style={styles.sliderLabelContainer}>
            <Text style={styles.formLabel}>Stop Loss</Text>
            <Text style={styles.formLabel}>Take Profit</Text>
          </View>
          
          <View style={styles.sliderContainer}>
            <View style={styles.sliderTrack}>
              <View style={styles.sliderFill} />
            </View>
            <View style={[styles.sliderThumb, styles.sliderThumbLeft]} />
            <View style={[styles.sliderThumb, styles.sliderThumbRight]} />
          </View>
          
          <View style={styles.sliderValuesContainer}>
            <Text style={styles.sliderValue}>$1.20</Text>
            <Text style={styles.sliderValue}>$1.40</Text>
          </View>
          
          {/* Tool Buttons */}
          <View style={styles.toolButtonsContainer}>
            <TouchableOpacity 
              style={[styles.toolButton, selectedTool === 'AI Screener' && styles.selectedToolButton]}
              onPress={() => handleToolPress('AI Screener', 'AIScreenerAssistant')}
            >
              <View style={styles.iconContainer}>
                <MaterialCommunityIcons name="robot" size={22} color={selectedTool === 'AI Screener' ? '#0099FF' : '#888'} />
              </View>
              <Text style={[styles.toolButtonText, selectedTool === 'AI Screener' && styles.selectedToolText]}>AI Screener</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.toolButton, selectedTool === 'Patterns' && styles.selectedToolButton]}
              onPress={() => handleToolPress('Patterns', 'CandlestickCheatSheet')}
            >
              <View style={styles.iconContainer}>
                <MaterialCommunityIcons name="chart-line-variant" size={22} color={selectedTool === 'Patterns' ? '#0099FF' : '#888'} />
              </View>
              <Text style={[styles.toolButtonText, selectedTool === 'Patterns' && styles.selectedToolText]}>Patterns</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.toolButton, selectedTool === 'Guide' && styles.selectedToolButton]}
              onPress={() => handleToolPress('Guide')}
            >
              <View style={styles.iconContainer}>
                <MaterialIcons name="menu-book" size={22} color={selectedTool === 'Guide' ? '#0099FF' : '#888'} />
              </View>
              <Text style={[styles.toolButtonText, selectedTool === 'Guide' && styles.selectedToolText]}>Guide</Text>
            </TouchableOpacity>
          </View>
          
          {/* Place Trade Button */}
          <TouchableOpacity style={styles.placeTradeButton}>
            <Text style={styles.placeTradeButtonText}>Place Trade</Text>
          </TouchableOpacity>
        </View>
        
        {/* Additional space at the bottom for better scrolling */}
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
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: 4,
  },
  balanceText: {
    fontSize: 16,
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
    paddingVertical: 12,
    alignItems: 'center',
    position: 'relative',
  },
  activeTabButton: {
    borderBottomColor: '#0099FF',
  },
  tabText: {
    color: COLORS.gray,
    fontSize: 15,
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#222',
    borderRadius: 10,
    margin: 20,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 46,
    color: COLORS.white,
    fontSize: 15,
  },
  chartContainer: {
    height: 340,
    backgroundColor: '#222',
    margin: 20,
    marginTop: 0,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chartPlaceholderText: {
    color: '#555',
    fontSize: 18,
  },
  tradingForm: {
    paddingHorizontal: 20,
  },
  formLabel: {
    color: COLORS.white,
    fontSize: 15,
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#222',
    borderRadius: 10,
    marginBottom: 16,
    paddingHorizontal: 12,
  },
  currencySymbol: {
    color: COLORS.white,
    fontSize: 18,
    marginRight: 8,
  },
  priceInput: {
    flex: 1,
    height: 50,
    color: COLORS.white,
    fontSize: 18,
  },
  dropdownContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#222',
    borderRadius: 10,
    marginBottom: 16,
    paddingHorizontal: 12,
    height: 50,
  },
  dropdownText: {
    color: COLORS.white,
    fontSize: 18,
  },
  sliderLabelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  sliderContainer: {
    height: 40,
    width: '100%',
    justifyContent: 'center',
    position: 'relative',
  },
  sliderTrack: {
    height: 4,
    backgroundColor: '#333',
    borderRadius: 2,
  },
  sliderFill: {
    position: 'absolute',
    height: '100%',
    width: '55%',
    backgroundColor: '#0099FF',
    borderRadius: 2,
    left: '20%',
  },
  sliderThumb: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    top: -8,
  },
  sliderThumbLeft: {
    left: '20%',
  },
  sliderThumbRight: {
    left: '75%',
  },
  sliderValuesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
    marginTop: 5,
  },
  sliderValue: {
    color: COLORS.white,
    fontSize: 15,
  },
  toolButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  toolButton: {
    backgroundColor: '#222',
    borderRadius: 10,
    padding: 12,
    alignItems: 'center',
    width: '31%',
    height: 84,
    justifyContent: 'center',
  },
  selectedToolButton: {
    backgroundColor: '#1c1c1c',
    borderWidth: 1,
    borderColor: '#0099FF33',
  },
  iconContainer: {
    marginBottom: 8,
  },
  toolButtonText: {
    color: '#888',
    fontSize: 13,
    textAlign: 'center',
  },
  selectedToolText: {
    color: '#0099FF',
  },
  placeTradeButton: {
    backgroundColor: '#0099FF',
    borderRadius: 10,
    paddingVertical: 18,
    alignItems: 'center',
    marginBottom: 20,
  },
  placeTradeButtonText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: '500',
  },
  bottomSpace: {
    height: 20,
  },
});

export default TradeSimulatorScreen; 