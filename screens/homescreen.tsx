import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 


const navigation = useNavigation<any>();

const homescreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo.png')} // make sure your logo is in /assets folder
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.welcomeText}>Welcome to Empowering the Nation</Text>

      <TouchableOpacity style={styles.fancyButton} onPress={() => navigation.navigate('sixmonthscreen')}>
  <Text style={styles.buttonText}>6 Month Course</Text>
</TouchableOpacity>

<TouchableOpacity
  style={styles.button}
  onPress={() => navigation.navigate('SixWeekCourses')}
>
  <Text style={styles.buttonText}>6 Week Course</Text>
</TouchableOpacity>
    </View>
  );
};

export default homescreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f0f4ff',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    logo: {
      width: 150,
      height: 150,
      marginBottom: 30,
    },
    welcomeText: {
      fontSize: 24,
      fontWeight: '600',
      marginBottom: 40,
      textAlign: 'center',
      color: '#333',
    },
    fancyButton: {
      backgroundColor: '#4a90e2',
      paddingVertical: 14,
      paddingHorizontal: 25,
      borderRadius: 15,
      marginVertical: 10,
      width: '80%',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 2, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 5,
    },
    fancyButtonAlt: {
      backgroundColor: '#1e90ff',
      paddingVertical: 14,
      paddingHorizontal: 25,
      borderRadius: 15,
      marginVertical: 10,
      width: '80%',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 2, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 5,
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: '500',
    },
    button: {
      backgroundColor: '#1e90ff',
      paddingVertical: 15,
      paddingHorizontal: 30,
      borderRadius: 12,
      marginVertical: 10,
      width: '80%',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 5,
    },
  });