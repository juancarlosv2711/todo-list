// AWS Configuration

const awsConfig = {
    region: process.env.VUE_APP_AWS_REGION || 'us-east-1',
    apiVersion: '2018-11-29',
    endpoint: process.env.VUE_APP_API_GATEWAY_ENDPOINT,
    credentials: {
        accessKeyId: process.env.VUE_APP_AWS_ACCESS_KEY_ID || '',
        secretAccessKey: process.env.VUE_APP_AWS_SECRET_ACCESS_KEY || ''
    }
};

module.exports = awsConfig; 