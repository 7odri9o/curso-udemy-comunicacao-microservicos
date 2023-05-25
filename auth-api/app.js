import express from 'express'

const app = express()

const PORT = process.env.PORT || 3000

app.get('/api/status', (req, res) => {
  return res.status(200).json({
    service: 'AUTH API',
    status: 'running'
  })
})

app.listen(PORT, () => {
  console.log('Server running')
})