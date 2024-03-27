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


import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { IdResponse } from '../model';
// @ts-ignore
import { PlanCreate } from '../model';
// @ts-ignore
import { PlanListResponse } from '../model';
// @ts-ignore
import { PlanResponse } from '../model';
// @ts-ignore
import { PlanUpdate } from '../model';
/**
 * PlansApi - axios parameter creator
 * @export
 */
export const PlansApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * This method allows to create a plan in selected project. 
         * @summary Create a new plan
         * @param {string} code Code of project, where to search entities.
         * @param {PlanCreate} planCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createPlan: async (code: string, planCreate: PlanCreate, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('createPlan', 'code', code)
            // verify required parameter 'planCreate' is not null or undefined
            assertParamExists('createPlan', 'planCreate', planCreate)
            const localVarPath = `/v1/plan/{code}`
                .replace(`{${"code"}}`, encodeURIComponent(String(code)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication TokenAuth required
            await setApiKeyToObject(localVarHeaderParameter, "Token", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(planCreate, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This method completely deletes a plan from repository. 
         * @summary Delete plan
         * @param {string} code Code of project, where to search entities.
         * @param {number} id Identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deletePlan: async (code: string, id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('deletePlan', 'code', code)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deletePlan', 'id', id)
            const localVarPath = `/v1/plan/{code}/{id}`
                .replace(`{${"code"}}`, encodeURIComponent(String(code)))
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication TokenAuth required
            await setApiKeyToObject(localVarHeaderParameter, "Token", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This method allows to retrieve a specific plan. 
         * @summary Get a specific plan
         * @param {string} code Code of project, where to search entities.
         * @param {number} id Identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPlan: async (code: string, id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('getPlan', 'code', code)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getPlan', 'id', id)
            const localVarPath = `/v1/plan/{code}/{id}`
                .replace(`{${"code"}}`, encodeURIComponent(String(code)))
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication TokenAuth required
            await setApiKeyToObject(localVarHeaderParameter, "Token", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This method allows to retrieve all plans stored in selected project. 
         * @summary Get all plans
         * @param {string} code Code of project, where to search entities.
         * @param {number} [limit] A number of entities in result set.
         * @param {number} [offset] How many entities should be skipped.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPlans: async (code: string, limit?: number, offset?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('getPlans', 'code', code)
            const localVarPath = `/v1/plan/{code}`
                .replace(`{${"code"}}`, encodeURIComponent(String(code)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication TokenAuth required
            await setApiKeyToObject(localVarHeaderParameter, "Token", configuration)

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This method updates a plan. 
         * @summary Update plan
         * @param {string} code Code of project, where to search entities.
         * @param {number} id Identifier.
         * @param {PlanUpdate} planUpdate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updatePlan: async (code: string, id: number, planUpdate: PlanUpdate, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('updatePlan', 'code', code)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updatePlan', 'id', id)
            // verify required parameter 'planUpdate' is not null or undefined
            assertParamExists('updatePlan', 'planUpdate', planUpdate)
            const localVarPath = `/v1/plan/{code}/{id}`
                .replace(`{${"code"}}`, encodeURIComponent(String(code)))
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication TokenAuth required
            await setApiKeyToObject(localVarHeaderParameter, "Token", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(planUpdate, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PlansApi - functional programming interface
 * @export
 */
export const PlansApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PlansApiAxiosParamCreator(configuration)
    return {
        /**
         * This method allows to create a plan in selected project. 
         * @summary Create a new plan
         * @param {string} code Code of project, where to search entities.
         * @param {PlanCreate} planCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createPlan(code: string, planCreate: PlanCreate, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<IdResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createPlan(code, planCreate, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This method completely deletes a plan from repository. 
         * @summary Delete plan
         * @param {string} code Code of project, where to search entities.
         * @param {number} id Identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deletePlan(code: string, id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<IdResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deletePlan(code, id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This method allows to retrieve a specific plan. 
         * @summary Get a specific plan
         * @param {string} code Code of project, where to search entities.
         * @param {number} id Identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPlan(code: string, id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PlanResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPlan(code, id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This method allows to retrieve all plans stored in selected project. 
         * @summary Get all plans
         * @param {string} code Code of project, where to search entities.
         * @param {number} [limit] A number of entities in result set.
         * @param {number} [offset] How many entities should be skipped.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPlans(code: string, limit?: number, offset?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PlanListResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPlans(code, limit, offset, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This method updates a plan. 
         * @summary Update plan
         * @param {string} code Code of project, where to search entities.
         * @param {number} id Identifier.
         * @param {PlanUpdate} planUpdate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updatePlan(code: string, id: number, planUpdate: PlanUpdate, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<IdResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updatePlan(code, id, planUpdate, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * PlansApi - factory interface
 * @export
 */
export const PlansApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PlansApiFp(configuration)
    return {
        /**
         * This method allows to create a plan in selected project. 
         * @summary Create a new plan
         * @param {string} code Code of project, where to search entities.
         * @param {PlanCreate} planCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createPlan(code: string, planCreate: PlanCreate, options?: any): AxiosPromise<IdResponse> {
            return localVarFp.createPlan(code, planCreate, options).then((request) => request(axios, basePath));
        },
        /**
         * This method completely deletes a plan from repository. 
         * @summary Delete plan
         * @param {string} code Code of project, where to search entities.
         * @param {number} id Identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deletePlan(code: string, id: number, options?: any): AxiosPromise<IdResponse> {
            return localVarFp.deletePlan(code, id, options).then((request) => request(axios, basePath));
        },
        /**
         * This method allows to retrieve a specific plan. 
         * @summary Get a specific plan
         * @param {string} code Code of project, where to search entities.
         * @param {number} id Identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPlan(code: string, id: number, options?: any): AxiosPromise<PlanResponse> {
            return localVarFp.getPlan(code, id, options).then((request) => request(axios, basePath));
        },
        /**
         * This method allows to retrieve all plans stored in selected project. 
         * @summary Get all plans
         * @param {string} code Code of project, where to search entities.
         * @param {number} [limit] A number of entities in result set.
         * @param {number} [offset] How many entities should be skipped.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPlans(code: string, limit?: number, offset?: number, options?: any): AxiosPromise<PlanListResponse> {
            return localVarFp.getPlans(code, limit, offset, options).then((request) => request(axios, basePath));
        },
        /**
         * This method updates a plan. 
         * @summary Update plan
         * @param {string} code Code of project, where to search entities.
         * @param {number} id Identifier.
         * @param {PlanUpdate} planUpdate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updatePlan(code: string, id: number, planUpdate: PlanUpdate, options?: any): AxiosPromise<IdResponse> {
            return localVarFp.updatePlan(code, id, planUpdate, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PlansApi - object-oriented interface
 * @export
 * @class PlansApi
 * @extends {BaseAPI}
 */
export class PlansApi extends BaseAPI {
    /**
     * This method allows to create a plan in selected project. 
     * @summary Create a new plan
     * @param {string} code Code of project, where to search entities.
     * @param {PlanCreate} planCreate 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PlansApi
     */
    public createPlan(code: string, planCreate: PlanCreate, options?: AxiosRequestConfig) {
        return PlansApiFp(this.configuration).createPlan(code, planCreate, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This method completely deletes a plan from repository. 
     * @summary Delete plan
     * @param {string} code Code of project, where to search entities.
     * @param {number} id Identifier.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PlansApi
     */
    public deletePlan(code: string, id: number, options?: AxiosRequestConfig) {
        return PlansApiFp(this.configuration).deletePlan(code, id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This method allows to retrieve a specific plan. 
     * @summary Get a specific plan
     * @param {string} code Code of project, where to search entities.
     * @param {number} id Identifier.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PlansApi
     */
    public getPlan(code: string, id: number, options?: AxiosRequestConfig) {
        return PlansApiFp(this.configuration).getPlan(code, id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This method allows to retrieve all plans stored in selected project. 
     * @summary Get all plans
     * @param {string} code Code of project, where to search entities.
     * @param {number} [limit] A number of entities in result set.
     * @param {number} [offset] How many entities should be skipped.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PlansApi
     */
    public getPlans(code: string, limit?: number, offset?: number, options?: AxiosRequestConfig) {
        return PlansApiFp(this.configuration).getPlans(code, limit, offset, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This method updates a plan. 
     * @summary Update plan
     * @param {string} code Code of project, where to search entities.
     * @param {number} id Identifier.
     * @param {PlanUpdate} planUpdate 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PlansApi
     */
    public updatePlan(code: string, id: number, planUpdate: PlanUpdate, options?: AxiosRequestConfig) {
        return PlansApiFp(this.configuration).updatePlan(code, id, planUpdate, options).then((request) => request(this.axios, this.basePath));
    }
}
