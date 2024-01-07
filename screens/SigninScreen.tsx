import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getAuth } from "../src/services/firebase";

export default function SigninScreen() {
  const a = getAuth();

  return (
    <SafeAreaView>
      <Text>{JSON.stringify(a)}</Text>

    </SafeAreaView>
  )

}
