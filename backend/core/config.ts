const CONFIG_KEYS = [
    "SERVER_HOST",
    "SERVER_PORT",
    "DB_PATH",
    "ENVIRONMENT",
] as const;

export type Config = {
    [K in typeof CONFIG_KEYS[number]]: string;
};
