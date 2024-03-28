import { Link } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

export default function Home() {
  return (
    <View style={{ marginTop: 200 }}>
      <Link
        href={{
          pathname: '/generic/[slug]',
          params: { slug: 'slugado' },
        }}
        asChild
      >
        <Pressable>
          <Text>Home</Text>
        </Pressable>
      </Link>
      <Text> sign in </Text>
    </View>
  );
}