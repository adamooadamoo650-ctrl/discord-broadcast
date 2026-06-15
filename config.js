 module.exports = {
    bot: {
        tokens: [
          "MTUxNjA2NTgxMjUzOTExNzYwOA.GKZfEo.qTib3hyHYrauZhnduTUpI4zEtVzTSg8i92YN2c",              // Main bot token - Replace with your actual token
        //  "MTUxNjA2NjAxNjA4NDM2NTQ0NA.G8m0rj.12u8QT-H9KM9qUgdcuaOkJPEsxfCbhZKeJYlAY",      // 2 bot token - Uncomment and replace to use
        //  "MTUxNjA2NTkwNDYxNjU0MjIwOA.GgTrsU.rXgLCLUQDA754kn1_aah9GmBtFuvonqrhh0VEs",       // 3 bot token - Uncomment and replace to use
        //  "YOUR_FOURTH_BOT_TOKEN_HERE",      // 4 bot token - Uncomment and replace to use
        //  "YOUR_FIFTH_BOT_TOKEN_HERE",       // 5 bot token - Uncomment and replace to use
        ].filter(Boolean),

        defaultLanguage: 'ar', // ar | en لغة البوت
        
        activity: {
            name: 'Wick Studio', // رسالة حالة البوت
            type: 'WATCHING', // PLAYING, STREAMING, LISTENING, WATCHING, COMPETING
            status: 'dnd' // online, idle, dnd, invisible
        }
    },
    server: {
        guildId: '1448798499087843423',         // ايدي السيرفر
        broadcastRoleId: '1469314086209847355', // ايدي الرول اللي يستخدم عليها البوت
        reportChannelId: '1457324293858787564' // ايدي الروم اللي يرسل فيه البوت التقارير
    },
    broadcast: {
        cooldownTime: 1000, // لا تلعب فيها
        memberCooldown: 100, // لا تلعب فيها
        requestsPerSecond: 1 // لا تلعب فيها
    },

    colors: {
        primary: '#5865F2',    // Discord Blue (used for standard messages)
        success: '#57F287',    // Green (used for successful operations)
        warning: '#FEE75C',    // Yellow (used for warnings)
        error: '#ED4245',      // Red (used for errors)
        neutral: '#5D5D5D'     // Gray (used for neutral messages)
    }
};
