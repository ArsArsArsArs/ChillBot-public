const ChillBotCommand = require('../../structures/ChillBotCommand');
const ChillBotTttGame = require('../../utils/ChillBotTttGame');

class TttCommand extends ChillBotCommand {
    constructor() {
        super('ttt', {
            description: 'Начинает новую партию в крестики нолики',
            category: 'fun',
            usage: '<упоминание/ID>',
            cooldown: 10
        });
    }

    async run(message, args) {
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!user) return message.client.embconstructor.fail(`${message.client.constants.emojis.info} | Укажите участника, с которым вы хотите поиграть в крестики-нолики`, message);
        if(user.bot) return message.reply({ content: 'Вы не можете предложить играть боту' });

        new ChillBotTttGame().duo(message, user.user);
    }
}

module.exports = TttCommand;