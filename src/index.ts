require("dotenv").config()
import { Client } from "discord.js"

import * as Commands from "./commands"

const discord = new Client();

let Store = {
    bot_name: "",
    commands: {},
    prefix: "!",
};

const setState = (newVal: any) =>
    (Store = {
        ...Store,
        ...newVal,
    });

const setup = async () => {
    const configs = await getConfigs(Commands);
    
    setState({
        commands: configs
    })

    return true;
};

const getConfigs = async (commands: object) => {
    let configs = {};

    Object.values(commands).forEach((command) => {
        configs = {
            ...configs,
            [command.config.name.toLowerCase()]: {
                ...command.config,
                command: `${Store.prefix}${command.config.command}`,
                exec: command,
            },
        };
    });

    return configs;
};

discord.once('ready', async () => {
    await setup();

    setState({
        bot_name: discord.user && discord.user.username
    })

    console.log("Bot up and running!");
});

discord.on("message", (message) => {
    const commands: BigObject<CommandConfig> = Store.commands;
    Object.values(commands).forEach((command) => {
        const regex = new RegExp(command.command);
        
        if ( regex.test(message.content) ) {
            command.exec({
                ...message,
                deleteMessage: () => message.delete()
            });
        }
    });
});

discord.login(process.env.BOT_TOKEN);
