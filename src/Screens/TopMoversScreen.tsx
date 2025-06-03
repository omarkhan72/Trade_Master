import React, { useState } from 'react';
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
import LinearGradient from 'react-native-linear-gradient';

const { width } = Dimensions.get('window');

// Stock data
const stocksData = [
  {
    name: 'Apple Inc.',
    symbol: 'AAPL',
    price: '$182.29',
    change: '+3.2%',
    isPositive: true,
    volume: '$2.8B'
  },
  {
    name: 'Bitcoin',
    symbol: 'BTC',
    price: '$43,250',
    change: '-1.1%',
    isPositive: false,
    volume: '$32.5B'
  },
  {
    name: 'Tesla Inc.',
    symbol: 'TSLA',
    price: '$248.50',
    change: '+2.8%',
    isPositive: true,
    volume: '$18.2B'
  }
];

const TopMoversScreen: React.FC<NavigationProps<'TopMovers'>> = ({ navigation }) => {
  const [activeTimeframe, setActiveTimeframe] = useState('24H');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />
      
      <ScrollView 
        style={styles.scrollView} 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.headerWithNav}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Icon name="arrow-left" size={22} color={COLORS.white} />
          </TouchableOpacity>
          <View style={styles.header}>
            <Text style={styles.heading}>Top Movers</Text>
            <Text style={styles.subheading}>Explore Today's Market Leaders</Text>
          </View>
        </View>

        {/* Market Overview Card */}
        <View style={styles.marketOverviewCard}>
          <View style={styles.marketOverviewHeader}>
            <View>
              <Text style={styles.marketOverviewTitle}>Market Overview</Text>
              <Text style={styles.marketOverviewSubtitle}>24H Performance</Text>
            </View>
            
            {/* Time filters */}
            <View style={styles.timeFilters}>
              <TouchableOpacity 
                style={activeTimeframe === '1H' ? styles.timeFilterActive : styles.timeFilter}
                onPress={() => setActiveTimeframe('1H')}
              >
                <Text style={activeTimeframe === '1H' ? styles.timeFilterTextActive : styles.timeFilterText}>1H</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={activeTimeframe === '24H' ? styles.timeFilterActive : styles.timeFilter}
                onPress={() => setActiveTimeframe('24H')}
              >
                <Text style={activeTimeframe === '24H' ? styles.timeFilterTextActive : styles.timeFilterText}>24H</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={activeTimeframe === '7D' ? styles.timeFilterActive : styles.timeFilter}
                onPress={() => setActiveTimeframe('7D')}
              >
                <Text style={activeTimeframe === '7D' ? styles.timeFilterTextActive : styles.timeFilterText}>7D</Text>
              </TouchableOpacity>
            </View>
          </View>
          
          {/* Chart */}
          <View style={styles.chartContainer}>
            <LinearGradient
              colors={['rgba(0, 83, 166, 0.2)', 'rgba(13, 13, 13, 0)']}
              style={styles.chartGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
            >
              <View style={styles.chartLine} />
            </LinearGradient>
          </View>
        </View>

        {/* Stock Cards */}
        {stocksData.map((stock, index) => (
          <View key={index} style={styles.stockCard}>
            <View style={styles.stockHeader}>
              <View>
                <Text style={styles.stockName}>{stock.name}</Text>
                <Text style={styles.stockSymbol}>{stock.symbol}</Text>
              </View>
              <View style={styles.priceContainer}>
                <Text style={styles.stockPrice}>{stock.price}</Text>
                <Text style={stock.isPositive ? styles.positiveChange : styles.negativeChange}>
                  {stock.change}
                </Text>
              </View>
            </View>
            
            {/* Volume info */}
            <View style={styles.volumeContainer}>
              <Icon name="clock" size={16} color={COLORS.gray} style={styles.volumeIcon} />
              <Text style={styles.volumeText}>Vol: {stock.volume}</Text>
            </View>
            
            {/* Divider */}
            <View style={[
              styles.divider, 
              { backgroundColor: stock.isPositive ? COLORS.primary : COLORS.sell }
            ]} />
            
            {/* Trade Button */}
            <TouchableOpacity style={styles.tradeButton}>
              <Text style={styles.tradeButtonText}>Trade Now</Text>
            </TouchableOpacity>
          </View>
        ))}

        {/* Market Summary */}
        <View style={styles.marketSummaryContainer}>
          <Text style={styles.marketSummaryTitle}>Market Summary</Text>
          <Text style={styles.marketSummaryText}>
            Tech stocks lead gains as AI developments continue to drive market sentiment. Bitcoin shows weakness amid regulatory concerns.
          </Text>
          
          <View style={styles.marketMetricsContainer}>
            <View style={styles.marketMetric}>
              <Text style={styles.marketMetricLabel}>Market Cap:</Text>
              <Text style={styles.marketMetricValue}>$1.2T</Text>
            </View>
            <View style={styles.marketMetric}>
              <Text style={styles.marketMetricLabel}>24h Volume:</Text>
              <Text style={styles.marketMetricValue}>$85.4B</Text>
            </View>
          </View>
        </View>
        
        {/* View All Button */}
        <TouchableOpacity style={styles.viewAllButton}>
          <Text style={styles.viewAllButtonText}>View All Top Movers</Text>
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
    fontSize: SIZES.medium,
    color: COLORS.gray,
  },
  marketOverviewCard: {
    backgroundColor: '#1A1A1A',
    borderRadius: 15,
    padding: SPACING.large,
    marginBottom: SPACING.large,
  },
  marketOverviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.medium,
  },
  marketOverviewTitle: {
    fontSize: SIZES.large,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  marketOverviewSubtitle: {
    fontSize: SIZES.small,
    color: COLORS.gray,
  },
  timeFilters: {
    flexDirection: 'row',
    backgroundColor: '#0D0D0D',
    borderRadius: 20,
    padding: 2,
  },
  timeFilter: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  timeFilterActive: {
    backgroundColor: COLORS.primary,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  timeFilterText: {
    color: COLORS.gray,
    fontSize: SIZES.small,
  },
  timeFilterTextActive: {
    color: COLORS.white,
    fontSize: SIZES.small,
    fontWeight: 'bold',
  },
  chartContainer: {
    height: 160,
    marginTop: SPACING.medium,
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 10,
  },
  chartGradient: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  chartLine: {
    position: 'absolute',
    width: '100%',
    height: 2,
    backgroundColor: COLORS.primary,
    top: '40%',
    transform: [{ scaleY: 0.5 }],
  },
  stockCard: {
    backgroundColor: '#1A1A1A',
    borderRadius: 15,
    padding: SPACING.large,
    marginBottom: SPACING.large,
  },
  stockHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SPACING.medium,
  },
  stockName: {
    fontSize: SIZES.large,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: 4,
  },
  stockSymbol: {
    fontSize: SIZES.small,
    color: COLORS.gray,
  },
  priceContainer: {
    alignItems: 'flex-end',
  },
  stockPrice: {
    fontSize: SIZES.large,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: 4,
  },
  positiveChange: {
    fontSize: SIZES.small,
    color: COLORS.primary,
    fontWeight: 'bold',
  },
  negativeChange: {
    fontSize: SIZES.small,
    color: COLORS.sell,
    fontWeight: 'bold',
  },
  volumeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.medium,
  },
  volumeIcon: {
    marginRight: 6,
  },
  volumeText: {
    fontSize: SIZES.small,
    color: COLORS.gray,
  },
  divider: {
    height: 2,
    width: '100%',
    marginBottom: SPACING.medium,
  },
  tradeButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 8,
    paddingVertical: SPACING.medium,
    alignItems: 'center',
  },
  tradeButtonText: {
    color: COLORS.white,
    fontSize: SIZES.medium,
    fontWeight: 'bold',
  },
  marketSummaryContainer: {
    marginBottom: SPACING.large,
  },
  marketSummaryTitle: {
    fontSize: SIZES.large,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: SPACING.medium,
  },
  marketSummaryText: {
    fontSize: SIZES.small,
    color: COLORS.gray,
    lineHeight: 20,
    marginBottom: SPACING.medium,
  },
  marketMetricsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  marketMetric: {
    flexDirection: 'row',
  },
  marketMetricLabel: {
    fontSize: SIZES.small,
    color: COLORS.gray,
    marginRight: 6,
  },
  marketMetricValue: {
    fontSize: SIZES.small,
    color: COLORS.white,
  },
  viewAllButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 8,
    paddingVertical: SPACING.medium,
    alignItems: 'center',
    marginBottom: SPACING.xxLarge,
  },
  viewAllButtonText: {
    color: COLORS.white,
    fontSize: SIZES.medium,
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

export default TopMoversScreen; 