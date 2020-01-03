# cucumber-test-results

[aws-deployed version](http://3.13.45.208:3035/)
---

connector for 

[cucumber-test-results-react](https://github.com/ArtemAlagizov/cucumber-test-results-react)

[![Build Status](https://travis-ci.org/ArtemAlagizov/cucumber-test-results-react.svg?branch=master)](https://travis-ci.org/ArtemAlagizov/cucumber-test-results-react)
[![Coverage Status](https://img.shields.io/coveralls/github/ArtemAlagizov/cucumber-test-results-react.svg)](https://coveralls.io/github/ArtemAlagizov/cucumber-test-results-react?branch=master)

and 

[cucumber-test-results-spring-boot](https://github.com/ArtemAlagizov/cucumber-test-results-spring-boot)

[![Build Status](https://travis-ci.org/ArtemAlagizov/cucumber-test-results-spring-boot.svg?branch=master)](https://travis-ci.org/ArtemAlagizov/cucumber-test-results-spring-boot)
[![Coverage Status](https://img.shields.io/coveralls/github/ArtemAlagizov/cucumber-test-results-spring-boot.svg)](https://coveralls.io/github/ArtemAlagizov/cucumber-test-results-spring-boot?branch=master)

* to run locally:
   * clone above repos and this one to the one folder level
   * run
      ```
      docker-compose up
      ```
* to deploy to a docker swarm cluster:
  ```
  TB_IP=3.13.45.208 TB_NUMBER=33 BACKEND_URL=http://3.13.45.208:3035 docker stack deploy -c docker-compose.depl.yml cucumberStackk
  ```
* design:
  * **cucumber-test-results-react** is connected with **cucumber-test-results-spring-boot** through websockets/stomp
  * **cucumber-test-results-spring-boot** has **/cucumber-report** endpoint to which **POST** request can be made with results of cucumber testing (**post-cucumber-results.ps1** example)
  * once **cucumber-test-results-spring-boot** receives the report, **cucumber-test-results-react** is informed about it through websocket connection
  * once **cucumber-test-results-react** gets this info it sends **GET** request to **/cucumber-report** to get the report and render it
  * there is an endpoint **/health-monitoring-services** to which a list of services **health** can be sent to it
    * **post-health-monitoring-details.sh** script is an example

---
  requests body example
---
**POST** to http://3.13.45.208:3036/health-monitoring-services
```
{
   "backendIp":"3.13.45.208",
   "healthMonitoringServiceDetails":[
      {
         "title":"sky-service-backend",
         "id":"sky-service-backend",
         "healthy":false,
         "healthCheckUrl":"http://{BACKEND_IP}:3001",
         "swaggerUrl":"http://google.com"
      }
   ]
}
```
**POST** to http://3.13.45.208:3036/deployment-data
```
{
	"releaseVersion": "2.43.0",
	"dateTimeOfDeployment": "30-12-2019T01:31:25"
}
```
**POST** to http://3.13.45.208:3036/cucumber-report?dateTimeOfReportCreation=31-12-2019T07:55:57
```
[
  {
    "line": 2,
    "elements": [
      {
        "line": 4,
        "name": "I am llogged in and at the landing page",
        "description": "",
        "type": "background",
        "keyword": "Background",
        "steps": [
          {
            "result": {
              "duration": 7733117900,
              "status": "passed"
            },
            "line": 5,
            "name": "I am at the Login page",
            "match": {
              "location": "Authentication.i_am_at_the_Login_page()"
            },
            "keyword": "Given "
          },
          {
            "result": {
              "duration": 1845051400,
              "status": "passed"
            },
            "line": 6,
            "name": "I enter username of authorised user",
            "match": {
              "location": "Authentication.i_enter_username_of_authorised_user()"
            },
            "keyword": "When "
          }
        ]
      }
    ],
    "name": "SMIC use case E2E testing (Product: Z41A)",
    "description": "",
    "id": "smic-use-case-e2e-testing-(product:-z41a)",
    "keyword": "Feature",
    "uri": "src/test/features/SMIC_SingleWaferComputations.feature",
    "tags": [
      {
        "name": "@SeleniumFeature",
        "type": "Tag",
        "location": {
          "line": 1,
          "column": 1
        }
      }
    ]
  }
]
```
