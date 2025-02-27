import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
    vus: 50, // 50 users
    duration: '1m', // 1 minute running the test
};

export default function () {

    // url to call and params for the request
    const url = 'https://api.coingecko.com/api/v3/coins/list';
    const params = {
        headers: {
        'x-cg-demo-api-key': 'CG-s5EmL1s11PtMeHh8Qb1HCTQN',
        },
    };

    // make the call and get the response
    let response = http.get(url, params);

    // check the status code and response time
    check(response, {
        'Status code is 200': (r) => r.status === 200,
        'Response time is < 500ms': (r) => r.timings.duration < 500,
    });

    sleep(1); // Simulate user time (1 second)
}
