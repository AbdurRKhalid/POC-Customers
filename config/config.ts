const devConfig = {
    database: {
        DB_USERNAME: 'customers-ms',
        DB_PASSWORD: 'customers-microservice'
    }
}

const prodConfig = {
    database: {
        DB_USERNAME: 'customers-ms',
        DB_PASSWORD: 'customers-microservice'
    }
}

const env = process.env.NODE_ENV || 'dev';
const config = env === 'prod' ? prodConfig : devConfig;

export default config;