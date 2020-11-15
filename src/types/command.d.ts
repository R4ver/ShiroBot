interface CommandConfig {
    name: string;
    description: string;
    command: string;
    permissions: string | number;
    [key: string]: any;
}

interface Command {
    (props): any;
    config: CommandConfig;
}

interface BigObject<T> {
    [index: string]: T;
}
