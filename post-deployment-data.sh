#!/usr/bin/env bash

releaseVersion=$bamboo_inject_target_release_TARGET_RELEASE
dateTimeOfDeployment=$(date +"%d-%m-%YT%H:%M:%S")
pwd
deploymentDataJsonString='{"releaseVersion":'"\"$releaseVersion\""',"dateTimeOfDeployment":'"\"$dateTimeOfDeployment\""'}'
echo deploymentDataJsonString: $deploymentDataJsonString
curl -X POST -H "Content-Type: application/json" -d $deploymentDataJsonString http://172.19.234.73:3036/deployment-data/