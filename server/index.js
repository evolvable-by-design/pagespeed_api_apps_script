const express = require('express')
const morgan = require('morgan')
const path = require('path')
const YAML = require('yamljs')

const PORT = process.env.PORT || 8000

const apiDocumentation = YAML.load(path.join(__dirname, '/openapi.yaml'))

const app = express()
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
app.options('/', (_, res) => res.status(200).json(apiDocumentation))

app.get('/v1/runPageSpeed', (req, res) => {
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
})

app.get('/v2/runPageSpeed', (req, res) => {
  const { url, filter_third_party_resources, strategy, key } = req.query

  if ([url, filter_third_party_resources, strategy, key].includes(undefined)) {
    res.status(400).json({ errorMessage: 'Incorrect request body' })
  }

  res.status(200).json({
    kind: 'pagespeedonline#result',
    id: url,
    responseCode: 200,
    ruleGroups: {
      SPEED: {
        score: 80
      }
    }
  })
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`))