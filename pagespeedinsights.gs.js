function pageSpeedInsights(url,device,filter_third_party_resources,http_secure) {
  
  url = url || 'www.statsravingmad.com';
  strategy = 'desktop' || device; // 'desktop' or 'mobile'. 
  filter_third_party_resources = 'true' || filter_third_party_resources;
  http_secure = 'false' || http_secure ; // if it SSL type in "true".
  Logger.log(http_secure); // for test runs. comment it out if you like. See logs using Ctrl + Enter.
  
  // Create a protocol parameter to pass to the GET URL
  switch (http_secure)  {
        case 'false':
      http_protocol = 'http://';
            break;
        case 'true':
      http_protocol = 'https://';
            break;
    }
  
  Logger.log(http_protocol); // for test runs. comment it out if you like
  
  var key = 'YOUR API KEY';     // Get the API key from Google Dev Console
  var api = 'https://www.googleapis.com/pagespeedonline/v1/runPagespeed?url=' + http_protocol + url
                + '&filter_third_party_resources=' + filter_third_party_resources + '&strategy=' + strategy + '&key=' + key;
  
  Logger.log(api); // for test runs. comment it out if you like
  Logger.log(url); // for test runs. comment it out if you like
  
  var response = UrlFetchApp.fetch(api, {muteHttpExceptions: true });
  
  var result = JSON.parse(response.getContentText()); // yeap, it is JSON

  score = result.score;
  Logger.log(score); // for test runs. comment it out if you like

  return(score);
}