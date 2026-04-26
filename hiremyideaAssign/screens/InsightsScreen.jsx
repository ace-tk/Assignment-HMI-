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
      
      {categories.map((category, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.cardTitle}>{category}</Text>
          {/* Placeholder for future charts/content */}
          <View style={styles.placeholder} />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#f5f5f7', // Light gray background to make white cards pop
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
    // Add subtle shadow for premium feel
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1d1d1f',
    marginBottom: 12,
  },
  placeholder: {
    height: 100, // Empty space for future content
    backgroundColor: '#fafafa',
    borderRadius: 8,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
});

export default InsightsScreen;
