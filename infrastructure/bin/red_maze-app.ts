#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { RedMazeAppStack } from '../red_maze-app-stack';

const app = new cdk.App();
new RedMazeAppStack(app, 'RedMazeAppStack');
