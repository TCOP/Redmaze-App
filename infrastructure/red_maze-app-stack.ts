import { Stack, StackProps, aws_s3 as s3, aws_s3_deployment as s3deploy, aws_iam as iam } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class RedMazeAppStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const redMazeBucket = new s3.Bucket(this, 'RedMazeBucket', {
      publicReadAccess: false,
      versioned: true,
      encryption: s3.BucketEncryption.S3_MANAGED
    });

    new s3deploy.BucketDeployment(this, 'RedMazeBucketDeploy', {
      sources: [s3deploy.Source.asset('./lib/src/pages')],
      destinationBucket: redMazeBucket,
    });

  }
}
