import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

const HomePage = () => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'home',
  });

  const [message, setMessage] = useState('');
  const [message2nd, setMessage2nd] = useState('');

  const handleInvoke = async () => {
    const resp = await window.electron.ipcRenderer.invoke(
      'serviceOne-invoke-test',
    );
    console.log('serviceOne-invoke-test resp', resp);

    setMessage(resp.message);
  };

  const handleSendMessage = () => {
    window.electron.ipcRenderer.sendMessage('serviceOne-sendMessage-test', {});
  };

  useEffect(() => {
    window.electron.ipcRenderer.on(
      'serviceOne-sendMessage-test-reply',
      (resp) => {
        console.log('serviceOne-sendMessage-test-reply', resp);
        setMessage2nd(resp.message);
      },
    );
  }, []);

  const handleClear = () => {
    setMessage('');
    setMessage2nd('');
  };

  return (
    <MainLayout>
      <div>
        <h1 className="text-center text-3xl">{t('title')}</h1>
        <div className="grid grid-cols-3 gap-4 mt-8">
          <button
            type="button"
            className="rounded-xl bg-cyan-700 p-2 hover:bg-cyan-600"
            onClick={handleInvoke}
          >
            Test IPC invoke (bidirectional)
          </button>

          <button
            type="button"
            className="rounded-xl bg-cyan-700 p-2 hover:bg-cyan-600"
            onClick={handleSendMessage}
          >
            Test IPC sendMessage (unidirectional)
          </button>

          <button
            type="button"
            className="rounded-xl bg-cyan-700 p-2 hover:bg-cyan-600"
            onClick={handleClear}
          >
            Clear
          </button>

          <div className="p-5">{message && <div>{message}</div>}</div>

          <div className="p-5">{message2nd && <div>{message2nd}</div>}</div>
        </div>
      </div>

      <Link to="/page2" className="text-center block mt-8">
        {t('goToPage2')}
      </Link>
    </MainLayout>
  );
};

export default HomePage;
