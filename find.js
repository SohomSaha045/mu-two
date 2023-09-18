// async function geter(text){
const sdk = require('api')('@eden-ai/v2.0#9d63fzlmkek994');

sdk.auth('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMjllNjQyOGEtMTg4Ni00MDg3LTllN2UtN2JiNzQ0YTJmYjJiIiwidHlwZSI6ImFwaV90b2tlbiJ9.Ezzo-P33pWStq2zx5k8Q_Q5UgIFYsTBAYC7vVkxk1FY');
let data=await sdk.text_generation_create({
  response_as_dict: true,
  attributes_as_list: false,
  show_original_response: false,
  temperature: 0,
  max_tokens: 1000,
  providers: 'google',
  text: 'find 5 names of dog'
})
// return data;

// }
// module.exports=geter;
