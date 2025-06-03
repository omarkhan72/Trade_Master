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
import { LineChart } from 'react-native-chart-kit';

const { width, height } = Dimensions.get('window');

const DailyProfitScreen: React.FC<NavigationProps<'DailyProfit'>> = ({ navigation }) => {
  // Chart data
  const chartData = {
    labels: ['9AM', '10AM', '12PM', '1PM', '2PM', '3PM', '5PM'],
    datasets: [
      {
        data: [120, 180, 240, 300, 350, 400, 520],
        color: (opacity = 1) => `rgba(0, 153, 255, ${opacity})`,
        strokeWidth: 2,
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: '#1A1A1A',
    backgroundGradientTo: '#1A1A1A',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '0',
    },
  };

  // Trading timeline data
  const timelineData = [
    { stock: 'AAPL', time: '9:30 AM', profit: '+$300' },
    { stock: 'TSLA', time: '11:15 AM', profit: '+$120' },
    { stock: 'MSFT', time: '2:45 PM', profit: '+$100' },
  ];

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
            <Text style={styles.heading}>Daily Profit Overview</Text>
            <Text style={styles.subheading}>Today's Gains: $520</Text>
          </View>
        </View>

        {/* Chart */}
        <View style={styles.chartContainer}>
          <LineChart
            data={chartData}
            width={width - SPACING.large * 2}
            height={220}
            chartConfig={chartConfig}
            bezier
            withVerticalLines={false}
            withHorizontalLines={true}
            withHorizontalLabels={true}
            withVerticalLabels={true}
            fromZero={true}
            style={styles.chart}
          />
        </View>

        {/* Stats Grid */}
        <View style={styles.statsGrid}>
          {/* Total Profit */}
          <View style={styles.statCard}>
            <Icon name="trending-up" size={24} color="#0099FF" style={styles.statIcon} />
            <Text style={styles.statValue}>$520</Text>
            <Text style={styles.statLabel}>Total Profit</Text>
          </View>
          
          {/* Trades Today */}
          <View style={styles.statCard}>
            <Icon name="bar-chart-2" size={24} color="#0099FF" style={styles.statIcon} />
            <Text style={styles.statValue}>3</Text>
            <Text style={styles.statLabel}>Trades Today</Text>
          </View>
          
          {/* Win Rate */}
          <View style={styles.statCard}>
            <Icon name="trending-up" size={24} color="#0099FF" style={styles.statIcon} />
            <Text style={styles.statValue}>68%</Text>
            <Text style={styles.statLabel}>Win Rate</Text>
          </View>
          
          {/* Avg. Profit */}
          <View style={styles.statCard}>
            <Icon name="bar-chart-2" size={24} color="#0099FF" style={styles.statIcon} />
            <Text style={styles.statValue}>$173</Text>
            <Text style={styles.statLabel}>Avg. Profit</Text>
          </View>
        </View>

        {/* Best Trade */}
        <View style={styles.bestTradeCard}>
          <View style={styles.bestTradeLeft}>
            <Text style={styles.bestTradeStock}>AAPL</Text>
            <Text style={styles.bestTradeLabel}>Best Trade Today</Text>
          </View>
          <Text style={styles.bestTradeProfit}>+$300</Text>
        </View>

        {/* Trading Timeline */}
        <View style={styles.timelineSection}>
          <Text style={styles.timelineHeading}>Today's Trading Timeline</Text>
          
          {timelineData.map((item, index) => (
            <View key={index} style={styles.timelineItem}>
              <View style={styles.timelineLeft}>
                <Icon name="clock" size={20} color="#FFFFFF" style={styles.timelineIcon} />
                <View style={styles.timelineTextContainer}>
                  <Text style={styles.timelineStock}>{item.stock}</Text>
                  <Text style={styles.timelineTime}>{item.time}</Text>
                </View>
              </View>
              <Text style={styles.timelineProfit}>{item.profit}</Text>
            </View>
          ))}
        </View>

        {/* View Trade History Button */}
        <TouchableOpacity style={styles.viewHistoryButton}>
          <Text style={styles.viewHistoryText}>View Trade History</Text>
          <Icon name="arrow-right" size={20} color="#FFFFFF" />
        </TouchableOpacity>
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
    marginBottom: SPACING.small,
  },
  subheading: {
    fontSize: SIZES.medium,
    color: COLORS.white,
    opacity: 0.8,
  },
  chartContainer: {
    backgroundColor: '#1A1A1A',
    borderRadius: 15,
    padding: SPACING.small,
    marginBottom: SPACING.large,
    overflow: 'hidden',
  },
  chart: {
    borderRadius: 15,
    paddingRight: 0,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: SPACING.large,
  },
  statCard: {
    backgroundColor: '#1A1A1A',
    borderRadius: 15,
    padding: SPACING.medium,
    width: '48%',
    marginBottom: SPACING.medium,
    alignItems: 'flex-start',
  },
  statIcon: {
    marginBottom: SPACING.small,
  },
  statValue: {
    fontSize: SIZES.large,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: SIZES.small,
    color: COLORS.gray,
  },
  bestTradeCard: {
    backgroundColor: '#1A1A1A',
    borderRadius: 15,
    padding: SPACING.large,
    marginBottom: SPACING.large,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bestTradeLeft: {
    flexDirection: 'column',
  },
  bestTradeStock: {
    fontSize: SIZES.large,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: 4,
  },
  bestTradeLabel: {
    fontSize: SIZES.small,
    color: COLORS.gray,
  },
  bestTradeProfit: {
    fontSize: SIZES.large,
    fontWeight: 'bold',
    color: '#0099FF',
  },
  timelineSection: {
    marginBottom: SPACING.large,
  },
  timelineHeading: {
    fontSize: SIZES.large,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: SPACING.medium,
  },
  timelineItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: SPACING.medium,
    borderBottomWidth: 1,
    borderBottomColor: '#1A1A1A',
  },
  timelineLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timelineIcon: {
    marginRight: SPACING.medium,
  },
  timelineTextContainer: {
    flexDirection: 'column',
  },
  timelineStock: {
    fontSize: SIZES.medium,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  timelineTime: {
    fontSize: SIZES.small,
    color: COLORS.gray,
  },
  timelineProfit: {
    fontSize: SIZES.medium,
    fontWeight: 'bold',
    color: '#0099FF',
  },
  viewHistoryButton: {
    backgroundColor: '#0099FF',
    borderRadius: 30,
    paddingVertical: SPACING.medium,
    paddingHorizontal: SPACING.large,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewHistoryText: {
    color: COLORS.white,
    fontSize: SIZES.medium,
    fontWeight: 'bold',
    marginRight: SPACING.small,
  },
});

export default DailyProfitScreen; 