import express from 'express'
import { greeting } from './user'

const app = express()
app.get('/', (req,res) => res.send('This App is running properly!!!'))
app.get('/ping', (req,res) => res.send('Pong!'))
app.get('/youtube', (req,res) => res.send('Hello, youtube indonesia!'))
app.get('/dharma', (req,res) => res.send('Ini buatan dharma!'))
app.get('/hello/:name', (req,res) => {
    res.json({message:greeting(req.params.name)})
})

export default app