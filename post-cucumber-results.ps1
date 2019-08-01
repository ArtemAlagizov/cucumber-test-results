$dateTimeOfReport = Get-Date -Format 'dd-MM-yyyyTHH:mm:ss'
$uri = "http://localhost:8080/cucumber-report?dateTimeOfReportCreation=$($dateTimeOfReport)"
$filePath = 'C://Users/aalagizo/Downloads/cucumber_last.json'

$upload = Invoke-RestMethod -Uri $uri -Method Post -InFile $filePath -ContentType 'application/json' -Verbose
