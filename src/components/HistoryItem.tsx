import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HistoryItem = ({ date, amount }) => {
    return (
        <View style={styles.item}>
            <Ionicons name="rainy-outline" size={24} color="#00796b" />
            <View style={styles.itemContent}>
                <Text style={styles.date}>{date}</Text>
                <Text style={styles.amount}>{amount} captados</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: 16,
        borderRadius: 10,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    itemContent: {
        marginLeft: 12,
    },
    date: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#004d40',
    },
    amount: {
        fontSize: 14,
        color: '#00796b',
        marginTop: 4,
    },
});

export default HistoryItem;