import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const AuthButton = ({ title, onPress, isSecondary = false }) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        isSecondary ? styles.secondaryButton : styles.primaryButton
      ]}
      onPress={onPress}
    >
      <Text style={[
        styles.buttonText,
        isSecondary ? styles.secondaryText : styles.primaryText
      ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    padding: 14,
    borderRadius: 5,
    marginVertical: 8,
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: '#00796b',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  primaryText: {
    color: 'white',
  },
  secondaryText: {
    color: '#00796b',
  },
});

export default AuthButton;