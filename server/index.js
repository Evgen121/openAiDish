const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const { Configuration, OpenAIApi } = require('openai')

const config = new Configuration({
    apiKey: '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',
})

const openai = new OpenAIApi(config)

// setup Server
const app = express();
app.use(bodyParser.json());
app.use(cors());

//endpoint for chatGPT

app.post('/dish', async (req, res) => {

    const { prompt } = req.body;

    const completion = await openai.createCompletion({
        model: 'text-davinci-003',
        max_tokens: 1000,
        temperature: 0,
        prompt: prompt,
    })
    res.send(completion.data.choices[0].text);
})

const port = 5000;
app.listen(port, () => {
    console.log(`server work on port ${port}`)
})