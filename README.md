## What is this

This Flex Plugin is part of this Blog Post (TODO: ADD URL) on how you can segregate the view of Flex Insights per BPO.

It is better to follow the steps from the Post, as this plugin here is latest step you be working on.

## How to install and test locally

Assuming you already have `twilio` cli, then:

1. `npm install`
2. `npm start`

That is it, a new browser tab on `http://localhost:3000` should open with this Plugin running.

## What needs to be changed before deploying?

[This line](https://github.com/bruno222/twilio-flex-insights-per-bpo/blob/main/src/FlexInsightsPerBpoPlugin.tsx#L18) is all you have to update to have this Plugin working.

## How to Deploy this Plugin?

Like any other Flex Plugin! In short:

1. `twilio flex:plugins:build`
2. `twilio flex:plugins:deploy --changelog "first deploy"`
