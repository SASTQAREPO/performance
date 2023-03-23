import http from 'k6/http';
import { check } from "k6";
import { sleep } from 'k6';


export let options = {

  stages: [
    { duration: '1m', target: 1 }, 
    { duration: '2m', target: 2 }, 
    { duration: '1m', target: 0 }, 
  ],
};


export default function () {


  const params = {
    headers: {
      'Content-Type': 'application/json',
      'X-Auth-Token': '17209d466bc701a243bfdbf75825f5c25b1a97107aee23ef4af8a3b8c6f4c3c8',
    },
  };


  const scans_url_10 = http.get('https://sast-dev.whitesourcesoftware.com/sast/api/scans?page=2&limit=10&sort=createdTime&order=descend&summary=true',params);
  
  check(scans_url_10, {
    'is status 200': (r) => r.status === 200,
  });
  
  sleep(1);


  const scans_url_20 = http.get('https://sast-dev.whitesourcesoftware.com/sast/api/scans?page=4&limit=20&sort=createdTime&order=descend&summary=true',params);

  check(scans_url_20, {
    'is status 200': (r) => r.status === 200,
  });

  sleep(1);


  const scans_url_30 = http.get('https://sast-dev.whitesourcesoftware.com/sast/api/scans?page=6&limit=30&sort=createdTime&order=descend&summary=true',params);

  check(scans_url_30, {
    'is status 200': (r) => r.status === 200,
  });

  sleep(1);

  const scans_url_40 = http.get('https://sast-dev.whitesourcesoftware.com/sast/api/scans?page=8&limit=40&sort=createdTime&order=descend&summary=true',params);

  check(scans_url_40, {
    'is status 200': (r) => r.status === 200,
  });

  sleep(1);

  const scans_url_50 = http.get('https://sast-dev.whitesourcesoftware.com/sast/api/scans?page=10&limit=50&sort=createdTime&order=descend&summary=true',params);
  
  check(scans_url_50, {
    'is status 200': (r) => r.status === 200,
  });

  sleep(1);
}