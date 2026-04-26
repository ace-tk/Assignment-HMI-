import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';

const InsightsScreen = () => {
  const categories = [
    'Stability Summary',
    'Cycle Trends',
    'Body & Metabolic Trends',
    'Body Signals',
    'Lifestyle Impact',
  ];

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
        
        <View style={[styles.placeholder, { height: 120 }]}>
          <Text style={styles.placeholderText}>[ Stability Chart Placeholder ]</Text>
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
