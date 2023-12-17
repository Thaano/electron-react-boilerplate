import { ipcMain } from 'electron';
import i18next from 'i18next';
import ServiceOneModelInstance from '../models/serviceOneModel';

require('dotenv').config();

const { t } = i18next;

ipcMain.handle('serviceOne-invoke-test', async (event, arg) => {
  console.log('serviceOne-invoke-test', arg);

  const message = ServiceOneModelInstance.getMessage();

  return {
    success: true,
    message,
  };
});

ipcMain.on('serviceOne-sendMessage-test', async (event, arg) => {
  console.log('serviceOne-sendMessage-test', arg);

  const message = ServiceOneModelInstance.getMessage();

  event.reply('serviceOne-sendMessage-test-reply', {
    success: true,
    message,
  });
});
