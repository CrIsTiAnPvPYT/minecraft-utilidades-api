const axios = require('axios');

const style = {
    Reset: "\x1b[0m",
    Bright: "\x1b[1m",
    Dim: "\x1b[2m",
    Underscore: "\x1b[4m",
    Blink: "\x1b[5m",
    Reverse: "\x1b[7m",
    Hidden: "\x1b[8m",
    //
    FgBlack: "\x1b[30m",
    FgRed: "\x1b[31m",
    FgGreen: "\x1b[32m",
    FgYellow: "\x1b[33m",
    FgBlue: "\x1b[34m",
    FgMagenta: "\x1b[35m",
    FgCyan: "\x1b[36m",
    FgWhite: "\x1b[37m",
    //
    BgBlack: "\x1b[40m",
    BgRed: "\x1b[41m",
    BgGreen: "\x1b[42m",
    BgYellow: "\x1b[43m",
    BgBlue: "\x1b[44m",
    BgMagenta: "\x1b[45m",
    BgCyan: "\x1b[46m",
    BgWhite: "\x1b[47m"
}

const cabeza = (name) => {
    if (!name) return console.log(`${style.Underscore}${style.Bright}Minecraft-Utilidades${style.Reset} ${style.BgRed}${style.Bright}ERROR:${style.Reset} ${style.Bright}Necesitas proporcionar un nombre de usuario${style.Reset}`);
    return `https://cravatar.eu/helmhead/${name}/600.png`;
};

const avatar = (name) => {
    if (!name) return console.log(`${style.Underscore}${style.Bright}Minecraft-Utilidades${style.Reset} ${style.BgRed}${style.Bright}ERROR:${style.Reset} ${style.Bright}Necesitas proporcionar un nombre de usuario${style.Reset}`);
    return `https://cravatar.eu/helmavatar/${name}/600.png`;
};

const cuerpo = async(name) => {
    if (!name) return console.log(`${style.Underscore}${style.Bright}Minecraft-Utilidades${style.Reset} ${style.BgRed}${style.Bright}ERROR:${style.Reset} ${style.Bright}Necesitas proporcionar un nombre de usuario${style.Reset}`);
    const res = await axios.get(`https://api.mojang.com/users/profiles/minecraft/${name}`);
    let result = await `https://crafatar.com/renders/body/${res.data.id}?size=512&default=MHF_Steve&overlay&scale=10.png`;
    return result
};

const skin = async(name) => {
    if (!name) return console.log(`${style.Underscore}${style.Bright}Minecraft-Utilidades${style.Reset} ${style.BgRed}${style.Bright}ERROR:${style.Reset} ${style.Bright}Necesitas proporcionar un nombre de usuario${style.Reset}`);
    const res = await axios.get(`https://api.mojang.com/users/profiles/minecraft/${name}`);
    return `https://crafatar.com/skins/${res.data.id}?size=512&default=MHF_Steve&overlay&scale=10.png`;
};

const server = async(ip) => {
    if (!ip) return console.log(`${style.Underscore}${style.Bright}Minecraft-Utilidades${style.Reset} ${style.BgRed}${style.Bright}ERROR:${style.Reset} ${style.Bright}No se ha proporcionado la ip de un servidor${style.Reset}`);
    const api = await axios.get(`https://api.mcsrvstat.us/2/${ip}`)
    return api.data;
};

const server_img = (ip) => {
    if (!ip) return console.log(`${style.Underscore}${style.Bright}Minecraft-Utilidades${style.Reset} ${style.BgRed}${style.Bright}ERROR:${style.Reset} ${style.Bright}No se ha proporcionado la ip de un servidor${style.Reset}`);
    return `https://api.mcsrvstat.us/icon/${ip}`;
};


const perfil = async(name) => {
    if (!name) return console.log(`${style.Underscore}${style.Bright}Minecraft-Utilidades${style.Reset} ${style.BgRed}${style.Bright}ERROR:${style.Reset} ${style.Bright}Necesitas proporcionar un nombre de usuario${style.Reset}`);
    const res = await axios.get(`https://api.mojang.com/users/profiles/minecraft/${name}`);
    const data = await axios.get(`https://sessionserver.mojang.com/session/minecraft/profile/${res.data.id}`);
    return data.data
};

/*const mojangStatus = async() => {
    if (!name) return console.log(`${style.Underscore}${style.Bright}Minecraft-Utilidades${style.Reset} ${style.BgRed}${style.Bright}ERROR:${style.Reset} ${style.Bright}El error no se ha identificado${style.Reset}`);
    const res = await axios.get(`https://status.mojang.com/check`);
    return res.data
}*/

module.exports = {
    cabeza,
    avatar,
    cuerpo,
    skin,
    server,
    server_img,
    perfil,
    // mojangStatus
};