import { IconProps } from './icon.interfaces';
import {
  Plus,
  AlertCircle,
  Bell,
  Home,
  User,
  Cat,
} from '@tamagui/lucide-icons';

export const Icon = ({ color, name, size = 20, style, testID }: IconProps) => {
  const props = { size, color, style, testID };
  switch (name) {
    case 'plus':
      return <Plus {...props} />;
    case 'alert-circle':
      return <AlertCircle {...props} />;
    case 'bell':
      return <Bell {...props} />;
    case 'home':
      return <Home {...props} />;
    case 'user':
      return <User {...props} />;
    case 'cat':
      return <Cat {...props} />;

    default:
      return <AlertCircle {...props} />;
  }
};
