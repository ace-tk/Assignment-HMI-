import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const InsightsScreen = () => {
  const categories = [
    'Stability Summary',
    'Cycle Trends',
    'Body & Metabolic Trends',
    'Body Signals',
    'Lifestyle Impact',
  ];

  const stabilityData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        data: [65, 70, 68, 74, 72, 80, 78],
        color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
        strokeWidth: 3,
      },
    ],
  };

  const chartConfig = {
    backgroundColor: '#ffffff',
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(142, 142, 147, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '4',
      strokeWidth: '2',
      stroke: '#007aff',
    },
    propsForBackgroundLines: {
      strokeDasharray: '', // solid background lines
      stroke: '#f2f2f7',
    },
  };

  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.headerTitle}>Insights</Text>
      
      {/* Stability Summary Card */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>Stability Summary</Text>
          <View style={styles.statusLabel}>
            <Text style={styles.statusText}>Stability Improving</Text>
          </View>
        </View>
        
        <Text style={styles.description}>
          Your stability has been consistent and shows positive trends over the last 7 days.
        </Text>
        
        <View style={styles.scoreContainer}>
          <Text style={styles.scoreText}>Stability Score</Text>
          <Text style={styles.scoreValue}>78%</Text>
        </View>
        
        <View style={styles.chartContainer}>
          <LineChart
            data={stabilityData}
            width={screenWidth - 72} // Adjusted for padding
            height={180}
            chartConfig={chartConfig}
            bezier
            style={styles.chartStyle}
            withInnerLines={true}
            withOuterLines={false}
            withVerticalLines={false}
            withHorizontalLines={true}
            fromZero={true}
          />
        </View>
      </View>

      {/* Other Cards */}
      {categories.slice(1).map((category, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.cardTitle}>{category}</Text>
          <View style={styles.placeholder} />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#f5f5f7',
  },
  contentContainer: {
    padding: 16,
    paddingTop: 40,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#1d1d1f',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1d1d1f',
  },
  statusLabel: {
    backgroundColor: '#e8f5e9',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  statusText: {
    fontSize: 12,
    color: '#2e7d32',
    fontWeight: '600',
  },
  description: {
    fontSize: 14,
    color: '#86868b',
    lineHeight: 20,
    marginBottom: 16,
  },
  scoreContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#f2f2f7',
  },
  scoreText: {
    fontSize: 16,
    color: '#1d1d1f',
    fontWeight: '500',
  },
  scoreValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007aff',
  },
  chartContainer: {
    alignItems: 'center',
    marginTop: 8,
    marginHorizontal: -10, // Slight negative margin to allow chart to breathe
  },
  chartStyle: {
    borderRadius: 16,
    paddingRight: 40, // Space for labels
  },
  placeholder: {
    height: 100,
    backgroundColor: '#fafafa',
    borderRadius: 8,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: 12,
    color: '#c7c7cc',
  },
});

export default InsightsScreen;
