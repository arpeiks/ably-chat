import ably from 'ably'
import express, { Express, Request, Response } from 'express'

const key = '37EIzw.OhTL3Q:nL2B1l7Rkboe4NwW3B_n45OsuiwfLC2nNVKlXwUnIAk'

const app: Express = express()
const ablyRealtime = new ably.Realtime(key)
const channel = ablyRealtime.channels.get('ably-chat')

app.use(express.json())

app.get('/send-message', (_req: Request, res: Response) => {
  const body = { msg: 'Hi there', user: 'arpeiks', action: 'sent' }
  const data = { msg: body.msg, user: body.user, action: body.action }

  channel.publish('data', data, (err) => {
    if (err) throw err
    console.log('publish suceeded', { data })
  })

  res.send({ status: 'okay', data })
})

app.listen(8000, () => console.log('Api running on port 8000'))
