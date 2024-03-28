import { Link } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

export default function Timeline() {
  return (
    <View style={{ marginTop: 200 }}>
      <Link href="/" asChild>
        <Pressable>
          <Text>GO Home</Text>
        </Pressable>
      </Link>
      <Text> Timeline </Text>
    </View>
  );
}
