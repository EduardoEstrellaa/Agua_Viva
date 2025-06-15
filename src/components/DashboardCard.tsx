import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import WaterLevelBar from './WaterLevelBar';

interface DashboardCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  showProgress?: boolean; // Hacemos esta prop opcional con el ?
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  icon,
  title,
  value,
  showProgress = false // Valor por defecto
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.iconContainer}>
        {icon}
      </View>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardValue}>{value}</Text>
      {showProgress && <WaterLevelBar percentage={value} />}
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
    elevation: 3,
    ...Platform.select({
      web: {
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      },
    }),
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