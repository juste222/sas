const config = {
    TOKEN: "xoxc-5648853912391-5660463203765-5648854004551-2129ff5fc56a93a87823d897231740ee80c6b9c75a377e3cfc4b20c67282f47a",
    COOKIE: "xoxd-twsKytN4HOSZGYUIN84prP%2BAvdHWmghqPjdZ3Uj2nLCQpqHVCdyoNKhTAGgPn5WJD%2BIMo5UVLNqN%2BIzPodp1Z%2FiN%2B6gAqejlRmMqylIGB0R2IABJ7KDyydjuIX7Adqoih66yiYpHtkE%2FrLKHVaOojLfcVG%2FkDoG8CimOVayRcLl1kOUfl41ErBLO6w%3D%3D",
    TEAM_ID: "sai-klw2797",
    CHANNEL: "C05KHBPCXC2",
    CLAUDE_USER: "U05KAN01RAA",

    MAINPROMPT_LAST: false, // Will try to move the main prompt (main + nsfw prompt from SillyTavern) to the bottom, similar to a jailbreak
    MAINPROMPT_AS_PING: false, // Will use the main prompt as the ping message, if this true the PING_MESSAGE setting is ignored. Overrides MAINPROMPT_LAST.
    
    // If false will make Slaude send messages as plain text rather than through Slack's blocks format. The results in Slack should be the same either way.
    USE_BLOCKS: true,

    STREAMING_TIMEOUT: 240000, //Time in milliseconds after which the response stream will force close itself, 0 disables the timeout but is not recommended.

    // The final message we send with an @Claude ping to trigger his response. You can add "@Claude" to this string to control where the ping will be inside the message.
    // If there is no @Claude, the ping will automatically get added in front of the message.
    // Can be whatever you want it to be but keep in mind that it might result in unpredictable responses.
    // Anything we put here will eat into our max available tokens so keep it brief.
    PING_MESSAGE: "Assistant:",

    PORT: 5004
}

export default config;
