export const Ping: Command = ({author, channel}) => {
    channel.send(`${author.username} you send a Ping in ${channel.name}`);
}

Ping.config = {
    name: "Ping",
    description: "Simple ping pong command",
    command: "ping",
    permissions: "everyone",
};