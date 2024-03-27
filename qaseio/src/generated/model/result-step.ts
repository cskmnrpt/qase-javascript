/* tslint:disable */
/* eslint-disable */
/**
 * Qase.io TestOps API v2
 * Qase TestOps API v2 Specification.
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: support@qase.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { ResultStepData } from './result-step-data';
import { ResultStepExecution } from './result-step-execution';

/**
 * 
 * @export
 * @interface ResultStep
 */
export interface ResultStep {
    /**
     * 
     * @type {ResultStepData}
     * @memberof ResultStep
     */
    'data'?: ResultStepData;
    /**
     * 
     * @type {ResultStepExecution}
     * @memberof ResultStep
     */
    'execution'?: ResultStepExecution;
    /**
     * Nested steps will be here. The same structure is used for them.
     * @type {Array<object>}
     * @memberof ResultStep
     */
    'steps'?: Array<object>;
}

