const exampleEmbed = {
    color: 0x0099ff,
    title: "Some title",
    url: "https://r4ver.com",
    author: {
        name: "R4ver",
        icon_url: "https://cdn.discordapp.com/avatars/108250275743035392/c69e85ad5182543afd81b3262f5e67b8.webp?size=128",
        url: "https://r4ver.com",
    },
    description: "Visit my website!",
    thumbnail: {
        url: "https://pbs.twimg.com/media/EdOrGkRXoAAUwoC?format=png&name=large",
    },
    fields: [],
    image: {
        url: "https://pbs.twimg.com/media/EdOrGkRXoAAUwoC?format=png&name=large",
    },
    timestamp: new Date(),
    footer: {
        text: "Some footer text here",
        icon_url: "https://cdn.discordapp.com/avatars/108250275743035392/c69e85ad5182543afd81b3262f5e67b8.webp?size=128",
    },
};

export const generateEmbed = (props: object) => ({
    embed: {
        ...exampleEmbed,
        ...props,
    },
});