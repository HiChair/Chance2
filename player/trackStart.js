module.exports = (client, message, track) => {
    message.channel.send(`${client.emotes.music} - Now playing ${track.title}`);
};