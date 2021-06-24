module.exports=  
{
    "CommonModulesLayerCodeVersion": {
    "Type": "Custom::S3Version",
    "Properties": {
      "ServiceToken": { "Fn::GetAtt": ["CFNLambda", "Arn"] },
      "Bucket": { "Ref": "BootstrapBucket" },
      "Key": { "Fn::Sub": "${BootstrapPrefix}/lambda/common-modules-layer.zip" },
      "BuildDate": (new Date()).toISOString()
    }
  },
  "CommonModulesLambdaLayer": {
    "Type": "AWS::Lambda::LayerVersion",
    "Properties": {
      "Content": {
        "S3Bucket": { "Ref": "BootstrapBucket" },
        "S3Key": { "Fn::Sub": "${BootstrapPrefix}/lambda/common-modules-layer.zip" },
        "S3ObjectVersion": { "Ref": "CommonModulesLayerCodeVersion" }
      },
      CompatibleRuntimes:["nodejs12.x"],
    }
  },
  "AwsSdkLayerCodeVersion": {
    "Type": "Custom::S3Version",
    "Properties": {
      "ServiceToken": { "Fn::GetAtt": ["CFNLambda", "Arn"] },
      "Bucket": { "Ref": "BootstrapBucket" },
      "Key": { "Fn::Sub": "${BootstrapPrefix}/lambda/aws-sdk-layer.zip" },
      "BuildDate": (new Date()).toISOString()
    }
  },
  "AwsSdkLayerLambdaLayer": {
    "Type": "AWS::Lambda::LayerVersion",
    "Properties": {
      "Content": {
        "S3Bucket": { "Ref": "BootstrapBucket" },
        "S3Key": { "Fn::Sub": "${BootstrapPrefix}/lambda/aws-sdk-layer.zip" },
        "S3ObjectVersion": { "Ref": "AwsSdkLayerCodeVersion" }
      },
      CompatibleRuntimes:["nodejs12.x"],
    }
  },
  "CfnLambdaLayerCodeVersion": {
    "Type": "Custom::S3Version",
    "Properties": {
      "ServiceToken": { "Fn::GetAtt": ["CFNLambda", "Arn"] },
      "Bucket": { "Ref": "BootstrapBucket" },
      "Key": { "Fn::Sub": "${BootstrapPrefix}/lambda/cfn-lambda-layer.zip" },
      "BuildDate": (new Date()).toISOString()
    }
  },
  "CfnLambdaLayer": {
    "Type": "AWS::Lambda::LayerVersion",
    "Properties": {
      "Content": {
        "S3Bucket": { "Ref": "BootstrapBucket" },
        "S3Key": { "Fn::Sub": "${BootstrapPrefix}/lambda/cfn-lambda-layer.zip" },
        "S3ObjectVersion": { "Ref": "CfnLambdaLayerCodeVersion" }
      },
      CompatibleRuntimes:["nodejs12.x"],
    }
  },

}