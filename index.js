const {Client,GatewayIntentBits}=require("discord.js");
// const {geter} =require('./find.js');
const sdk = require('api')('@eden-ai/v2.0#9d63fzlmkek994');
sdk.auth('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMjllNjQyOGEtMTg4Ni00MDg3LTllN2UtN2JiNzQ0YTJmYjJiIiwidHlwZSI6ImFwaV90b2tlbiJ9.Ezzo-P33pWStq2zx5k8Q_Q5UgIFYsTBAYC7vVkxk1FY');
const client=new Client({
    intents:[GatewayIntentBits.Guilds,GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent]
})
client.on('messageCreate',async (message)=>{

    console.log(message.content)
    if(message.author.bot)
    return;

    if(message.content.startsWith('create')){
        const url=message.content.split('create ')[1];
        let data=await sdk.text_generation_create({
            response_as_dict: true,
            attributes_as_list: false,
            show_original_response: false,
            temperature: 0,
            max_tokens: 1000,
            providers: 'google',
            text: url
          })
        // let reply= await geter(url);
        console.log(data.data.google.generated_text);
        await message.reply(data.data.google.generated_text);
    }
    else{
    message.reply({
        content:"Hi from mu-two"
    })
    }
});
// async function rep(message,url){
//     let reply= await geter(url);
//     console.log(reply);
//     message.reply(reply);
// }
client.login('MTE1MzA1NTI5NTk0NjM2Mjk4MA.GvYIv6.Jcl54Qh7SDguY_CSbk7iTwU2zXehL-l3YChgnk')