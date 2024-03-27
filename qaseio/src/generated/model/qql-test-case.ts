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


import { Attachment } from './attachment';
import { CustomFieldValue } from './custom-field-value';
import { TagValue } from './tag-value';
import { TestCaseParams } from './test-case-params';
import { TestStep } from './test-step';

/**
 * 
 * @export
 * @interface QqlTestCase
 */
export interface QqlTestCase {
    /**
     * 
     * @type {number}
     * @memberof QqlTestCase
     */
    'id'?: number;
    /**
     * 
     * @type {number}
     * @memberof QqlTestCase
     */
    'position'?: number;
    /**
     * 
     * @type {string}
     * @memberof QqlTestCase
     */
    'title'?: string;
    /**
     * 
     * @type {string}
     * @memberof QqlTestCase
     */
    'description'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof QqlTestCase
     */
    'preconditions'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof QqlTestCase
     */
    'postconditions'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof QqlTestCase
     */
    'severity'?: number;
    /**
     * 
     * @type {number}
     * @memberof QqlTestCase
     */
    'priority'?: number;
    /**
     * 
     * @type {number}
     * @memberof QqlTestCase
     */
    'type'?: number;
    /**
     * 
     * @type {number}
     * @memberof QqlTestCase
     */
    'layer'?: number;
    /**
     * 
     * @type {number}
     * @memberof QqlTestCase
     */
    'is_flaky'?: number;
    /**
     * 
     * @type {number}
     * @memberof QqlTestCase
     */
    'behavior'?: number;
    /**
     * 
     * @type {number}
     * @memberof QqlTestCase
     */
    'automation'?: number;
    /**
     * 
     * @type {number}
     * @memberof QqlTestCase
     */
    'status'?: number;
    /**
     * 
     * @type {number}
     * @memberof QqlTestCase
     */
    'milestone_id'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof QqlTestCase
     */
    'suite_id'?: number | null;
    /**
     * 
     * @type {Array<CustomFieldValue>}
     * @memberof QqlTestCase
     */
    'custom_fields'?: Array<CustomFieldValue>;
    /**
     * 
     * @type {Array<Attachment>}
     * @memberof QqlTestCase
     */
    'attachments'?: Array<Attachment>;
    /**
     * 
     * @type {string}
     * @memberof QqlTestCase
     */
    'steps_type'?: string | null;
    /**
     * 
     * @type {Array<TestStep>}
     * @memberof QqlTestCase
     */
    'steps'?: Array<TestStep>;
    /**
     * 
     * @type {TestCaseParams}
     * @memberof QqlTestCase
     */
    'params'?: TestCaseParams;
    /**
     * 
     * @type {Array<TagValue>}
     * @memberof QqlTestCase
     */
    'tags'?: Array<TagValue>;
    /**
     * Deprecated, use `author_id` instead.
     * @type {number}
     * @memberof QqlTestCase
     * @deprecated
     */
    'member_id'?: number;
    /**
     * 
     * @type {number}
     * @memberof QqlTestCase
     */
    'author_id'?: number;
    /**
     * 
     * @type {string}
     * @memberof QqlTestCase
     */
    'created_at'?: string;
    /**
     * 
     * @type {string}
     * @memberof QqlTestCase
     */
    'updated_at'?: string;
}

