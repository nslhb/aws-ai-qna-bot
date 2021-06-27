# Extending QnABot with Lambda Hooks

As of version 4.8, the CreateRecentTopicResponse Lambda hook and related resources have been included to demonstrate how to extend QnABot with a custom Lambda hook
in Javascript.

Please read the [the README under the extensions folder](./templates/examples/extensions/README.md) for more information. 

## CreateRecentTopicsResponse Lambda Hook

The CreateRecentTopicsResponse Lambda hook is located in the [extensions folder](templates/examples/extensions/js_lambda_hooks/CreateRecentTopicsResponse/CreateRecentTopicsResponse.js). 

It demonstrates the following:

1. Reading lambda arguments specified in the Content Designer.
2. Retrieving settings from the deployment.
3. Reading properties stored about the user in the DynamoDB user table.
4. Modifying the response before it is sent back to the user.

### Using Custom Settings



