import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { getAuth } from "../services/firebase";

import { useState } from "react";
import { Button, TextInput, StyleSheet, Text, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignupScreen() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");

  const auth = getAuth();
  const onRequestLogin = () => {
    if (email === "" || password === "") {
      Alert.alert("bad email or pass");
      return
    }
    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
      //Signed up
      const user = userCredential.user;
      setUser(JSON.stringify(user));
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage)
    })
  }


  return (
    <SafeAreaView>
      <TextInput
        style={styles.textInput}
        placeholder="Email"
        onChangeText={newText => setEmail(newText)}
        defaultValue={""}
      />
      <TextInput
        style={styles.textInput}
        secureTextEntry
        placeholder="Password"
        onChangeText={newText => setPassword(newText)}
        defaultValue={""}
      />
      <Text>{user}</Text>
      <Button title="but" onPress={onRequestLogin} />

    </SafeAreaView>

  )

}
const styles = StyleSheet.create({
  textInput: {
    width: "30%",
    margin: 20,
    padding: 10,
    borderColor: "black",
    borderWidth: 1
  },
});                    
