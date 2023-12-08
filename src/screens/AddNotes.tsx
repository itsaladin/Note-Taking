import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Alert, Button, StyleSheet, TextInput, View } from "react-native";
import uuid from "react-native-uuid";
import { useDispatch } from "react-redux";
import { addNote } from "../store/noteSlice";

const AddNotesScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleAddNote = () => {
    if (title && content) {
      dispatch(addNote({ id: uuid.v4(), title: title, content: content }));
      setTitle("");
      setContent("");
      //@ts-ignore
      navigation.navigate("ListNotes");
    } else {
      Alert.alert("Insert required fields!!");
    }
  };
  return (
    <View style={{ margin: 20 }}>
      <TextInput
        placeholder="Input yor title"
        onChangeText={(text) => {
          setTitle(text);
        }}
        style={{ borderColor: "gray", borderWidth: 1, marginBottom: 15 }}
        value={title}
      />
      <TextInput
        placeholder="Input yor content"
        onChangeText={(text) => {
          setContent(text);
        }}
        value={content}
        style={{ borderColor: "gray", borderWidth: 1, marginBottom: 15 }}
      />
      <Button
        title="Add Note"
        color={"green"}
        onPress={() => {
          handleAddNote();
        }}
      />
      <View style={{ marginTop: 15 }}>
        <Button
          title="Go to list of note"
          color={"green"}
          onPress={() => {
            //@ts-ignore
            navigation.navigate("AddNote");
          }}
        />
      </View>
    </View>
  );
};

export default AddNotesScreen;

const styles = StyleSheet.create({});
