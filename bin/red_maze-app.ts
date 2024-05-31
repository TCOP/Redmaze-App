#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { RedMazeAppStack } from '../lib/red_maze-app-stack';

const app = new cdk.App();
new RedMazeAppStack(app, 'RedMazeAppStack');
