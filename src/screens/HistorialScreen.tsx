import React from 'react';
import { View, Text, FlatList } from 'react-native';
import HistoryItem from '../components/HistoryItem';
import { historyStyles } from '../styles/historyStyles';

const historyData = [
  { id: '1', fecha: '12 de abril de 2025', cantidad: '350 L' },
  { id: '2', fecha: '10 de abril de 2025', cantidad: '420 L' },
  { id: '3', fecha: '7 de abril de 2025', cantidad: '280 L' },
  { id: '4', fecha: '4 de abril de 2025', cantidad: '310 L' },
  { id: '5', fecha: '1 de abril de 2025', cantidad: '390 L' },
];

const HistoryScreen = () => {
  return (
    <View style={historyStyles.container}>
      <Text style={historyStyles.title}>Historial de captaciones</Text>

      <FlatList
        data={historyData}
        renderItem={({ item }) => (
          <HistoryItem
            date={item.fecha}
            amount={item.cantidad}
          />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={historyStyles.listContent}
      />
    </View>
  );
};

export default HistoryScreen;