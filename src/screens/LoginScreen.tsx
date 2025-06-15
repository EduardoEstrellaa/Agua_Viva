import React, { useState } from 'react';
import { View, Text, Alert, Image } from 'react-native';
import AuthInput from '../components/AuthInput';
import AuthButton from '../components/AuthButton';
import { authStyles } from '../styles/authStyles';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Atención', 'Completa usuario y contraseña');
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      Alert.alert('✅ Bienvenido');
      navigation.navigate('Home');
      setEmail('');
      setPassword('');
    } catch (error) {
      Alert.alert('❌', 'Credenciales inválidas o error al iniciar sesión');
    }
  };

  return (
    <View style={authStyles.container}>
      <Text style={authStyles.title}>Bienvenido a AquaViva</Text>
      <Text style={authStyles.subtitle}>Iniciar Sesión</Text>
      
      <Image
        source={{ uri: 'https://islaurbana.org/wp-content/uploads/2022/09/home-icon-1.gif' }}
        style={authStyles.image}
        resizeMode="contain"
      />

      <AuthInput
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <AuthInput
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <AuthButton title="Ingresar" onPress={handleLogin} />

      <AuthButton
        title="¿No tienes cuenta? Regístrate"
        onPress={() => navigation.navigate('Register')}
        isSecondary
      />
    </View>
  );
};

export default LoginScreen;