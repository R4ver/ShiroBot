import { generateEmbed } from "@Utils"

export const Embed: Command = async ({author, channel, deleteMessage}) => { 
    await deleteMessage();

    channel.send(
        generateEmbed({
            title: "Hi I'm R4ver!",
            fields: [
                {
                    name: "Regular field title",
                    value: "Some value here",
                },
            ],
        }),
    );
};

Embed.config = {
    name: "Embed",
    description: "Rich embed",
    command: "embed",
    permissions: "everyone",
};
