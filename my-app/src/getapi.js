import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://api.edamam.com/api/recipes/v2',
    headers: {
        'APP_ID':'32aadb99',
        'APP_KEY':'994f5562442008fb3295eeb94d54ef7e',
    },
    'params': {
        'q':'pizza',
    },
});

export default {
    getData: () =>
    instance({
        'method':'GET',
        'url':'/query',
        'params': {
            'search':'parameter',
        },
    }),
    postData: () =>
    instance({
        'method': 'POST',
        'url':'/api',
        'data': {
            'item1':'data1',
            'item2':'item2'
        }
    })
}