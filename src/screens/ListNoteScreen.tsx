import React, {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

const ListNoteScreen = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state: any) => state.note.notes);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleAddNote = () => {
    // dispatch(addNote({id: uuid.v4(), text: setContent}));
  };

  return (
    <View style={{margin: 20}}>
      <Text>Add note:</Text>
      <TextInput
        placeholder="title"
        onChangeText={text => {
          setTitle(text);
        }}
        style={{backgroundColor: 'red'}}
        value={title}
      />
      <TextInput
        placeholder="content"
        onChangeText={text => {
          setContent(text);
        }}
        value={content}
      />
      <Button
        title="Add Note"
        onPress={() => {
          handleAddNote();
        }}
      />
      <Text>List of notes:</Text>
      {/* {notes?.map((note: any) => (
        <View key={note.id}>
          <Text>{note.text}</Text>
          <TextInput
            placeholder="Update note"
            value={newNoteText}
            onChangeText={text => setNewNoteText(text)}
          /> 
        </View>
      ))} */}
    </View>
  );
};

export default ListNoteScreen;
