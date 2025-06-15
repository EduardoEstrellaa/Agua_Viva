import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import DashboardCard from '../components/DashboardCard';
import AuthButton from '../components/AuthButton';
import { dashboardStyles } from '../styles/dashboardStyles';
import { Ionicons } from '@expo/vector-icons';
import { fetchThingSpeakData } from '../services/thingspeakService';

const HomeScreen = ({ navigation }) => {
  const [tankData, setTankData] = useState({
    distance: '--',
    temperature: '--',
    humidity: '--',
    waterPercentage: '--',
    lastUpdate: '--'
  });

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchThingSpeakData();
        if (data) {
          setTankData(data);
        }
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };

    loadData();
    const interval = setInterval(loadData, 300000); // Actualizar cada 5 minutos

    return () => clearInterval(interval);
  }, []);

  return (
    <ScrollView contentContainerStyle={dashboardStyles.container}>
      <Text style={dashboardStyles.title}>Bienvenido a AquaViva</Text>
      <Text style={dashboardStyles.subtitle}>Hola 👋</Text>
      <Text style={dashboardStyles.subtitle}>
        Sistema de captación pluvial inteligente
      </Text>

      <Image
        source={{
          uri: 'https://islaurbana.org/wp-content/uploads/2022/09/home-icon-1.gif',
        }}
        style={dashboardStyles.image}
        resizeMode="contain"
      />

      <DashboardCard
        icon={<Ionicons name="water-outline" size={28} color="#00796b" />}
        title="Nivel del tanque"
        value={tankData.waterPercentage}
        showProgress={true} // Solo aquí necesitamos la barra de progreso
      />


      <DashboardCard
        icon={<Ionicons name="thermometer-outline" size={28} color="#00796b" />}
        title="Temperatura"
        value={tankData.temperature}
      // No pasamos showProgress (usará el valor por defecto false)
      />

      <DashboardCard
        icon={<Ionicons name="cloudy-outline" size={28} color="#00796b" />}
        title="Humedad ambiente"
        value={tankData.humidity}
      // No pasamos showProgress (usará el valor por defecto false)
      />

      <Text style={{ marginBottom: 16, color: '#004d40', fontSize: 12 }}>
        Última actualización: {tankData.lastUpdate}
      </Text>

      <AuthButton
        title="Ver Historial"
        onPress={() => navigation.navigate('Historial')}
      />

      <AuthButton
        title="Cerrar sesión"
        onPress={() => navigation.navigate('Login')}
        isSecondary
      />

      <Text style={dashboardStyles.footer}>
        Gracias por cuidar el agua con AquaViva 💧
      </Text>
    </ScrollView>
  );
};

export default HomeScreen;