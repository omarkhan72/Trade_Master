import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import { COLORS, SIZES, SPACING } from '../utils/theme';
import { NavigationProps } from '../types/navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('window');

const ProfileScreen: React.FC<NavigationProps<'Profile'>> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />
      
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Your Trading Journey</Text>
          <Text style={styles.headerSubtitle}>Track Progress & Settings</Text>
        </View>
        
        {/* Profile Section */}
        <View style={styles.profileSection}>
          <View style={styles.profileImageContainer}>
            <View style={styles.profileImage}>
              {/* Placeholder instead of image */}
              <Ionicons name="person" size={50} color="#FFFFFF" />
            </View>
            <View style={styles.badgeContainer}>
              <Text style={styles.badgeText}>7</Text>
            </View>
          </View>
          <Text style={styles.userName}>Alex Thompson</Text>
          <Text style={styles.userLevel}>Beginner Trader</Text>
        </View>
        
        {/* Stats Row 1 */}
        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Ionicons name="stats-chart" size={24} color="#0099FF" style={styles.statIcon} />
            <Text style={styles.statValue}>156</Text>
            <Text style={styles.statLabel}>Total Trades</Text>
          </View>
          
          <View style={styles.statBox}>
            <MaterialCommunityIcons name="chart-line-variant" size={24} color="#0099FF" style={styles.statIcon} />
            <Text style={styles.statValue}>68%</Text>
            <Text style={styles.statLabel}>Win Rate</Text>
          </View>
        </View>
        
        {/* Stats Row 2 */}
        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Ionicons name="wallet-outline" size={24} color="#0099FF" style={styles.statIcon} />
            <Text style={styles.statValue}>+$2,847</Text>
            <Text style={styles.statLabel}>Profit/Loss</Text>
          </View>
          
          <View style={styles.statBox}>
            <MaterialCommunityIcons name="calendar-check" size={24} color="#0099FF" style={styles.statIcon} />
            <Text style={styles.statValue}>45</Text>
            <Text style={styles.statLabel}>Active Days</Text>
          </View>
        </View>
        
        {/* Progress Section */}
        <View style={styles.progressSection}>
          <Text style={styles.sectionTitle}>This Week's Progress</Text>
          <View style={styles.progressBar}>
            <View style={styles.progressFill} />
          </View>
          <Text style={styles.progressText}>5/8 Challenges Complete</Text>
        </View>
        
        {/* Recent Trades Section */}
        <Text style={styles.recentTradesTitle}>Recent Trades</Text>
        
        {/* BTC/USD Trade */}
        <View style={styles.tradeItem}>
          <View style={styles.tradeInfo}>
            <Text style={styles.tradePair}>BTC/USD</Text>
            <Text style={styles.tradeTime}>2h ago</Text>
          </View>
          <View style={styles.tradeProfit}>
            <Text style={styles.profitPositive}>+$342.50</Text>
            <MaterialCommunityIcons name="trending-up" size={16} color="#4CAF50" />
          </View>
        </View>
        
        {/* ETH/USD Trade */}
        <View style={styles.tradeItem}>
          <View style={styles.tradeInfo}>
            <Text style={styles.tradePair}>ETH/USD</Text>
            <Text style={styles.tradeTime}>5h ago</Text>
          </View>
          <View style={styles.tradeProfit}>
            <Text style={styles.profitNegative}>-$89.20</Text>
            <MaterialCommunityIcons name="trending-down" size={16} color="#F44336" />
          </View>
        </View>
        
        {/* SOL/USD Trade */}
        <View style={styles.tradeItem}>
          <View style={styles.tradeInfo}>
            <Text style={styles.tradePair}>SOL/USD</Text>
            <Text style={styles.tradeTime}>8h ago</Text>
          </View>
          <View style={styles.tradeProfit}>
            <Text style={styles.profitPositive}>+$156.75</Text>
            <MaterialCommunityIcons name="trending-up" size={16} color="#4CAF50" />
          </View>
        </View>
        
        {/* Settings Options */}
        <View style={styles.settingsSection}>
          {/* Account Settings */}
          <TouchableOpacity style={styles.settingItem}>
            <Ionicons name="settings" size={22} color="#0099FF" />
            <Text style={styles.settingText}>Account Settings</Text>
            <Ionicons name="chevron-forward" size={22} color="#666" />
          </TouchableOpacity>
          
          {/* Notifications */}
          <TouchableOpacity style={styles.settingItem}>
            <Ionicons name="notifications-outline" size={22} color="#0099FF" />
            <Text style={styles.settingText}>Notifications</Text>
            <Ionicons name="chevron-forward" size={22} color="#666" />
          </TouchableOpacity>
          
          {/* Dark/Light Mode */}
          <TouchableOpacity style={styles.settingItem}>
            <Ionicons name="moon-outline" size={22} color="#0099FF" />
            <Text style={styles.settingText}>Dark/Light Mode</Text>
            <Ionicons name="chevron-forward" size={22} color="#666" />
          </TouchableOpacity>
          
          {/* Security */}
          <TouchableOpacity style={styles.settingItem}>
            <Ionicons name="lock-closed-outline" size={22} color="#0099FF" />
            <Text style={styles.settingText}>Security</Text>
            <Ionicons name="chevron-forward" size={22} color="#666" />
          </TouchableOpacity>
          
          {/* Help & Support */}
          <TouchableOpacity style={styles.settingItem}>
            <Ionicons name="help-circle-outline" size={22} color="#0099FF" />
            <Text style={styles.settingText}>Help & Support</Text>
            <Ionicons name="chevron-forward" size={22} color="#666" />
          </TouchableOpacity>
          
          {/* Subscription Status */}
          <TouchableOpacity style={styles.settingItem}>
            <Ionicons name="card-outline" size={22} color="#0099FF" />
            <Text style={styles.settingText}>Subscription Status</Text>
            <Ionicons name="chevron-forward" size={22} color="#666" />
          </TouchableOpacity>
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
  scrollContent: {
    paddingBottom: 80, // For footer space
  },
  header: {
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 8,
  },
  headerTitle: {
    fontSize: SIZES.xxLarge,
    fontWeight: 'bold',
    color: COLORS.white,
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: SIZES.medium,
    color: COLORS.white,
    opacity: 0.7,
    textAlign: 'center',
  },
  profileSection: {
    alignItems: 'center',
    marginVertical: 16,
  },
  profileImageContainer: {
    position: 'relative',
    marginBottom: 8,
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 3,
    borderColor: '#0099FF',
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: COLORS.background,
  },
  badgeText: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: 'bold',
  },
  userName: {
    fontSize: SIZES.large,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: 4,
  },
  userLevel: {
    fontSize: SIZES.medium,
    color: '#0099FF',
  },
  statsRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  statBox: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  statIcon: {
    marginBottom: 8,
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
  progressSection: {
    backgroundColor: '#1A1A1A',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 16,
  },
  sectionTitle: {
    fontSize: SIZES.medium,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: 16,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#333',
    borderRadius: 4,
    marginBottom: 8,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    width: '62.5%', // 5/8
    backgroundColor: '#0099FF',
    borderRadius: 4,
  },
  progressText: {
    fontSize: SIZES.small,
    color: COLORS.gray,
  },
  recentTradesTitle: {
    fontSize: SIZES.large,
    fontWeight: 'bold',
    color: COLORS.white,
    marginHorizontal: 16,
    marginBottom: 12,
  },
  tradeItem: {
    backgroundColor: '#1A1A1A',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tradeInfo: {
    flex: 1,
  },
  tradePair: {
    fontSize: SIZES.medium,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: 4,
  },
  tradeTime: {
    fontSize: SIZES.small,
    color: COLORS.gray,
  },
  tradeProfit: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profitPositive: {
    fontSize: SIZES.medium,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginRight: 4,
  },
  profitNegative: {
    fontSize: SIZES.medium,
    fontWeight: 'bold',
    color: '#F44336',
    marginRight: 4,
  },
  settingsSection: {
    marginHorizontal: 16,
    marginBottom: 24,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1A1A1A',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  settingText: {
    flex: 1,
    fontSize: SIZES.medium,
    color: COLORS.white,
    marginLeft: 16,
  },
});

export default ProfileScreen; 