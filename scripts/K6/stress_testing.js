import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '30s', target: 25 },  // Start with 25 users
    { duration: '30s', target: 50 },  // Increase to 50 users
    { duration: '1m', target: 200 },  // Increase to 200 users
    { duration: '30s', target: 500 }, // Stress test at 500 users
    { duration: '30s', target: 0 },   // Ramp down to 0 users
  ],
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
        'Response time is < 1000ms': (r) => r.timings.duration < 1000,
    });

    sleep(1); // Simulate user time (1 second)
}
