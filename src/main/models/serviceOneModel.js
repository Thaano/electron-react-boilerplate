import i18next from 'i18next';
import log from 'electron-log';

const { t } = i18next;

class ServiceOneModel {
  constructor() {
    if (ServiceOneModel.instance) {
      return ServiceOneModel.instance;
    }

    this.variable = null;

    ServiceOneModel.instance = this;
  }

  //   async init() {
  //     // Do something
  //   }

  // eslint-disable-next-line class-methods-use-this
  getMessage() {
    log.info('ServiceOneModel: getMessage() called');
    return t('home.hello_world');
  }
}

const ServiceOneModelInstance = new ServiceOneModel();

export default ServiceOneModelInstance;
