import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const aboutscreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>About Us</Text>

      <Text style={styles.sectionTitle}>📅 Established:</Text>
      <Text style={styles.text}>Our business was proudly established in 2025.</Text>

      <Text style={styles.sectionTitle}>🎯 What We Do:</Text>
      <Text style={styles.text}>
        We are a training organization dedicated to empowering unemployed individuals through skills-based courses. 
        Our goal is to provide practical, job-ready knowledge that opens doors to new opportunities.
      </Text>

      <Text style={styles.sectionTitle}>🚀 Our Mission:</Text>
      <Text style={styles.text}>
        To uplift communities by equipping people with skills that can help them find employment, start small businesses, 
        or become more self-sufficient.
      </Text>

      <Text style={styles.sectionTitle}>📘 Course Options:</Text>
      <Text style={styles.text}>
        We offer both 6-month and 6-week training programs:
      </Text>
      <Text style={styles.text}>
        • 6-Month Courses: In-depth, hands-on training in areas such as First Aid, Landscaping, Sewing, and Life Skills.{'\n'}
        • 6-Week Courses: Short, intensive programs ideal for fast-tracked learning and quick job readiness.
      </Text>

      <Text style={styles.sectionTitle}>🌟 Benefits:</Text>
      <Text style={styles.text}>
        • Gain practical, real-world skills{'\n'}
        • Boost employability and confidence{'\n'}
        • Receive certificates upon completion{'\n'}
        • Learn in a supportive, community-based environment
      </Text>
    </ScrollView>
  );
};

export default aboutscreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f7f9ff',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1e90ff',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 8,
    color: '#333',
  },
  text: {
    fontSize: 16,
    color: '#444',
    lineHeight: 22,
  },
});