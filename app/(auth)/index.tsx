import { useRouter } from 'expo-router';
import { Image, StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.greet}>WELCOME!</Text>
      
      <Image
        source={require('../../assets/images/blue-pulse-logo.png')}
        style={styles.logo}
      />

      <Text style={styles.subtitle}>
        We’re glad you’re here, let’s get started
      </Text>

      <Button
        mode="contained"
        style={styles.primaryBtn}
        onPress={() => router.push('/login')}
      >
        Login
      </Button>

      <Button
        mode="contained"
        style={styles.secondaryBtn}
        onPress={() => router.push('/register')}
      >
        Register
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEE6FA',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  logo: {
    width: 360,
    height: 360,
    marginBottom: 24,
  },
  greet: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#2D2A7A',
    marginTop: 50,
    marginBottom: 0,
  },
  subtitle: {
    fontSize: 15,
    color: '#2D2A7A',
    marginBottom: 50,
  },
  primaryBtn: {
    width: '80%',
    borderRadius: 24,
    marginBottom: 20,
  },
  secondaryBtn: {
    width: '80%',
    borderRadius: 24,
  },
});
