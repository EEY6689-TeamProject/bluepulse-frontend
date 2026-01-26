import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Surface, Text, TextInput } from 'react-native-paper';

export default function ForgotPasswordScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Surface style={styles.card} elevation={3}>
        <Text style={styles.title}>Reset Password</Text>

        <Text style={styles.subtitle}>
          Enter your email to receive a password reset link.
        </Text>

        <TextInput
          label="Email"
          mode="outlined"
          style={styles.input}
          outlineStyle={styles.outline}
        />

        <Button
          mode="contained"
          style={styles.button}
          contentStyle={styles.buttonContent}
        >
          Send Reset Link
        </Button>

        <Text style={styles.footer}>
          Remembered your password?{' '}
          <Text style={styles.link} onPress={() => router.push('/login')}>
            Login
          </Text>
        </Text>
      </Surface>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEE6FA',
    justifyContent: 'center',
    padding: 24,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
  },

  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1C1C5A',
    marginBottom: 50,
    textAlign: 'center',
  },

  subtitle: {
    textAlign: 'center',
    fontSize: 15,
    color: '#6B7280',
    marginBottom: 20,
  },

  input: {
    marginBottom: 16,
    backgroundColor: '#B9BDF7',
  },

  outline: {
    borderRadius: 12,
    borderColor: 'transparent',
  },

  button: {
    borderRadius: 24,
    backgroundColor: '#1C1C5A',
  },

  buttonContent: {
    height: 46,
  },

  footer: {
    marginTop: 14,
    textAlign: 'center',
    fontSize: 12,
    color: '#6B7280',
  },

  link: {
    color: '#1C1C5A',
    fontWeight: '600',
  },
});
