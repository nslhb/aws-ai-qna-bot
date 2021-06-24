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
//   "EsProxyModuleLayerCodeVersion": {
//     "Type": "Custom::S3Version",
//     "Properties": {
//       "ServiceToken": { "Fn::GetAtt": ["CFNLambda", "Arn"] },
//       "Bucket": { "Ref": "BootstrapBucket" },
//       "Key": { "Fn::Sub": "${BootstrapPrefix}/lambda/esproxy-modules-layer.zip" },
//       "BuildDate": (new Date()).toISOString()
//     }
//   },
//   "EsProxyModuleLambdaLayer": {
//     "Type": "AWS::Lambda::LayerVersion",
//     "Properties": {
//       "Content": {
//         "S3Bucket": { "Ref": "BootstrapBucket" },
//         "S3Key": { "Fn::Sub": "${BootstrapPrefix}/lambda/esproxy-modules-layer.zip" },
//         "S3ObjectVersion": { "Ref": "EsProxyModuleLayerCodeVersion" }
//       },
//       CompatibleRuntimes:["nodejs12.x"],
//     }
//   },
//   "ProxyESLayerCodeVersion": {
//     "Type": "Custom::S3Version",
//     "Properties": {
//       "ServiceToken": { "Fn::GetAtt": ["CFNLambda", "Arn"] },
//       "Bucket": { "Ref": "BootstrapBucket" },
//       "Key": { "Fn::Sub": "${BootstrapPrefix}/lambda/proxy-es-layer.zip" },
//       "BuildDate": (new Date()).toISOString()
//     }
//   },
//   "ProxyESLayerLambdaLayer": {
//     "Type": "AWS::Lambda::LayerVersion",
//     "Properties": {
//       "Content": {
//         "S3Bucket": { "Ref": "BootstrapBucket" },
//         "S3Key": { "Fn::Sub": "${BootstrapPrefix}/lambda/proxy-es-layer.zip" },
//         "S3ObjectVersion": { "Ref": "ProxyESLayerCodeVersion" }
//       },
//       CompatibleRuntimes:["nodejs12.x"],
//     }
//   }
}