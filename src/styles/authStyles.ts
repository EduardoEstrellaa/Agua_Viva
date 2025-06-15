import { StyleSheet } from 'react-native';

export const authStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#00796b',
        marginBottom: 8,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 18,
        color: '#004d40',
        marginBottom: 24,
        textAlign: 'center',
    },
    image: {
        width: 220,
        height: 150,
        marginBottom: 32,
    },
});