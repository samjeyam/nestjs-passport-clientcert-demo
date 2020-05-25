# Nest.js and Client cert authentication and whitelist 

## Description

Uses the following to enforce client based authentication on specific routes and allows only whitelisted cn names which is present in .env.WHITELISTED_CN 


- Nest.js
- AuthGuard
- [Uses passport-client-cert](http://www.passportjs.org/packages/passport-client-cert/)



## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

## Test

```
# Test 1: call an endpoint which needs cert enforcement
# we have created a cert with CN name = awesomelocalhost, hence if we call the /helloworld/greetings endpoint - it would be allowed

curl -k --cert ann.crt --key ann.key --cacert ca.crt https://localhost:443/helloworld/greetings?name=john

repsonse:
Hello john

# Test 2: call an endpoint which doesnt have client-cert guard
curl -k https://localhost:443/helloworld

response: Hello world


```



## License

  Nest is [MIT licensed](LICENSE).
