import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';
const categoryImages = {
  'code.jpg': require('./assets/code.jpg'),
  'read.jpg': require('./assets/read.jpg'),
  'study.jpg': require('./assets/study.jpg'),
  'exercise.jpg': require('./assets/exercise.jpg'),
  'cook.jpg': require('./assets/cook.jpg'),
  'travel.jpg': require('./assets/travel.jpg'),
  'meditate.jpg': require('./assets/meditate.jpg'),
};

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.greetingContainer}>
          <Text style={styles.greeting}>Hello, Devs</Text>
          <Text style={styles.tasks}>14 tasks today</Text>
        </View>
        <TouchableOpacity style={styles.profileButton}>
          <Image
            source={require('./assets/person.png')}
            style={styles.profileIcon}
          />
        </TouchableOpacity>
      </View>

      <View
       style={styles.searchContainer}>
        <TouchableOpacity style={styles.searchButton}>
          <Image source={require('./assets/Vector.png')} style={styles.SearchIcon} />
          </TouchableOpacity>
        <TextInput style={styles.searchInput} placeholder="Search" />
        <TouchableOpacity style={styles.filterButton}> 
          <Image source={require('./assets/Filter.png')} style={styles.filterIcon} />
          </TouchableOpacity>
          
          </View>

      <Text style={styles.sectionTitle}>Categories</Text>
      <ScrollView horizontal={true} style={styles.horizontalScroll} showsHorizontalScrollIndicator={false}>
        <View style={styles.categoriesContainer}>
          {[
            { image: 'code.jpg', title: 'Code', tasks: '12 Tasks' },
            { image: 'read.jpg', title: 'Read', tasks: '12 Tasks' },
            { image: 'cook.jpg', title: 'Cook', tasks: '12 Tasks' },
            { image: 'exercise.jpg', title: 'Exercise', tasks: '12 Tasks' },
            { image: 'study.jpg', title: 'Study', tasks: '12 Tasks' },
            { image: 'travel.jpg', title: 'Travel', tasks: '12 Tasks' },
            { image: 'meditate.jpg', title: 'Meditate', tasks: '12 Tasks' }
          ].map((category, index) => (
            <TouchableOpacity key={index} style={styles.categoryCard}>
               <Image style={styles.categoryImage} source={categoryImages[category.image]} />
              <Text style={styles.categoryTitle}>{category.title}</Text>
              <Text style={styles.categoryTasks}>{category.tasks}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <View style={styles.ongoingTasks}>
        <Text style={styles.sectionTitle}>Ongoing Tasks</Text>
        {[
          'Mobile App Development', 'Web Development', 'Push Ups', 'Exercise', 'Study',
          'Data Structures', 'Software Engineering', 'Info Modelling', 'Projects',
          'Cyber Security', 'Canva', 'UI/UX', 'Mock-Up Text', 'Timetable', 'After School Activities'
        ].map((task, index) => (
          <TouchableOpacity key={index} style={styles.taskCard}>
            <Text style={styles.taskText}>{task}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(225,213,201)',
    paddingHorizontal: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 10,
    borderRadius: 15,
    marginBottom: 10,
    marginTop: 30,
  },
  greetingContainer: {
    flexDirection: 'column',
  },
  greeting: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  tasks: {
    fontSize: 12,
    color: '#000',
  },
  profileButton: {
    padding: 1,
    borderRadius: 20,
  },
  profileIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
    marginBottom: 20,
    paddingHorizontal: 15,
  },
  searchInput: {
    flex: 1,
    height: 50,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#DDD',
    fontSize: 18,
  },
  filterButton: {
    marginLeft: 1,
    padding: 12,
    backgroundColor: '#FFF',
    borderRadius: 20,
  },
  filterIcon: {
    width: 24,
    height: 24,
  },
  horizontalScroll: {
    flexGrow: 0,
    marginBottom: 20,
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryCard: {
    width: 150,
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DDD',
    marginRight: 20,
  },
  categoryImage: {
    width: 120,
    height: 100,
    margin: 10,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  categoryTasks: {
    color: '#888',
  },
  ongoingTasks: {
    marginTop: 10,
    
  },
  sectionTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 1,
  },
  taskCard: {
    padding: 45,
    marginVertical: 5,
    backgroundColor: '#F5F5F5',
    borderRadius: 15,
  },
  taskText: {
    fontSize: 16,
  },
});