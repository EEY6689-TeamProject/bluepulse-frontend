import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Button, Menu, Text, TextInput } from 'react-native-paper';

export default function LoginScreen() {
  const router = useRouter();

  const [language, setLanguage] = useState('English');
  const [role, setRole] = useState('Farmer');
  const [langMenuVisible, setLangMenuVisible] = useState(false);
  const [roleMenuVisible, setRoleMenuVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/blue-pulse-logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Language Dropdown */}
      <Menu
        visible={langMenuVisible}
        onDismiss={() => setLangMenuVisible(false)}
        anchor={
          <TextInput
            label="Language"
            value={language}
            mode="outlined"
            editable={false}
            style={styles.input}
            outlineStyle={styles.outline}
            right={
              <TextInput.Icon
                icon="chevron-down"
                onPress={() => setLangMenuVisible(true)}
              />
            }
            onPressIn={() => setLangMenuVisible(true)}
          />
        }
      >
        <Menu.Item title="English" onPress={() => { setLanguage('English'); setLangMenuVisible(false); }} />
        <Menu.Item title="Sinhala" onPress={() => { setLanguage('Sinhala'); setLangMenuVisible(false); }} />
        <Menu.Item title="Tamil" onPress={() => { setLanguage('Tamil'); setLangMenuVisible(false); }} />
      </Menu>

      {/* Role Dropdown */}
      <Menu
        visible={roleMenuVisible}
        onDismiss={() => setRoleMenuVisible(false)}
        anchor={
          <TextInput
            label="Role"
            value={role}
            mode="outlined"
            editable={false}
            style={styles.input}
            outlineStyle={styles.outline}
            right={
              <TextInput.Icon
                icon="chevron-down"
                onPress={() => setRoleMenuVisible(true)}
              />
            }
            onPressIn={() => setRoleMenuVisible(true)}
          />
        }
      >
        <Menu.Item title="Farmer" onPress={() => { setRole('Farmer'); setRoleMenuVisible(false); }} />
        <Menu.Item title="Buyer" onPress={() => { setRole('Buyer'); setRoleMenuVisible(false); }} />
        <Menu.Item title="Admin" onPress={() => { setRole('Admin'); setRoleMenuVisible(false); }} />
      </Menu>

      <View style={styles.sectionGap} />

      {/* Email / Username */}
      <TextInput
        label="Email or Username"
        mode="outlined"
        style={styles.input}
        outlineStyle={styles.outline}
      />

      {/* Password */}
      <TextInput
        label="Password"
        mode="outlined"
        secureTextEntry
        style={styles.input}
        outlineStyle={styles.outline}
      />

      <Text style={styles.forgot} onPress={() => router.push('/forgot-password')}>
        Forgot Password?
      </Text>

      <Button
        mode="contained"
        style={styles.button}
        contentStyle={styles.buttonContent}
        onPress={() => router.replace('/(tabs)')}
      >
        Login
      </Button>

      <Text style={styles.footer}>
        Don’t have an account?{' '}
        <Text style={styles.link} onPress={() => router.push('/register')}>
          Sign Up
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEE6FA',
    padding: 24,
    justifyContent: 'center',
  },

  logo: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 20,
  },

  input: {
    marginBottom: 14,
    backgroundColor: '#B9BDF7', // lavender fill
  },

  outline: {
    borderRadius: 12,
    borderColor: 'transparent',
  },

  forgot: {
    color: '#2D2A7A',
    textAlign: 'right',
    marginBottom: 20,
    fontSize: 13,
  },

  button: {
    borderRadius: 24,
    backgroundColor: '#1C1C5A',
  },

  buttonContent: {
    height: 48,
  },

  footer: {
    textAlign: 'center',
    marginTop: 16,
    fontSize: 13,
    color: '#4B5563',
  },

  link: {
    color: '#1C1C5A',
    fontWeight: '600',
  },
  sectionGap: {
    height: 50, // 
  },

});
