import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">
        Home
      </Text>

      <Text style={styles.subtitle}>
        You are successfully logged in 
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEE6FA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subtitle: {
    marginTop: 12,
    color: '#6B7280',
  },
});
