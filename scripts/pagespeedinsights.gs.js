import axios from 'axios'
import Pivo from '@evolvable-by-design/pivo'

const BASE_API_URL = 'http://localhost:8000/'

export async function pageSpeedInsights(url,device,filter_third_party_resources,http_secure) {
  
  url = url || 'www.statsravingmad.com';
  const strategy = 'desktop' || device; // 'desktop' or 'mobile'. 
  filter_third_party_resources = 'true' || filter_third_party_resources;
  http_secure = 'false' || http_secure ; // if it SSL type in "true".
  console.log(http_secure); // for test runs. comment it out if you like. See logs using Ctrl + Enter.
  
  let http_protocol
  // Create a protocol parameter to pass to the GET URL
  switch (http_secure)  {
        case 'false':
      http_protocol = 'http://';
            break;
        case 'true':
      http_protocol = 'https://';
            break;
    }
  
  console.log(http_protocol); // for test runs. comment it out if you like

  var key = 'AIzaSyBJW16KnBT_xILW5X6tdyqVB6SoYGkjlQA';     // Get the API key from Google Dev Console

  var documentation = (await axios.options(BASE_API_URL)).data
  var pivo = new Pivo(documentation)
  var apiOperation = pivo.get('https://github.com/evolvable-by-design/use-cases/page-speed-insight/vocab#PageSpeedInsights').getOrUndefined()
   
  console.log(url); // for test runs. comment it out if you like

  var response = await apiOperation.invoke({
    url: http_protocol + url,
    key,
    filter_third_party_resources,
    strategy
  })
  
  var result = response.data; // yeap, it is JSON

  const score = await result.getOneValue('https://github.com/evolvable-by-design/use-cases/page-speed-insight/vocab#speedScore')
  console.log(score); // for test runs. comment it out if you like

  return(score);
}
