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
  Image,
} from 'react-native';
import { COLORS, SIZES, SPACING } from '../utils/theme';
import { NavigationProps } from '../types/navigation';
import Icon from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const { width, height } = Dimensions.get('window');

const HomeScreen: React.FC<NavigationProps<'Home'>> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />
      
      <ScrollView 
        style={styles.scrollView} 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Welcome Header */}
        <View style={styles.welcomeHeader}>
          <Text style={styles.welcomeText}>Welcome Back, Alex</Text>
          <Text style={styles.subHeaderText}>Your Trading Hub</Text>
        </View>

        {/* Balance Card */}
        <View style={styles.balanceCard}>
          <Text style={styles.balanceLabel}>Total Balance</Text>
          <Text style={styles.balanceAmount}>$100,000</Text>
          
          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statLabel}>Win Rate</Text>
              <Text style={styles.winRateValue}>68%</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statLabel}>Total Trades</Text>
              <Text style={styles.statValue}>25</Text>
            </View>
          </View>
        </View>

        {/* Quick Stats Cards */}
        <View style={styles.quickStatsContainer}>
          {/* Daily Profit */}
          <TouchableOpacity 
            style={styles.statCard}
            onPress={() => navigation?.navigate('DailyProfit')}
            activeOpacity={0.7}
          >
            <Icon name="trending-up" size={24} color="#0099FF" style={styles.statIcon} />
            <Text style={styles.statCardLabel}>Daily Profit</Text>
            <Text style={styles.profitValue}>+$520</Text>
          </TouchableOpacity>

          {/* Open Positions */}
          <TouchableOpacity 
            style={styles.statCard}
            onPress={() => navigation?.navigate('OpenPositions')}
            activeOpacity={0.7}
          >
            <Icon name="bar-chart-2" size={24} color="#0099FF" style={styles.statIcon} />
            <Text style={styles.statCardLabel}>Open Positions</Text>
            <Text style={styles.statValue}>3</Text>
          </TouchableOpacity>

          {/* Available Cash */}
          <TouchableOpacity 
            style={styles.statCard}
            onPress={() => navigation?.navigate('CashManagement')}
            activeOpacity={0.7}
          >
            <Icon name="credit-card" size={24} color="#0099FF" style={styles.statIcon} />
            <Text style={styles.statCardLabel}>Available Cash</Text>
            <Text style={styles.statValue}>$45,230</Text>
          </TouchableOpacity>
        </View>

        {/* Top Movers Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Top Movers</Text>
          
          <View style={styles.moversContainer}>
            {/* AAPL */}
            <TouchableOpacity 
              style={styles.moverCard}
              onPress={() => navigation?.navigate('TopMovers')}
              activeOpacity={0.7}
            >
              <Text style={styles.stockSymbol}>AAPL</Text>
              <Text style={styles.stockPercentGain}>+3.2%</Text>
              <Text style={styles.stockPrice}>$182.89</Text>
            </TouchableOpacity>
            
            {/* BTC */}
            <TouchableOpacity 
              style={styles.moverCard}
              onPress={() => navigation?.navigate('TopMovers')}
              activeOpacity={0.7}
            >
              <Text style={styles.stockSymbol}>BTC</Text>
              <Text style={styles.stockPercentLoss}>-1.1%</Text>
              <Text style={styles.stockPrice}>$43,250</Text>
            </TouchableOpacity>
            
            {/* TSLA */}
            <TouchableOpacity 
              style={styles.moverCard}
              onPress={() => navigation?.navigate('TopMovers')}
              activeOpacity={0.7}
            >
              <Text style={styles.stockSymbol}>TSLA</Text>
              <Text style={styles.stockPercentGain}>+2.8%</Text>
              <Text style={styles.stockPrice}>$248.50</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Learning Progress */}
        <View style={styles.sectionContainer}>
          <View style={styles.progressHeader}>
            <Text style={styles.sectionTitle}>Learning Progress</Text>
            <Text style={styles.progressCount}>5/50 Lessons</Text>
          </View>
          
          <View style={styles.progressBarContainer}>
            <View style={styles.progressBar}>
              <View style={styles.progressFill} />
            </View>
          </View>
        </View>

        {/* Latest News */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Latest News</Text>
          
          {/* News Item 1 */}
          <TouchableOpacity 
            style={styles.newsItem}
            onPress={() => navigation.navigate('News')}
            activeOpacity={0.7}
          >
            <Image 
              source={require('../Assets/Images/FRAME.png')} 
              style={styles.newsImage}
            />
            <View style={styles.newsContent}>
              <Text style={styles.newsTitle}>Fed Signals Potential Rate Cuts in 2024</Text>
              <Text style={styles.newsTime}>2h ago</Text>
            </View>
          </TouchableOpacity>
          
          {/* News Item 2 */}
          <TouchableOpacity 
            style={styles.newsItem}
            onPress={() => navigation.navigate('News')}
            activeOpacity={0.7}
          >
            <Image 
              source={require('../Assets/Images/frame2.png')} 
              style={styles.newsImage}
            />
            <View style={styles.newsContent}>
              <Text style={styles.newsTitle}>Tech Stocks Rally Amid AI Breakthroughs</Text>
              <Text style={styles.newsTime}>4h ago</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Action Buttons */}
        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>Start Trading</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>Continue Learning</Text>
        </TouchableOpacity>
        
        {/* Extra space at bottom for tab bar */}
        <View style={styles.bottomSpace} />
      </ScrollView>

      {/* Footer Navigation */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerTabActive}>
          <Ionicons name="home" size={24} color="#0099FF" />
          <Text style={styles.footerTabTextActive}>Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.footerTab}
          onPress={() => navigation.navigate('LearnToTrade')}
        >
          <Ionicons name="book-outline" size={24} color="#666" />
          <Text style={styles.footerTabText}>Learn</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.footerTab}
          onPress={() => navigation.navigate('TradeSimulator')}
        >
          <MaterialCommunityIcons name="chart-line" size={24} color="#666" />
          <Text style={styles.footerTabText}>Practice</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.footerTab}
          onPress={() => navigation.navigate('Profile')}
        >
          <Ionicons name="person-outline" size={24} color="#666" />
          <Text style={styles.footerTabText}>Profile</Text>
        </TouchableOpacity>
      </View>
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
  },
  welcomeHeader: {
    marginBottom: SPACING.large,
  },
  welcomeText: {
    fontSize: SIZES.xxLarge,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: 4,
  },
  subHeaderText: {
    fontSize: SIZES.medium,
    color: COLORS.gray,
  },
  balanceCard: {
    backgroundColor: '#1A1A1A',
    borderRadius: 15,
    padding: SPACING.large,
    marginBottom: SPACING.large,
  },
  balanceLabel: {
    fontSize: SIZES.medium,
    color: COLORS.white,
    marginBottom: 8,
  },
  balanceAmount: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    flexDirection: 'column',
  },
  statLabel: {
    fontSize: SIZES.small,
    color: COLORS.gray,
    marginBottom: 4,
  },
  winRateValue: {
    fontSize: SIZES.large,
    fontWeight: 'bold',
    color: '#4CAF50', // Green color for win rate
  },
  statValue: {
    fontSize: SIZES.large,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  quickStatsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SPACING.large,
  },
  statCard: {
    backgroundColor: '#1A1A1A',
    borderRadius: 15,
    padding: SPACING.medium,
    width: '31%',
    alignItems: 'center',
  },
  statIcon: {
    marginBottom: 8,
  },
  statCardLabel: {
    fontSize: SIZES.xSmall,
    color: COLORS.gray,
    marginBottom: 4,
    textAlign: 'center',
  },
  profitValue: {
    fontSize: SIZES.medium,
    fontWeight: 'bold',
    color: '#4CAF50', // Green color for profit
  },
  sectionContainer: {
    marginBottom: SPACING.large,
  },
  sectionTitle: {
    fontSize: SIZES.large,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: SPACING.medium,
  },
  moversContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  moverCard: {
    backgroundColor: '#1A1A1A',
    borderRadius: 15,
    padding: SPACING.medium,
    width: '31%',
    alignItems: 'center',
  },
  stockSymbol: {
    fontSize: SIZES.medium,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: 4,
  },
  stockPercentGain: {
    fontSize: SIZES.small,
    color: '#4CAF50', // Green color for gains
    marginBottom: 4,
  },
  stockPercentLoss: {
    fontSize: SIZES.small,
    color: '#FF4C79', // Red color for losses
    marginBottom: 4,
  },
  stockPrice: {
    fontSize: SIZES.small,
    color: COLORS.white,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.small,
  },
  progressCount: {
    fontSize: SIZES.small,
    color: COLORS.gray,
  },
  progressBarContainer: {
    height: 8,
    backgroundColor: '#1A1A1A',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    width: '100%',
  },
  progressFill: {
    height: '100%',
    width: '10%', // 5/50 = 10%
    backgroundColor: COLORS.primary,
    borderRadius: 4,
  },
  newsItem: {
    backgroundColor: '#1A1A1A',
    borderRadius: 15,
    marginBottom: SPACING.medium,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  newsImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    margin: SPACING.small,
  },
  newsContent: {
    flex: 1,
    padding: SPACING.medium,
    justifyContent: 'center',
  },
  newsTitle: {
    fontSize: SIZES.small,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: 8,
  },
  newsTime: {
    fontSize: SIZES.xSmall,
    color: COLORS.gray,
  },
  primaryButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 30,
    paddingVertical: SPACING.medium,
    alignItems: 'center',
    marginBottom: SPACING.medium,
  },
  primaryButtonText: {
    color: COLORS.white,
    fontSize: SIZES.medium,
    fontWeight: 'bold',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 30,
    paddingVertical: SPACING.medium,
    alignItems: 'center',
    marginBottom: SPACING.large,
  },
  secondaryButtonText: {
    color: COLORS.white,
    fontSize: SIZES.medium,
    fontWeight: 'bold',
  },
  bottomSpace: {
    height: 60, // Height of the tab bar
  },
  footer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#111',
    borderTopWidth: 1,
    borderTopColor: '#222',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  footerTab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerTabActive: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerTabText: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  footerTabTextActive: {
    fontSize: 12,
    color: '#0099FF',
    marginTop: 4,
  },
});

export default HomeScreen; 