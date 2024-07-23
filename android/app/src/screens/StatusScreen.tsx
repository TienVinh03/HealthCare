import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, Button, TouchableOpacity, Alert, StyleSheet,Image, Dimensions } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { Menu, Provider } from 'react-native-paper';
import LottieView from "lottie-react-native";

import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import Swiper from 'react-native-swiper';
import TextInputCustom from '../components/TextInputCustom';
import TextInputCustom1 from '../components/TextInputCustom1';
const { width: screenWidth } = Dimensions.get('window');
interface Todo {
  id: string;
  title: string;
  content: string;
  date: string;
}

const Item3Screen = () => {
  const navigation = useNavigation();
  const [todos, setTodos] = useState<Todo[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [newDate, setNewDate] = useState('');
  const [visible, setVisible] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    fetchTodos();
  }, []);

    const fetchTodos = async () => {
      const todoList: Todo[] = [];
      const snapshot = await firestore().collection('status').get();
      snapshot.forEach(doc => {
        todoList.push({ id: doc.id, ...doc.data() } as Todo);
      });
      todoList.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB.getTime() - dateA.getTime(); // Newest date first
      });
      setTodos(todoList);
    };



  const handleDelete = async (id: string) => {
    await firestore().collection('status').doc(id).delete();
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleEdit = async (id: string) => {
    if (newTitle.trim() === '' || newContent.trim() === '') {
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

    await firestore().collection('status').doc(id).update({
      title: newTitle,
      content: newContent,
      date: formattedDate,
    });
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, title: newTitle, content: newContent, date: formattedDate } : todo)));
    setEditingId(null);
    setNewTitle('');
    setNewContent('');
  };

  const openMenu = (id: string) => setVisible({ ...visible, [id]: true });
  const closeMenu = (id: string) => setVisible({ ...visible, [id]: false });

  const renderItem = ({ item }: { item: Todo }) => (
    <View style={styles.todoContainer}>
      {editingId === item.id ? (
        <View>
          <TextInputCustom1
          lable="Title"
            style={styles.input}
            value={newTitle}
            onChangeText={setNewTitle}
            placeholder="Title"
               multiline
        textAlignVertical="top"
          />
          <TextInputCustom1
          lable="Content"
            style={styles.input}
            value={newContent}
            onChangeText={setNewContent}
            placeholder="Content"
               multiline
        textAlignVertical="top"
          />

          <View style={{alignSelf:'center',flexDirection:'row'}}>

          <TouchableOpacity onPress={() => handleEdit(item.id)} style={{marginBottom:10,width:150,height:40,backgroundColor:'#F46D21',borderRadius:10,alignItems:'center',justifyContent:'center',marginRight:10,marginTop:10}}>
            <Text style={{color:'white',fontWeight:'600'}}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setEditingId(null)} style={{width:150,height:40,backgroundColor:'#F46D21',borderRadius:10,alignItems:'center',justifyContent:'center',marginTop:10}}>

<Text style={{color:'white',fontWeight:'600'}}>Cancle</Text>
</TouchableOpacity>
          
         </View>
        </View>
      ) : (
        <View style={{flex:1}} >
          <Menu
            visible={visible[item.id] || false}
            onDismiss={() => closeMenu(item.id)}
            style={{marginLeft:230}}
            
            anchor={
              <TouchableOpacity onPress={() => openMenu(item.id)} style={{alignSelf:'flex-end'}}  >
                <Image source={require('../img/dots.png')} style={{width:20,height:20}}/>
              </TouchableOpacity>
            }
          >
            <Menu.Item onPress={() => { closeMenu(item.id); setEditingId(item.id); setNewTitle(item.title); setNewContent(item.content); setNewDate(item.date); }} title="Edit" />
            <Menu.Item onPress={() => { closeMenu(item.id); handleDelete(item.id); }} title="Delete" />
          </Menu>

          <View style={{width:screenWidth-90,marginTop:-20}}>
          <Text style={styles.title}>{item.title}</Text>
          <Text>{item.content}</Text>
   
          
          </View>
          <Text style={{alignSelf:'flex-end',marginTop:20}}>{item.date}</Text>
        </View>
      )}
    </View>
  );

  return (
    <Provider>
      <View style={styles.container}>
        <Header
        title='Status'
        subtitle='Write your thoughts'
        iconSource={require('../img/bell.png')}
        />
      
        <Swiper style={{height:100}} showsButtons={false} loop={true} autoplay={true}  showsPagination={false}
        
       >
    <View style={styles.slide1}>
      <Image source={require('../img/slideshow1.png')} style={{width:screenWidth,height:100,alignSelf:'center'}}/>
     
    </View>
    <View style={styles.slide2}>
    <Image source={require('../img/slideshow2.png')} style={{width:screenWidth,height:100,alignSelf:'center'}}/>
    
    </View>
    <View style={styles.slide3}>
    <Image source={require('../img/slideshow3.png')} style={{width:screenWidth,height:100,alignSelf:'center'}}/>
   
    </View>
    <View style={styles.slide3}>
    <Image source={require('../img/slideshow4.png')} style={{width:screenWidth,height:100,alignSelf:'center'}}/>
      
    </View>
    <View style={styles.slide3}>
    <Image source={require('../img/slideshow6.png')} style={{width:screenWidth,height:100,alignSelf:'center'}}/>
   
    </View>
  </Swiper>
 <View style={{height:425}}>


 
    <FlatList
          data={todos}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
</View>
        
        <TouchableOpacity
          style={{position:'absolute',bottom:20,right:20}}
          onPress={() => navigation.navigate('AddStatus', {refreshTodos: fetchTodos })}
        >
          <Image source={require('../img/add.png')} style={{width:55,height:55}}/>
        </TouchableOpacity>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  
  },listContainer:{
    backgroundColor:'aqua'
  }
  
  ,wrapper: {height:500},
  title:{
    fontSize:25,color:'black',fontWeight:'700'
  }
  ,
  todoContainer: {
    marginBottom: 15,
    paddingTop: 10,
    paddingHorizontal:15,paddingBottom:15,
    backgroundColor: '#F4F1F8',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0,
    shadowRadius: 2.22,
    elevation: 8,
    position: 'relative',
    marginHorizontal:10,
    marginTop:5
    
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 10,
    padding: 5,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  slide1: {
    
    // justifyContent: 'center',

    backgroundColor: 'white'
  },
  slide2: {

    // justifyContent: 'center',

    backgroundColor: 'white'
  },
  slide3: {

    // justifyContent: 'center',

    backgroundColor: 'white'
  },
});

export default Item3Screen;
