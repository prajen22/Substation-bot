const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
  const intentName = req.body.queryResult.intent.displayName;
  let responseText = '';

  if (intentName === 'Identify Fault') {
    responseText = "Please provide more details about the fault.";
  } else if (intentName === 'Fault Details') {
    responseText = "It seems like there might be an issue with the transformer insulation. Please check the oil levels and look for any signs of leakage.";
  } else if (intentName === 'Transformer Maintenance') {
    responseText = "Transformers should be maintained every six months. The procedure includes checking oil levels, inspecting insulation, and testing for leaks.";
  } else if (intentName === 'Circuit Breaker Function') {
    responseText = "A circuit breaker protects an electrical circuit from damage caused by overload or short circuit. It interrupts current flow after a fault is detected.";
  } else {
    responseText = "I'm not sure how to help with that.";
  }

  res.json({ fulfillmentText: responseText });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

