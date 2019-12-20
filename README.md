# cucumber-test-results

[aws-deployed version](http://3.13.45.208:3035/)

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
  TB_IP=172.19.234.73 TB_NUMBER=55 BACKEND_URL=http://172.19.234.73:3035 docker stack deploy -c docker-compose.depl.yml cucumberStackk
  ```
* design:
  * **cucumber-test-results-react** is connected with **cucumber-test-results-spring-boot** through websockets/stomp
  * **cucumber-test-results-spring-boot** has **/cucumber-report** endpoint to which **POST** request can be made with results of cucumber testing (**post-cucumber-results.ps1** example)
  * once **cucumber-test-results-spring-boot** receives the report, **cucumber-test-results-react** is informed about it through websocket connection
  * once **cucumber-test-results-react** gets this info it sends **GET** request to **/cucumber-report** to get the report and render it
  * there is an endpoint **/health-monitoring-services** to which a list of services **health** can be sent to it
    * **post-health-monitoring-details.sh** script is an example
