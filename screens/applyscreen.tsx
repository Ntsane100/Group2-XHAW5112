import { RouteProp, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import Checkbox from 'expo-checkbox';


type ApplyScreenRouteProp = RouteProp<{ Apply: { type: '6Month' | '6Week' } }, 'Apply'>;

const ApplyScreen = () => {
  const route = useRoute<ApplyScreenRouteProp>();
  const { type } = route.params;

  const courseData = {
    '6Month': {
      price: 1500,
      courses: ['First Aid', 'Landscaping', 'Sewing', 'Life Skills'],
    },
    '6Week': {
      price: 750,
      courses: ['Cooking', 'Childminding', 'Garden Maintenance'],
    },
  };

  const { price, courses } = courseData[type];

  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);

  const toggleSelection = (course: string) => {
    if (selectedCourses.includes(course)) {
      setSelectedCourses(selectedCourses.filter(c => c !== course));
    } else {
      setSelectedCourses([...selectedCourses, course]);
    }
  };

  const calculateTotal = () => {
    const count = selectedCourses.length;
    const baseTotal = count * price;
    let discount = 0;

    if (count === 2) discount = 0.10;
    else if (count >= 3) discount = 0.15;

    const discountedTotal = baseTotal * (1 - discount);
    return {
      baseTotal,
      discountPercentage: discount * 100,
      discountedTotal,
    };
  };

  const { baseTotal, discountPercentage, discountedTotal } = calculateTotal();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Apply for {type === '6Month' ? '6-Month' : '6-Week'} Courses</Text>

      {courses.map((course, index) => (
        <View key={index} style={styles.checkboxContainer}>
          <Checkbox
            value={selectedCourses.includes(course)}
            onValueChange={() => toggleSelection(course)}
            style={styles.checkbox}
          />
          <Text style={styles.label}>{course}</Text>
        </View>
      ))}

      <View style={styles.summaryBox}>
        <Text style={styles.summaryText}>Courses Selected: {selectedCourses.length}</Text>
        <Text style={styles.summaryText}>Base Total: R{baseTotal}</Text>
        <Text style={styles.summaryText}>Discount: {discountPercentage}%</Text>
        <Text style={styles.totalText}>Total After Discount: R{discountedTotal.toFixed(2)}</Text>
      </View>

      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitText}>Submit Application</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ApplyScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f0f4f8',
    flexGrow: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e90ff',
    marginBottom: 20,
    textAlign: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  checkbox: {
    marginRight: 10,
    width: 20,
    height: 20,
  },
  label: {
    fontSize: 16,
    color: '#333',
  },
  summaryBox: {
    marginTop: 30,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  summaryText: {
    fontSize: 16,
    marginBottom: 5,
    color: '#444',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e90ff',
    marginTop: 10,
  },
  submitButton: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 10,
    marginTop: 30,
    alignItems: 'center',
  },
  submitText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});