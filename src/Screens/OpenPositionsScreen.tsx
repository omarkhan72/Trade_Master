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
import LinearGradient from 'react-native-linear-gradient';

const { width } = Dimensions.get('window');

// Position data
const positionsData = [
  { 
    symbol: 'AAPL', 
    currentPrice: '$185.50', 
    entryPrice: '$182.00', 
    profit: '50.00', 
    isProfit: true 
  },
  { 
    symbol: 'BTC', 
    currentPrice: '$42850.00', 
    entryPrice: '$43250.00', 
    profit: '120.00', 
    isProfit: false 
  },
  { 
    symbol: 'TSLA', 
    currentPrice: '$249.70', 
    entryPrice: '$248.50', 
    profit: '30.00', 
    isProfit: true 
  },
];

const OpenPositionsScreen: React.FC<NavigationProps<'OpenPositions'>> = ({ navigation }) => {
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
            <Icon name="arrow-left" size={24} color={COLORS.white} />
          </TouchableOpacity>
          <View style={styles.header}>
            <Text style={styles.heading}>Open Positions</Text>
            <Text style={styles.subheading}>Manage Your Active Trades</Text>
          </View>
        </View>

        {/* Chart View */}
        <View style={styles.chartContainer}>
          <LinearGradient
            colors={['rgba(0, 83, 166, 0.2)', 'rgba(13, 13, 13, 0)']}
            style={styles.chartGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
          >
            <View style={styles.chartLine}>
              <View style={styles.blueLine} />
            </View>
          </LinearGradient>
        </View>

        {/* Overview Card */}
        <View style={styles.overviewCard}>
          <View style={styles.overviewItem}>
            <Text style={styles.overviewLabel}>Total P/L</Text>
            <Text style={styles.negativeAmount}>-$40.00</Text>
          </View>
          <View style={styles.overviewItem}>
            <Text style={styles.overviewLabel}>Active Trades</Text>
            <Text style={styles.positionCount}>3 Positions</Text>
          </View>
        </View>

        {/* Positions List */}
        {positionsData.map((position, index) => (
          <View key={index} style={styles.positionCard}>
            <View style={styles.positionHeader}>
              <Text style={styles.positionSymbol}>{position.symbol}</Text>
              <Text style={position.symbol === 'BTC' ? styles.lossAmount : styles.profitAmount}>
                {position.currentPrice}
              </Text>
            </View>
            <View style={styles.positionDetails}>
              <Text style={styles.entryLabel}>Entry: {position.entryPrice}</Text>
              <View style={styles.profitContainer}>
                <Icon 
                  name={position.isProfit ? "trending-up" : "trending-down"} 
                  size={16} 
                  color={position.isProfit ? '#0099FF' : '#FF4C79'} 
                  style={styles.trendIcon} 
                />
                <Text style={position.isProfit ? styles.profitText : styles.lossText}>
                  {position.isProfit ? `+${position.profit}` : `-${position.profit}`}
                </Text>
              </View>
            </View>
            <TouchableOpacity style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close Position</Text>
            </TouchableOpacity>
          </View>
        ))}

        {/* Market Hours */}
        <View style={styles.footerRow}>
          <View style={styles.marketHoursContainer}>
            <Icon name="clock" size={16} color={COLORS.primary} />
            <Text style={styles.marketHoursText}>Market Hours</Text>
          </View>
          <Text style={styles.updateText}>Last updated: 2 min ago</Text>
        </View>
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
    fontSize: SIZES.medium,
    color: COLORS.gray,
  },
  chartContainer: {
    backgroundColor: '#1A1A1A',
    borderRadius: 15,
    height: 130,
    marginBottom: SPACING.large,
    overflow: 'hidden',
    justifyContent: 'center',
    position: 'relative',
  },
  chartGradient: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  chartLine: {
    position: 'absolute',
    width: '100%',
    height: 60,
    top: '30%',
  },
  blueLine: {
    width: '100%',
    height: 2,
    backgroundColor: COLORS.primary,
    position: 'absolute',
    top: '50%',
    borderRadius: 100,
    transform: [{ scaleY: 3 }],
  },
  overviewCard: {
    flexDirection: 'row',
    backgroundColor: '#1A1A1A',
    borderRadius: 15,
    padding: SPACING.large,
    marginBottom: SPACING.large,
    justifyContent: 'space-between',
  },
  overviewItem: {
    flexDirection: 'column',
  },
  overviewLabel: {
    fontSize: SIZES.medium,
    color: COLORS.white,
    marginBottom: 6,
  },
  negativeAmount: {
    fontSize: SIZES.large,
    fontWeight: 'bold',
    color: '#FF4C79',
  },
  positionCount: {
    fontSize: SIZES.large,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  positionCard: {
    backgroundColor: '#1A1A1A',
    borderRadius: 15,
    padding: SPACING.large,
    marginBottom: SPACING.large,
  },
  positionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SPACING.small,
  },
  positionSymbol: {
    fontSize: SIZES.large,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  profitAmount: {
    fontSize: SIZES.large,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  lossAmount: {
    fontSize: SIZES.large,
    fontWeight: 'bold',
    color: '#FF4C79',
  },
  positionDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SPACING.medium,
  },
  entryLabel: {
    fontSize: SIZES.medium,
    color: COLORS.gray,
  },
  profitContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  trendIcon: {
    marginRight: 4,
  },
  profitText: {
    fontSize: SIZES.medium,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  lossText: {
    fontSize: SIZES.medium,
    fontWeight: 'bold',
    color: '#FF4C79',
  },
  closeButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 30,
    paddingVertical: SPACING.medium,
    alignItems: 'center',
  },
  closeButtonText: {
    color: COLORS.white,
    fontSize: SIZES.medium,
    fontWeight: 'bold',
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SPACING.medium,
  },
  marketHoursContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  marketHoursText: {
    color: COLORS.primary,
    fontSize: SIZES.small,
    marginLeft: SPACING.xSmall,
  },
  updateText: {
    fontSize: SIZES.small,
    color: COLORS.gray,
  },
});

export default OpenPositionsScreen; 