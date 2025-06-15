import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DashboardCard = ({ icon, title, value }) => {
  return (
    <View style={styles.card}>
      <View style={styles.iconContainer}>
        {icon}
      </View>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardValue}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    width: '100%',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  iconContainer: {
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 16,
    color: '#00796b',
    marginBottom: 4,
  },
  cardValue: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#004d40',
  },
});

export default DashboardCard;