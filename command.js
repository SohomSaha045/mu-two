const { REST, Routes }=require("discord.js");

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];

const rest = new REST({ version: '10' }).setToken('MTE1MzA1NTI5NTk0NjM2Mjk4MA.GYSI3e.tDQN5PpeVdJag-utAPuvsX0nGjdtWavRzEGTkI');

try {
  console.log('Started refreshing application (/) commands.');

  await rest.put(Routes.applicationCommands(1153055295946362980), { body: commands });

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}