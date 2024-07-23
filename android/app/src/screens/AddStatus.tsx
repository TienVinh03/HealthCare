import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { useRoute, useNavigation } from '@react-navigation/native';
import HeaderAdd from '../components/HeaderAdd';

const AddTodoScreen = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigation = useNavigation();
  const route = useRoute();
  const { refreshTodos } = route.params as { refreshTodos: () => void };

  const handleAddTodo = async () => {
    if (title.trim() === '' || content.trim() === '') {
      Alert.alert('Validation Error', 'Title and content are required.');
      return;
    }

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });

    await firestore().collection('status').add({
      title,
      content,
      date: formattedDate,
    });

    setTitle('');
    setContent('');
    refreshTodos(); // Gọi hàm để làm mới dữ liệu
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <HeaderAdd title='Add Post'/>

      <View style={{marginHorizontal:10,marginTop:10}}>


      
      <Text style={styles.label}>Title</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Enter title"
          multiline
        textAlignVertical="top"
      />
      <Text style={styles.label}>Content</Text>
      <TextInput
        style={styles.input1}
        value={content}
        onChangeText={setContent}
        placeholder="Enter content"
        multiline
        textAlignVertical="top"
      />
      <Button title="Publish" onPress={handleAddTodo} />

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
    
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  input1: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 30,
    paddingHorizontal:10,
    marginBottom: 15,
  },
});

export default AddTodoScreen;
