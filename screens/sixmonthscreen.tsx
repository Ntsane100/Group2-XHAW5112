import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const courses = ['First Aid', 'Landscaping', 'Sewing', 'Life Skills'];

const SixMonthCoursesScreen = () => {
  const navigation = useNavigation<any>();
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);

  const toggleCourse = (course: string) => {
    if (selectedCourses.includes(course)) {
      setSelectedCourses(selectedCourses.filter(c => c !== course));
    } else {
      setSelectedCourses([...selectedCourses, course]);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>6-Month Courses</Text>
      {courses.map((course, index) => (
        <View key={index} style={styles.courseBox}>
          <Text style={styles.courseText}>{course}</Text>
        </View>
      ))}

      <TouchableOpacity
        style={styles.applyButton}
        onPress={() => navigation.navigate('Apply', { type: '6Month' })}
      >
        <Text style={styles.applyText}>Apply</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default SixMonthCoursesScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f7f9ff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  courseList: { flexGrow: 1 },
  courseButton: {
    padding: 15,
    marginVertical: 8,
    borderRadius: 12,
    backgroundColor: '#e0e0e0',
  },
  courseBox: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  courseButtonSelected: {
    backgroundColor: '#1e90ff',
  },
  courseText: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
  },
  applyButton: {
    backgroundColor: '#4a90e2',
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 30,
  },
  applyText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});