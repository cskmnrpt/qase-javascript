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


import { SystemFieldOption } from './system-field-option';

/**
 * 
 * @export
 * @interface SystemField
 */
export interface SystemField {
    /**
     * 
     * @type {string}
     * @memberof SystemField
     */
    'title'?: string;
    /**
     * 
     * @type {string}
     * @memberof SystemField
     */
    'slug'?: string;
    /**
     * 
     * @type {string}
     * @memberof SystemField
     */
    'default_value'?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof SystemField
     */
    'is_required'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof SystemField
     */
    'entity'?: number;
    /**
     * 
     * @type {number}
     * @memberof SystemField
     */
    'type'?: number;
    /**
     * 
     * @type {Array<SystemFieldOption>}
     * @memberof SystemField
     */
    'options'?: Array<SystemFieldOption> | null;
}

