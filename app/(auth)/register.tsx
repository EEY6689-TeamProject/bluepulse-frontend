import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Menu, Text, TextInput } from 'react-native-paper';



export default function RegisterScreen() {
  const router = useRouter();
  const [userType, setUserType] = useState('');
  const [menuVisible, setMenuVisible] = useState(false);


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Create Account</Text>

      <TextInput
        label="Full Name"
        mode="outlined"
        style={styles.input}
        outlineStyle={styles.outline}
      />

      <TextInput
        label="Email"
        mode="outlined"
        style={styles.input}
        outlineStyle={styles.outline}
      />

      <TextInput
        label="Phone Number"
        mode="outlined"
        style={styles.input}
        outlineStyle={styles.outline}
      />

      <TextInput
        label="Password"
        mode="outlined"
        secureTextEntry
        style={styles.input}
        outlineStyle={styles.outline}
      />

      <TextInput
        label="Confirm Password"
        mode="outlined"
        secureTextEntry
        style={styles.input}
        outlineStyle={styles.outline}
      />

      {/* User Type (dropdown look) */}
      <View>
        <Menu
          visible={menuVisible}
          onDismiss={() => setMenuVisible(false)}
          anchor={
            <TextInput
              label="User Type"
              value={userType}
              mode="outlined"
              editable={false}
              style={styles.input}
              outlineStyle={styles.outline}
              right={
                <TextInput.Icon
                  icon="chevron-down"
                  onPress={() => setMenuVisible(true)}
                />
              }
              onPressIn={() => setMenuVisible(true)}
            />
          }
        >
          <Menu.Item
            onPress={() => {
              setUserType('Farmer');
              setMenuVisible(false);
            }}
            title="Farmer"
          />
          <Menu.Item
            onPress={() => {
              setUserType('Buyer');
              setMenuVisible(false);
            }}
            title="Buyer"
          />
          <Menu.Item
            onPress={() => {
              setUserType('Admin');
              setMenuVisible(false);
            }}
            title="Admin"
          />
        </Menu>
      </View>


      <Button
        mode="contained"
        style={styles.button}
        onPress={() => router.push('/login')}
      >
        Register
      </Button>

      <Text style={styles.footer}>
        Already have an account?{' '}
        <Text style={styles.link} onPress={() => router.push('/login')}>
          Login
        </Text>
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#DEE6FA',
    padding: 24,
    justifyContent: 'center',
  },

  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1C1C5A',
    marginBottom: 20,
    textAlign: 'center',
  },

  input: {
    marginBottom: 14,
    backgroundColor: '#B9BDF7', // lavender fill like UI
  },

  outline: {
    borderRadius: 12,
    borderColor: 'transparent',
  },

  button: {
    marginTop: 16,
    borderRadius: 24,
    backgroundColor: '#1C1C5A',
  },

  buttonContent: {
    height: 48,
  },

  footer: {
    marginTop: 16,
    textAlign: 'center',
    color: '#4B5563',
    fontSize: 13,
  },

  link: {
    color: '#1C1C5A',
    fontWeight: '600',
  },
});
