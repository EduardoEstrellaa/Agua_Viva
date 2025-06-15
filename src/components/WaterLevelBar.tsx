import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

interface WaterLevelBarProps {
    percentage: string;
}

const WaterLevelBar: React.FC<WaterLevelBarProps> = ({ percentage }) => {
    const numericPercentage = percentage === '--' ? 0 : parseFloat(percentage);
    const progressWidth = (Dimensions.get('window').width * 0.8 * Math.min(100, Math.max(0, numericPercentage))) / 100;

    return (
        <View style={styles.container}>
            <View style={styles.progressContainer}>
                <View style={[styles.progressBar, { width: progressWidth }]} />
            </View>
            <Text style={styles.percentageText}>{percentage}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '80%',
        alignSelf: 'center',
        marginTop: 8,
    },
    progressContainer: {
        height: 20,
        width: '100%',
        backgroundColor: '#e0f2f1',
        borderRadius: 10,
        overflow: 'hidden',
    },
    progressBar: {
        height: '100%',
        backgroundColor: '#00796b',
        borderRadius: 10,
    },
    percentageText: {
        textAlign: 'center',
        marginTop: 4,
        fontSize: 14,
        color: '#004d40',
        fontWeight: 'bold',
    },
});

export default WaterLevelBar;