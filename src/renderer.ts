import Application from './front/index';
import { MODE } from './front/store/Enviroments';

const el = document.getElementById('root');

const getMode = (type: string): MODE => {
    switch(type) {
        case 'development':
            return MODE.DEVELOPMENT;
        case 'production':
            return MODE.PRODUCTION;
        case 'staging':
            return MODE.STAGING;
        default:
            throw new Error(`${type} is not defined`);
    }
};

Application(el, {
    mode: getMode(process.env.NODE_ENV || ''),
});
