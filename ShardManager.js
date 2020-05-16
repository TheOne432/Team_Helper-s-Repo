// Include discord.js ShardingManger
const { ShardingManager, Message } = require('discord.js');

// Create your ShardingManger instance
const manager = new ShardingManager('./app.js', {
    // for ShardingManager options see:
    // https://discord.js.org/#/docs/main/v11/class/ShardingManager

    // 'auto' handles shard count automatically
    totalShards: 2, 

    // your bot token
    token: ''
});

// Spawn your shards
manager.spawn();

// The shardCreate event is emitted when a shard is created.
// You can use it for something like logging shard launches.
manager.on('shardCreate', (shard) => console.log(`============■  ${shard.id}  ■============`));
