import { Typography } from '@components/atoms/Typography/Typography';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();
  return <Typography>{t('home:singular')}</Typography>;
}
