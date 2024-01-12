import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { getAuth } from "../services/firebase";

import { useState } from "react";
import { View, Button, TextInput, StyleSheet, Text, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

//TODO: chagne to signin screen
export default function SignInScreen() {
  const auth = getAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(auth.currentUser);

  const requestLogin = () => {
    if (email === "" || password === "") {
      Alert.alert("bad email or pass");
      return
    }
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      //Signed up
      const user = userCredential.user;
      setUser(user);
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === "auth/invalid-credential") {
        Alert.alert("invlaid login")
      } else if (errorCode === "auth/too-many-requests") {
        Alert.alert("Too many invalid login attempts", "Try again later, or reset password")
      } else {
        console.error(errorCode, errorMessage)
      }
    })
  }

  const requestLogout = () => {
    signOut(auth).then(() => {
      setUser(null);
      Alert.alert("logged out");
    }, (err) => {
      Alert.alert("an error occured");

    })
  }


  return (
    <SafeAreaView>
      {user
        ?
        <View>
          <Text>Logged in as: {user.email}</Text>
          <Button title="Logout" onPress={requestLogout} />
        </View>
        :
        (
          <View>
            <TextInput
              style={styles.textInput}
              placeholder="enter here"
              onChangeText={newText => setEmail(newText)}
              defaultValue={""}
            />
            <TextInput
              style={styles.textInput}
              placeholder="enter here"
              onChangeText={newText => setPassword(newText)}
              defaultValue={""}
            />
            <Button title="but" onPress={requestLogin} />
          </View>
        )


      }

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

