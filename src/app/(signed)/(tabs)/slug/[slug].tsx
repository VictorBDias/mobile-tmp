import { Link, useLocalSearchParams } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

export default function Generic() {
  const { slug } = useLocalSearchParams();

  return (
    <Link href="/" asChild>
      <Pressable>
        <Text>{slug}</Text>
      </Pressable>
    </Link>
  );
}
