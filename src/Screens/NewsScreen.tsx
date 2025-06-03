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

const { width } = Dimensions.get('window');

const NewsScreen: React.FC<NavigationProps<'News'>> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Latest News</Text>
        <Text style={styles.headerSubtitle}>Stay Ahead with Market Updates</Text>
      </View>
      
      <ScrollView 
        style={styles.scrollView} 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Main News with Chart */}
        <View style={styles.mainNewsContainer}>
          <Image 
            source={require('../Assets/Images/latestnews.jpg')}
            style={styles.chartBackground}
            resizeMode="cover"
          />
          
          <View style={styles.liveIndicator}>
            <Icon name="bar-chart-2" size={16} color="#0099FF" />
            <Text style={styles.liveText}>Live Market Analysis</Text>
          </View>
          
          <Text style={styles.mainNewsTitle}>Global Markets Surge on Tech Rally</Text>
          <Text style={styles.mainNewsDescription}>
            Major indices reach new highs as technology sector leads gains
          </Text>
        </View>
        
        {/* News Card 1 */}
        <View style={styles.newsCard}>
          <View style={styles.newsCardContent}>
            <Text style={styles.newsCardTitle}>Fed Signals Potential Ra...</Text>
            
            <View style={styles.newsTimeContainer}>
              <Icon name="clock" size={14} color={COLORS.gray} />
              <Text style={styles.newsTime}>2h ago</Text>
            </View>
            
            <Text style={styles.newsDescription}>
              Federal Reserve hints at possible interest rate reductions in the coming year
            </Text>
            
            <View style={styles.newsTagsContainer}>
              <View style={styles.tagPill}>
                <Text style={styles.tagText}>Bullish for Bonds</Text>
              </View>
              <TouchableOpacity style={styles.readMoreButton}>
                <Text style={styles.readMoreText}>Read More</Text>
              </TouchableOpacity>
            </View>
          </View>
          
          <Image 
            source={require('../Assets/Images/latestfed.png')}
            style={styles.newsCardImage}
          />
        </View>
        
        {/* News Card 2 */}
        <View style={styles.newsCard}>
          <View style={styles.newsCardContent}>
            <Text style={styles.newsCardTitle}>Tech Stocks Rally Amid...</Text>
            
            <View style={styles.newsTimeContainer}>
              <Icon name="clock" size={14} color={COLORS.gray} />
              <Text style={styles.newsTime}>4h ago</Text>
            </View>
            
            <Text style={styles.newsDescription}>
              Major technology companies surge as AI developments gain traction
            </Text>
            
            <View style={styles.newsTagsContainer}>
              <View style={[styles.tagPill, styles.techPill]}>
                <Text style={styles.tagText}>Bullish for Tech ETFs</Text>
              </View>
              <TouchableOpacity style={styles.readMoreButton}>
                <Text style={styles.readMoreText}>Read More</Text>
              </TouchableOpacity>
            </View>
          </View>
          
          <Image 
            source={require('../Assets/Images/latesttech.png')}
            style={styles.newsCardImage}
          />
        </View>
        
        {/* News Card 3 */}
        <View style={styles.newsCard}>
          <View style={styles.newsCardContent}>
            <Text style={styles.newsCardTitle}>Global Markets Respo...</Text>
            
            <View style={styles.newsTimeContainer}>
              <Icon name="clock" size={14} color={COLORS.gray} />
              <Text style={styles.newsTime}>6h ago</Text>
            </View>
            
            <Text style={styles.newsDescription}>
              International markets react to latest economic indicators
            </Text>
            
            <View style={styles.newsTagsContainer}>
              <View style={[styles.tagPill, styles.mixedSignalPill]}>
                <Text style={styles.tagText}>Mixed Signals</Text>
              </View>
              <TouchableOpacity style={styles.readMoreButton}>
                <Text style={styles.readMoreText}>Read More</Text>
              </TouchableOpacity>
            </View>
          </View>
          
          <Image 
            source={require('../Assets/Images/global.png')}
            style={styles.newsCardImage}
          />
        </View>
        
        {/* AI Market Analysis */}
        <View style={styles.aiAnalysisContainer}>
          <View style={styles.aiIconContainer}>
            <Icon name="cpu" size={18} color="#FF4C79" />
          </View>
          <View style={styles.aiContent}>
            <Text style={styles.aiTitle}>AI Market Analysis</Text>
            <Text style={styles.aiDescription}>
              Based on current market trends and historical data, AI suggests a potential upward movement in tech sector ETFs over the next 24-48 hours.
            </Text>
          </View>
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
  header: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 15,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 15,
    color: COLORS.gray,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20, // Reduced padding since we removed the tab bar
  },
  mainNewsContainer: {
    height: 220,
    position: 'relative',
    backgroundColor: '#000',
  },
  chartBackground: {
    width: '100%',
    height: '100%',
    opacity: 0.8,
  },
  liveIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 20,
    left: 20,
  },
  liveText: {
    color: '#0099FF',
    fontSize: 13,
    fontWeight: 'bold',
    marginLeft: 6,
  },
  mainNewsTitle: {
    position: 'absolute',
    bottom: 40,
    left: 20,
    right: 20,
    color: COLORS.white,
    fontSize: 22,
    fontWeight: 'bold',
  },
  mainNewsDescription: {
    position: 'absolute',
    bottom: 15,
    left: 20,
    right: 20,
    color: COLORS.gray,
    fontSize: 13,
  },
  newsCard: {
    backgroundColor: '#1A1A1A',
    borderRadius: 8,
    marginHorizontal: 20,
    marginTop: 15,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  newsCardContent: {
    flex: 1,
    padding: 15,
  },
  newsCardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: 8,
  },
  newsTimeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  newsTime: {
    fontSize: 11,
    color: COLORS.gray,
    marginLeft: 5,
  },
  newsDescription: {
    fontSize: 13,
    color: COLORS.gray,
    marginBottom: 12,
    lineHeight: 18,
  },
  newsTagsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tagPill: {
    backgroundColor: '#FF4C79',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  techPill: {
    backgroundColor: '#FF4C79',
  },
  mixedSignalPill: {
    backgroundColor: '#FF9800',
  },
  tagText: {
    color: COLORS.white,
    fontSize: 11,
    fontWeight: 'bold',
  },
  readMoreButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  readMoreText: {
    color: '#0099FF',
    fontSize: 13,
    fontWeight: 'bold',
  },
  newsCardImage: {
    width: 100,
    height: '100%',
  },
  aiAnalysisContainer: {
    backgroundColor: 'rgba(255, 76, 121, 0.1)',
    borderRadius: 8,
    padding: 15,
    marginHorizontal: 20,
    marginTop: 15,
    marginBottom: 20,
    flexDirection: 'row',
    borderLeftWidth: 3,
    borderLeftColor: '#FF4C79',
  },
  aiIconContainer: {
    marginRight: 12,
    marginTop: 2,
  },
  aiContent: {
    flex: 1,
  },
  aiTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: 6,
  },
  aiDescription: {
    fontSize: 13,
    color: COLORS.gray,
    lineHeight: 18,
  },
});

export default NewsScreen;