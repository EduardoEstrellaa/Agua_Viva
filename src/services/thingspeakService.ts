// src/services/thingspeakService.ts

interface ThingSpeakData {
    distance: string;
    temperature: string;
    humidity: string;
    waterPercentage: string;
    lastUpdate: string;
}

interface HistoryItem {
    id: string;
    date: string;
    time: string;
    distance: string;
    temperature: string;
    humidity: string;
    waterPercentage: string;
}

// Función para obtener los datos actuales
export const fetchThingSpeakData = async (): Promise<ThingSpeakData | null> => {
    try {
        const channelId = '2990008';
        const apiKey = 'NEN08BX8S4F7DDZD';
        const url = `https://api.thingspeak.com/channels/${channelId}/feeds.json?api_key=${apiKey}&results=1`;

        const response = await fetch(url);
        const data = await response.json();

        if (data.feeds && data.feeds.length > 0) {
            const latest = data.feeds[0];
            return {
                distance: `${latest.field1} cm`,
                temperature: `${latest.field2}°C`,
                humidity: `${latest.field3}%`,
                waterPercentage: `${latest.field4}%`,
                lastUpdate: new Date(latest.created_at).toLocaleTimeString('es-MX', {
                    hour: '2-digit',
                    minute: '2-digit'
                })
            };
        }
        return null;
    } catch (error) {
        console.error('Error fetching ThingSpeak data:', error);
        return null;
    }
};

// Función para obtener el historial
export const fetchThingSpeakHistory = async (results = 15): Promise<HistoryItem[]> => {
    try {
        const channelId = '2990008';
        const apiKey = 'NEN08BX8S4F7DDZD';
        const url = `https://api.thingspeak.com/channels/${channelId}/feeds.json?api_key=${apiKey}&results=${results}`;

        const response = await fetch(url);
        const data = await response.json();

        if (data.feeds) {
            // Invertimos el orden para que los más recientes aparezcan primero
            return data.feeds.reverse().map((feed: any) => ({
                id: feed.entry_id.toString(),
                date: new Date(feed.created_at).toLocaleDateString('es-MX', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                }),
                time: new Date(feed.created_at).toLocaleTimeString('es-MX', {
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit'
                }),
                distance: `${feed.field1} cm`,
                temperature: `${feed.field2}°C`,
                humidity: `${feed.field3}%`,
                waterPercentage: `${feed.field4}%`
            }));
        }
        return [];
    } catch (error) {
        console.error('Error fetching ThingSpeak history:', error);
        return [];
    }
};