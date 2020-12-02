// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "3fmq8qdjv7hgd2mjlrourm943m",     // CognitoClientID
  "api_base_url": "https://8e0dozb6n5.execute-api.us-west-2.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-lambda-refarch-stack-another.auth.us-west-2.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d1g0kdpb8b2cgg.amplifyapp.com"                                      // AmplifyURL
};

export default config;
