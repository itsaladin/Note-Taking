import React, { useState } from "react";
import { Alert, Button, Text, TextInput, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { removeNote, updateNote } from "../store/noteSlice";

const ListNoteScreen = () => {
  const dispatch = useDispatch();
  const [Id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const notes = useSelector((state: any) => state.notes);

  const handleRemoveNote = (id: any) => {
    dispatch(removeNote(id));
  };

  const handleUpdateNote = () => {
    if (title && content) {
      dispatch(updateNote({ id: Id, title, content }));
      setId("");
      setTitle("");
      setContent("");
    } else {
      Alert.alert("Insert required fields!!");
    }
  };

  return (
    <View style={{ margin: 20 }}>
      {notes?.map((note: any) => (
        <View
          key={note.id}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text>{note.title}</Text>
          <Text>{note.content}</Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ padding: 5 }}>
              <Button
                title="edit"
                onPress={() => {
                  setId(note.id);
                  setTitle(note.title);
                  setContent(note.content);
                }}
                color={"purple"}
              />
            </View>
            <View style={{ padding: 5 }}>
              <Button
                title="erase"
                color={"red"}
                onPress={() => handleRemoveNote(note.id)}
              />
            </View>
          </View>
        </View>
      ))}

      {Id && (
        <View style={{ marginTop: 20 }}>
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
            color={"green"}
            title="Update"
            onPress={() => {
              handleUpdateNote();
            }}
          />
        </View>
      )}

      <View style={{ marginTop: 15 }}>
        <Button
          title="Go to add note"
          color={"green"}
          onPress={() => {
            //@ts-ignore
            navigation.navigate("ListNotes");
          }}
        />
      </View>
    </View>
  );
};

export default ListNoteScreen;
