import { Link, useLocalSearchParams } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

export default function Generic() {
  const { slug } = useLocalSearchParams();

  return (
    <View style={{ marginTop: 200 }}>
      <Link href="/" asChild>
        <Pressable>
          <Text>{slug}</Text>
        </Pressable>
      </Link>
    </View>
  );
}
