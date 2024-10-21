require('dotenv').config();
const Telegraf = require('telegraf')
const bot = new Telegraf(process.env.TOKEN)

bot.start(ctx => {
    const from = ctx.update.message.from
    console.log(from)
    ctx.reply(`Seja bem vindo, ${from.first_name}!`)

})

bot.on('text', async (ctx, next) => {
    await ctx.reply('Mid1')
    await next()
})

bot.on('text', async ctx => {
    await ctx.reply('Mid2')
})

bot.startPolling()