const express = require('express')
const morgan = require('morgan')
const path = require('path')
const YAML = require('yamljs')

const PORT = process.env.PORT || 8000
const VERSION = 2 // 1 or 2
const DOCUMENTATION_FILE_NAME = VERSION === 1 ? '/openapi-v1.yaml' : '/openapi-v2.yaml'
const apiDocumentation = YAML.load(path.join(__dirname, DOCUMENTATION_FILE_NAME))

const app = express()
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
app.options('/', (_, res) => res.status(200).json(apiDocumentation))

app.get('/v1/runPageSpeed', (req, res) => {
  if (VERSION === 1) {
    const { url, filter_third_party_resources, strategy, key } = req.query

    if ([url, filter_third_party_resources, strategy, key].includes(undefined)) {
      res.status(400).json({ errorMessage: 'Incorrect request body' })
    }

    res.status(200).json({
      kind: 'pagespeedonline#result',
      id: url,
      responseCode: 200,
      score: 80
    })
  } else {
    res.set('Location', 'https://www.googleapis.com/pagespeedonline/v2/runPageSpeed').sendStatus(301)
  }
})

app.get('/v2/runPageSpeed', (req, res) => {
  if (VERSION === 2) {
    const { url, filter_third_party_resources, strategy, key } = req.query

    if ([url, filter_third_party_resources, strategy, key].includes(undefined)) {
      res.status(400).json({ errorMessage: 'Incorrect request body' })
    }

    res.status(200).json({
      kind: 'pagespeedonline#result',
      id: url,
      responseCode: 200,
      ruleGroups: {
        score: 70,
        SPEED: {
          score: 70
        }
      }
    })
  } else {
    res.sendStatus(404)
  }
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`))