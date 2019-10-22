#!/usr/bin/env bash

releaseVersion=$bamboo_inject_target_release_TARGET_RELEASE
dateTimeOfDeployment=$(date +"%d-%m-%YT%H:%M:%S")
dd-MM-yyyyTHH:mm:ss
echo "{releaseVersion:\"${$releaseVersion}\",dateTimeOfDeployment:\"${$dateTimeOfDeployment}\"}" > deploymentData.json
curl -X POST -H "Content-Type: application/json" -d deploymentData.json http://172.19.234.73:3036/cucumber-report