import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import { COLORS, SIZES, SPACING } from '../utils/theme';
import { NavigationProps } from '../types/navigation';
import Icon from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('window');

// Cash flow data for chart - vary heights to match the image
const cashFlowData = [
  { value: 0.2 },
  { value: 0.5 },
  { value: 0.25 },
  { value: 0.8 },
  { value: 0.3 },
  { value: 0.6 },
  { value: 0.4 },
];

const CashManagementScreen: React.FC<NavigationProps<'CashManagement'>> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />
      
      <ScrollView 
        style={styles.scrollView} 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header with back button */}
        <View style={styles.headerWithNav}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Icon name="arrow-left" size={22} color={COLORS.white} />
          </TouchableOpacity>
          <View style={styles.header}>
            <Text style={styles.heading}>Cash Management</Text>
            <Text style={styles.subheading}>$45,230 Ready to Trade</Text>
          </View>
        </View>

        {/* Available Cash Card */}
        <View style={styles.cashCard}>
          <View style={styles.cashItem}>
            <Text style={styles.cashLabel}>Total Available Cash</Text>
            <Text style={styles.cashAmount}>$45,230</Text>
          </View>
          
          <View style={styles.divider} />
          
          <View style={styles.cashItem}>
            <Text style={styles.cashLabel}>Allocated to Positions</Text>
            <Text style={styles.cashAmount}>$54,770</Text>
          </View>
        </View>

        {/* Recent Transactions */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Recent Transactions</Text>
          
          {/* Last Deposit */}
          <View style={styles.transactionCard}>
            <View style={styles.transactionLeft}>
              <View style={styles.iconContainer}>
                <MaterialIcons name="arrow-upward" size={24} color={COLORS.primary} />
              </View>
              <View style={styles.transactionInfo}>
                <Text style={styles.transactionName}>Last Deposit</Text>
                <Text style={styles.transactionDate}>Mar 15, 2024</Text>
              </View>
            </View>
            <Text style={styles.depositAmount}>+$10,000</Text>
          </View>
        </View>

        {/* Cash Flow */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Cash Flow</Text>
          
          <View style={styles.chartContainer}>
            <View style={styles.chartContent}>
              {/* Render chart bars */}
              {cashFlowData.map((item, index) => (
                <View key={index} style={styles.barContainer}>
                  {/* Blue portion (top part of bar) */}
                  <View 
                    style={[
                      styles.barTop, 
                      { height: item.value * 80 }
                    ]} 
                  />
                  {/* Dark blue portion (bottom part of bar) */}
                  <View style={styles.barBottom} />
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* Action Buttons */}
        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>Allocate Funds</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>View All Transactions</Text>
        </TouchableOpacity>
        
        {/* Bottom indicator (home indicator line) */}
        <View style={styles.homeIndicator} />
        
      </ScrollView>
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
    paddingHorizontal: SPACING.large,
    paddingTop: SPACING.large,
    paddingBottom: SPACING.xxLarge,
  },
  headerWithNav: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: SPACING.large,
  },
  backButton: {
    marginRight: SPACING.medium,
    marginTop: 4,
  },
  header: {
    flex: 1,
  },
  heading: {
    fontSize: SIZES.xxLarge,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: SPACING.xSmall,
  },
  subheading: {
    fontSize: SIZES.small,
    color: COLORS.white,
  },
  cashCard: {
    backgroundColor: '#1A1A1A',
    borderRadius: 15,
    padding: SPACING.large,
    marginBottom: SPACING.large,
  },
  cashItem: {
    paddingVertical: SPACING.medium,
  },
  cashLabel: {
    fontSize: SIZES.small,
    color: COLORS.white,
    marginBottom: 8,
  },
  cashAmount: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  divider: {
    height: 1,
    backgroundColor: '#2A2A2A',
    marginVertical: 5,
  },
  sectionContainer: {
    marginBottom: SPACING.large,
  },
  sectionTitle: {
    fontSize: SIZES.medium,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: SPACING.medium,
  },
  transactionCard: {
    backgroundColor: '#1A1A1A',
    borderRadius: 15,
    padding: SPACING.large,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  transactionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(0, 153, 255, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACING.medium,
  },
  transactionInfo: {
    flexDirection: 'column',
  },
  transactionName: {
    fontSize: SIZES.small,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: 4,
  },
  transactionDate: {
    fontSize: SIZES.xSmall,
    color: COLORS.gray,
  },
  depositAmount: {
    fontSize: SIZES.medium,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  chartContainer: {
    backgroundColor: '#1A1A1A',
    borderRadius: 15,
    padding: SPACING.medium,
    height: 180,
    justifyContent: 'flex-end',
    marginTop: SPACING.small,
  },
  chartContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: '100%',
    paddingHorizontal: SPACING.medium,
    paddingBottom: SPACING.small,
  },
  barContainer: {
    width: 26,
    height: '80%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  barTop: {
    width: '100%',
    backgroundColor: COLORS.primary,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
  },
  barBottom: {
    width: '100%',
    height: 40,
    backgroundColor: '#0D3A63',
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
  },
  primaryButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 8,
    paddingVertical: SPACING.medium,
    alignItems: 'center',
    marginBottom: SPACING.medium,
  },
  primaryButtonText: {
    color: COLORS.white,
    fontSize: SIZES.small,
    fontWeight: 'bold',
  },
  secondaryButton: {
    backgroundColor: '#1A1A1A',
    borderRadius: 8,
    paddingVertical: SPACING.medium,
    alignItems: 'center',
    marginBottom: SPACING.xxLarge,
  },
  secondaryButtonText: {
    color: COLORS.white,
    fontSize: SIZES.small,
    fontWeight: 'bold',
  },
  homeIndicator: {
    width: 36,
    height: 5,
    backgroundColor: '#FFFFFF',
    borderRadius: 3,
    alignSelf: 'center',
    marginBottom: 8,
    opacity: 0.5,
  },
});

export default CashManagementScreen; 