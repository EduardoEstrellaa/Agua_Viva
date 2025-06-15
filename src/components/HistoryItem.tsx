import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface HistoryItemProps {
    date: string;
    time: string;
    amount: string;
}

const HistoryItem: React.FC<HistoryItemProps> = ({ date, time, amount }) => {
    return (
        <View style={styles.container}>
            <View style={styles.timeContainer}>
                <Text style={styles.date}>{date}</Text>
                <Text style={styles.time}>{time}</Text>
            </View>
            <Text style={styles.amount}>{amount}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        padding: 16,
        marginBottom: 8,
        borderRadius: 8,
        width: '100%',
    },
    timeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 4,
    },
    date: {
        fontSize: 14,
        color: '#00796b',
        fontWeight: 'bold',
    },
    time: {
        fontSize: 14,
        color: '#00796b',
    },
    amount: {
        fontSize: 14,
        color: '#004d40',
    },
});

export default HistoryItem;