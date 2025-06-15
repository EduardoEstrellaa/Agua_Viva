import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const AuthInput = ({
    placeholder,
    value,
    onChangeText,
    secureTextEntry = false,
    keyboardType = 'default'
}) => {
    return (
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        width: '100%',
        padding: 12,
        borderWidth: 1,
        borderColor: '#ccc',
        marginVertical: 8,
        borderRadius: 5,
        backgroundColor: '#fff',
    },
});

export default AuthInput;