import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SixWeekCoursesScreen = () => {
  const navigation = useNavigation<any>();
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);

  const toggleCourse = (course: string) => {
    if (selectedCourses.includes(course)) {
      setSelectedCourses(selectedCourses.filter(c => c !== course));
    } else {
      setSelectedCourses([...selectedCourses, course]);
    }
  };

  const handleApply = () => {
    if (selectedCourses.length === 0) {
      Alert.alert('No Course Selected', 'Please select at least one course.');
    } else {
      Alert.alert('Courses Applied', `You have applied for: ${selectedCourses.join(', ')}`);
      setSelectedCourses([]);
    }
  };

  const courses = ['Cooking', 'Childminding', 'Garden Maintenance'];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>6-Week Courses</Text>
      {courses.map((course, index) => (
        <View key={index} style={styles.courseBox}>
          <Text style={styles.courseText}>{course}</Text>
        </View>
      ))}

      <TouchableOpacity
        style={styles.applyButton}
        onPress={() => navigation.navigate('Apply', { type: '6Week' })}
      >
        <Text style={styles.applyText}>Apply</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

  

     

export default SixWeekCoursesScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f9faff',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e90ff',
    marginBottom: 30,
  },
  courseBox: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  applyText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  courseButton: {
    width: '100%',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
  },
  selectedCourse: {
    backgroundColor: '#1e90ff',
    borderColor: '#1e90ff',
  },
  courseText: {
    fontSize: 16,
    color: '#333',
  },
  selectedText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  applyButton: {
    backgroundColor: '#1e90ff',
    padding: 15,
    borderRadius: 10,
    marginTop: 30,
    width: '100%',
    alignItems: 'center',
  },
  applyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});