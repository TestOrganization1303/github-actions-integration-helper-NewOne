import * as core from '@actions/core';
import { parseInputs } from './inputs';
import * as policyService from './services/policy-service';
import * as pipelineResultsService from './services/pipeline-results-service';

/**
 * Runs the action.
 */
export async function run(): Promise<void> {
  const inputs = parseInputs(core.getInput);

  switch (inputs.action) {
    case 'getPolicyNameByProfileName':
      await policyService.getPolicyNameByProfileName(inputs);
      break;
    case 'preparePipelineResults':
      await pipelineResultsService.preparePipelineResults(inputs);
      break;
    default:
      core.setFailed(`Invalid action: ${inputs.action}. Allowed actions are: getPolicyNameByProfileName, preparePipelineResults`);
  }
}
