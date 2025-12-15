import devConfig from '../data/dev.json';
import sitConfig from '../data/sit.json';

const profile = process.env.TEST_ENV || 'dev';
const config = profile === 'dev' ? devConfig : sitConfig;
export default config;