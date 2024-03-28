import { Link } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

export default function AuthScreen() {
  return (
    <View>
      <Link href="/generic/slugado" asChild>
        <Pressable>
          <Text>Home</Text>
        </Pressable>
      </Link>
      <Text> sign in </Text>
    </View>
  );
}
