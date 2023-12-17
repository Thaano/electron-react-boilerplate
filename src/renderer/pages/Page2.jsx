import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

const Page2 = () => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'page2',
  });

  return (
    <MainLayout>
      <h1 className="text-3xl text-center">{t('title')}</h1>
      <Link to="/"> {t('goToHome')} </Link>
    </MainLayout>
  );
};

export default Page2;
