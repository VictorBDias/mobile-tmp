import { IconProps } from './icon.interfaces';
import { Plus, AlertCircle } from '@tamagui/lucide-icons';

export const Icon = ({ color, name, size = 20, style, testID }: IconProps) => {
  const props = { size, color, style, testID };
  switch (name) {
    case 'plus':
      return <Plus {...props} />;
    case 'alert-circle':
      return <AlertCircle {...props} />;
  }
};
