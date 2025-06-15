import React, { useState } from 'react';
import { View, Text, Alert, Image } from 'react-native';
import AuthInput from '../components/AuthInput';
import AuthButton from '../components/AuthButton';
import { authStyles } from '../styles/authStyles';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {
    if (!email || !password || !confirmPassword) {
      Alert.alert('Atención', 'Completa todos los campos');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Las contraseñas no coinciden');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert('✅ Registro exitoso');
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert('❌', 'No se pudo registrar el usuario');
    }
  };

  return (
    <View style={authStyles.container}>
      <Text style={authStyles.title}>Registrarse</Text>
      
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

      <AuthInput
        placeholder="Confirmar contraseña"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />

      <AuthButton title="Registrar" onPress={handleRegister} />

      <AuthButton
        title="¿Ya tienes cuenta? Inicia sesión"
        onPress={() => navigation.navigate('Login')}
        isSecondary
      />
    </View>
  );
};

export default RegisterScreen;