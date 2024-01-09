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
      Alert.alert("Invalid Email or Password", "Email and Password must be filled in");
      return
    }
    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
      //Signed up
      const user = userCredential.user;
      setUser(JSON.stringify(user));
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      switch (errorCode) {
        case "auth/weak-password":
          Alert.alert("Weak password", "Password must be at least 6 characters");
          break;
        case "auth/invalid-email":
          Alert.alert("Invalid Email", "Please use a valid email");
          break;
        case "auth/email-already-in-use":
          Alert.alert("Account already exists", "Email already in use");
          break;
        default:
          console.error(errorCode, errorMessage)
      }

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
