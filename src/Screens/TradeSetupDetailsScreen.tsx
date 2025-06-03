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
  ScrollView,
  Platform,
} from 'react-native';
import { COLORS } from '../utils/theme';
import { NavigationProps } from '../types/navigation';
import Icon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');

const TradeSetupDetailsScreen: React.FC<NavigationProps<'TradeSetupDetails'>> = ({ navigation }) => {
  const [entryPrice, setEntryPrice] = useState('$182.29');
  const [stopLoss, setStopLoss] = useState('$180.00');
  const [takeProfit, setTakeProfit] = useState('$185.00');
  const [positionSize, setPositionSize] = useState('10 Shares');
  
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
          <Text style={styles.headerTitle}>Trade Setup Details</Text>
          <Text style={styles.headerSubtitle}>Customize Your $100,000 Trade</Text>
        </View>
        
        {/* Main Form Container */}
        <View style={styles.formContainer}>
          {/* Entry Price */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Entry Price</Text>
            <View style={styles.inputContainer}>
              <Text style={styles.inputText}>{entryPrice}</Text>
            </View>
          </View>
          
          {/* Stop Loss */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Stop-Loss</Text>
            <View style={styles.inputContainer}>
              <Text style={styles.inputText}>{stopLoss}</Text>
              {/* Stop Loss Slider */}
              <View style={styles.sliderContainer}>
                <View style={styles.sliderTrack}>
                  <View style={[styles.sliderFill, { width: '30%' }]} />
                </View>
              </View>
            </View>
          </View>
          
          {/* Take Profit */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Take-Profit</Text>
            <View style={styles.inputContainer}>
              <Text style={styles.inputText}>{takeProfit}</Text>
              {/* Take Profit Slider */}
              <View style={styles.sliderContainer}>
                <View style={styles.sliderTrack}>
                  <View style={[styles.sliderFill, { width: '70%' }]} />
                </View>
              </View>
            </View>
          </View>
          
          {/* Position Size */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Position Size</Text>
            <TouchableOpacity style={styles.dropdownContainer}>
              <Text style={styles.dropdownText}>{positionSize}</Text>
              <Icon name="chevron-down" size={24} color={COLORS.white} />
            </TouchableOpacity>
          </View>
        </View>
        
        {/* Risk-Reward Analysis */}
        <View style={styles.riskRewardContainer}>
          <Text style={styles.riskRewardTitle}>Risk-Reward Analysis</Text>
          <Text style={styles.riskRewardRatio}>1:2</Text>
        </View>
        
        {/* Save Button */}
        <TouchableOpacity 
          style={styles.saveButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.saveButtonText}>Save & Place Trade</Text>
        </TouchableOpacity>
        
        {/* Bottom Space */}
        <View style={styles.bottomSpace} />
      </ScrollView>
      
      {/* Bottom Indicator */}
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
    paddingBottom: 30,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 5,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 18,
    color: '#888',
    marginBottom: 10,
  },
  formContainer: {
    backgroundColor: '#1A1A1A',
    borderRadius: 15,
    marginHorizontal: 20,
    marginTop: 15,
    padding: 20,
  },
  inputGroup: {
    marginBottom: 20,
  },
  inputLabel: {
    color: COLORS.white,
    fontSize: 18,
    marginBottom: 10,
  },
  inputContainer: {
    backgroundColor: '#222',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 10,
  },
  inputText: {
    color: COLORS.white,
    fontSize: 22,
    fontWeight: '500',
    marginBottom: 5,
  },
  sliderContainer: {
    marginTop: 8,
    marginBottom: 5,
  },
  sliderTrack: {
    backgroundColor: '#333',
    borderRadius: 3,
    height: 6,
    overflow: 'hidden',
  },
  sliderFill: {
    backgroundColor: '#0099FF',
    borderRadius: 3,
    height: 6,
  },
  dropdownContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#222',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  dropdownText: {
    color: COLORS.white,
    fontSize: 22,
    fontWeight: '500',
  },
  riskRewardContainer: {
    backgroundColor: '#1A1A1A',
    borderRadius: 15,
    marginHorizontal: 20,
    marginTop: 15,
    padding: 20,
  },
  riskRewardTitle: {
    color: COLORS.white,
    fontSize: 18,
    marginBottom: 10,
  },
  riskRewardRatio: {
    color: COLORS.white,
    fontSize: 28,
    fontWeight: 'bold',
  },
  saveButton: {
    backgroundColor: '#0099FF',
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 20,
    paddingVertical: 18,
    alignItems: 'center',
  },
  saveButtonText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: '600',
  },
  bottomSpace: {
    height: 40,
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

export default TradeSetupDetailsScreen; 