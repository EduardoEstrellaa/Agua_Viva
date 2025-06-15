import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import DashboardCard from '../components/DashboardCard';
import AuthButton from '../components/AuthButton';
import { dashboardStyles } from '../styles/dashboardStyles';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
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
        value="75%"
      />

      <DashboardCard
        icon={<Ionicons name="cloud-outline" size={28} color="#00796b" />}
        title="Pronóstico de lluvia"
        value="Moderada en 2 días"
      />

      <DashboardCard
        icon={<Ionicons name="bar-chart-outline" size={28} color="#00796b" />}
        title="Última captación"
        value="350 Litros"
      />

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