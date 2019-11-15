$cucumberDashboardBackendIpAndPort = $env:CUCUMBER_DASHBOARD_BACKEND_IP_AND_PORT
$deployedWrIp = $env:DEPLOYED_WR_IP
$cucumberDashboardBackendUrl = "http://$($cucumberDashboardBackendIpAndPort)/health-monitoring-services"

$services = @"
{
   "backendIp":"$deployedWrIp",
   "healthMonitoringServiceDetails":[
      {
         "title":"gateway",
         "id":"gateway",
         "healthy":false,
         "healthCheckUrl":"http://{BACKEND_IP}:3002/health",
         "swaggerUrl":"http://google.com"
      },
      {
         "title":"java computation",
         "id":"java_computation",
         "healthy":false,
         "healthCheckUrl":"http://{BACKEND_IP}:3011/actuator/health",
         "swaggerUrl":"http://{BACKEND_IP}:3011/swagger-ui.html"
      },
      {
         "title":"overlay kpi",
         "id":"overlay_kpi",
         "healthy":false,
         "healthCheckUrl":"http://{BACKEND_IP}:3004/health",
         "swaggerUrl":"http://{BACKEND_IP}:3004/ui"
      },
      {
         "title":"authentication",
         "id":"authentication",
         "healthy":false,
         "healthCheckUrl":"http://{BACKEND_IP}:3001/actuator/health",
         "swaggerUrl":"http://{BACKEND_IP}:3001/swagger-ui.html"
      },
      {
         "title":"snapshot service",
         "id":"snapshot_service",
         "healthy":false,
         "healthCheckUrl":"http://{BACKEND_IP}:3009/health",
         "swaggerUrl":"http://google.com"
      },
      {
         "title":"lis data channel service",
         "id":"lis_data_channel_service",
         "healthy":false,
         "healthCheckUrl":"http://{BACKEND_IP}:3013/health",
         "swaggerUrl":"http://google.com"
      },
      {
         "title":"screenshot service",
         "id":"screenshot_service",
         "healthy":false,
         "healthCheckUrl":"http://{BACKEND_IP}:3012/health",
         "swaggerUrl":"http://google.com"
      },
      {
         "title":"react",
         "id":"react",
         "healthy":false,
         "healthCheckUrl":"http://{BACKEND_IP}:3000/health",
         "swaggerUrl":"http://google.com"
      },
      {
         "title":"react ca",
         "id":"react_ca",
         "healthy":false,
         "healthCheckUrl":"http://{BACKEND_IP}:3018/health",
         "swaggerUrl":"http://google.com"
      },
      {
         "title":"customer projects",
         "id":"customer_projects",
         "healthy":false,
         "healthCheckUrl":"http://{BACKEND_IP}:3015/health",
         "swaggerUrl":"http://{BACKEND_IP}:3015/ui"
      },
      {
         "title":"data association",
         "id":"data_association",
         "healthy":false,
         "healthCheckUrl":"http://{BACKEND_IP}:3014/actuator/health",
         "swaggerUrl":"http://{BACKEND_IP}:3014/swagger-ui.html"
      }
   ]
}
"@

Invoke-WebRequest -Uri $cucumberDashboardBackendUrl -Method POST -Body $services -ContentType "application/json"