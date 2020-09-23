const express = require('express')
const app = express()
const port = 3000


/**
 * Executes a shell command and return it as a Promise.
 * @param cmd {string}
 * @return {Promise<string>}
 */
function execShellCommand(cmd) {
  const { exec } = require('child_process')

  return new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        console.warn(error)
      }
      resolve(stdout? stdout : stderr)
    })
  })
}


app.get('/resolution/:x/:y', (req, res) => {
  const { x, y } = req.params

  execShellCommand(`C:\\restful-windows\\utils\\qres\\qres.exe x=${x} y=${y} f=60`)

  res.json({ x, y })
}) 

app.get('/game/botw', (req, res) => {
  const { x, y } = req.params
 
  execShellCommand(`"C:\\Users\\simonwjackson\\Downloads\\cemu_1.21.1\\Cemu.exe" -f -g "C:\\storage\\gaming\\software\\wii-u\\The Legend of Zelda Breath of the Wild [ALZE01]\\code\\U-King.rpx"`)

  res.json({ x, y })
}) 

app.get('/power/:flag', (req, res) => {
  const { type } = req.params
  let flag = ''

  switch (type) {
    case 'hibernate':
    default:
      flag = '/h'
  }

  execShellCommand(`C:\Windows\System32\shutdown.exe ${flag}`)

  res.json({ flag })
}) 

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
