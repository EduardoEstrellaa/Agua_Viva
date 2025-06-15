import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import HistoryItem from '../components/HistoryItem';
import { historyStyles } from '../styles/historyStyles';
import { fetchThingSpeakHistory } from '../services/thingspeakService';

const HistoryScreen = () => {
  const [historyData, setHistoryData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadHistory = async () => {
      try {
        setLoading(true);
        const data = await fetchThingSpeakHistory(15);
        setHistoryData(data);
      } catch (error) {
        console.error('Error loading history:', error);
      } finally {
        setLoading(false);
      }
    };

    loadHistory();
  }, []);

  return (
    <View style={historyStyles.container}>
      <Text style={historyStyles.title}>Historial de mediciones</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#00796b" style={{ marginTop: 20 }} />
      ) : historyData.length === 0 ? (
        <Text style={{ textAlign: 'center', marginTop: 20, color: '#004d40' }}>
          No hay datos históricos disponibles
        </Text>
      ) : (
        <FlatList
          data={historyData}
          renderItem={({ item }) => (
            <HistoryItem
              date={item.date}
              time={item.time}
              amount={`Nivel: ${item.waterPercentage} | Dist: ${item.distance} | Temp: ${item.temperature} | Hum: ${item.humidity}`}
            />
          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={historyStyles.listContent}
        />
      )}
    </View>
  );
};

export default HistoryScreen;