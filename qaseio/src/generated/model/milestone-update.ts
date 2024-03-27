/* tslint:disable */
/* eslint-disable */
/**
 * Qase.io TestOps API v1
 * Qase TestOps API v1 Specification.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@qase.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface MilestoneUpdate
 */
export interface MilestoneUpdate {
    /**
     * 
     * @type {string}
     * @memberof MilestoneUpdate
     */
    'title'?: string;
    /**
     * 
     * @type {string}
     * @memberof MilestoneUpdate
     */
    'description'?: string;
    /**
     * 
     * @type {string}
     * @memberof MilestoneUpdate
     */
    'status'?: MilestoneUpdateStatusEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum MilestoneUpdateStatusEnum {
    COMPLETED = 'completed',
    ACTIVE = 'active'
}


