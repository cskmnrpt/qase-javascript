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
import { BaseResponse } from '../model';
// @ts-ignore
import { DefectCreate } from '../model';
// @ts-ignore
import { DefectListResponse } from '../model';
// @ts-ignore
import { DefectResponse } from '../model';
// @ts-ignore
import { DefectStatus } from '../model';
// @ts-ignore
import { DefectUpdate } from '../model';
// @ts-ignore
import { IdResponse } from '../model';
/**
 * DefectsApi - axios parameter creator
 * @export
 */
export const DefectsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * This method allows to create a defect in selected project. 
         * @summary Create a new defect
         * @param {string} code Code of project, where to search entities.
         * @param {DefectCreate} defectCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createDefect: async (code: string, defectCreate: DefectCreate, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('createDefect', 'code', code)
            // verify required parameter 'defectCreate' is not null or undefined
            assertParamExists('createDefect', 'defectCreate', defectCreate)
            const localVarPath = `/v1/defect/{code}`
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
            localVarRequestOptions.data = serializeDataIfNeeded(defectCreate, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This method completely deletes a defect from repository. 
         * @summary Delete defect
         * @param {string} code Code of project, where to search entities.
         * @param {number} id Identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteDefect: async (code: string, id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('deleteDefect', 'code', code)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteDefect', 'id', id)
            const localVarPath = `/v1/defect/{code}/{id}`
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
         * This method allows to retrieve a specific defect. 
         * @summary Get a specific defect
         * @param {string} code Code of project, where to search entities.
         * @param {number} id Identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDefect: async (code: string, id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('getDefect', 'code', code)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getDefect', 'id', id)
            const localVarPath = `/v1/defect/{code}/{id}`
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
         * This method allows to retrieve all defects stored in selected project. 
         * @summary Get all defects
         * @param {string} code Code of project, where to search entities.
         * @param {'open' | 'resolved' | 'in_progress' | 'invalid'} [status] 
         * @param {number} [limit] A number of entities in result set.
         * @param {number} [offset] How many entities should be skipped.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDefects: async (code: string, status?: 'open' | 'resolved' | 'in_progress' | 'invalid', limit?: number, offset?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('getDefects', 'code', code)
            const localVarPath = `/v1/defect/{code}`
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

            if (status !== undefined) {
                localVarQueryParameter['status'] = status;
            }

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
         * This method allows to resolve a specific defect. 
         * @summary Resolve a specific defect
         * @param {string} code Code of project, where to search entities.
         * @param {number} id Identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        resolveDefect: async (code: string, id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('resolveDefect', 'code', code)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('resolveDefect', 'id', id)
            const localVarPath = `/v1/defect/{code}/resolve/{id}`
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This method updates a defect. 
         * @summary Update defect
         * @param {string} code Code of project, where to search entities.
         * @param {number} id Identifier.
         * @param {DefectUpdate} defectUpdate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateDefect: async (code: string, id: number, defectUpdate: DefectUpdate, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('updateDefect', 'code', code)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateDefect', 'id', id)
            // verify required parameter 'defectUpdate' is not null or undefined
            assertParamExists('updateDefect', 'defectUpdate', defectUpdate)
            const localVarPath = `/v1/defect/{code}/{id}`
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
            localVarRequestOptions.data = serializeDataIfNeeded(defectUpdate, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This method allows to update a specific defect status. 
         * @summary Update a specific defect status
         * @param {string} code Code of project, where to search entities.
         * @param {number} id Identifier.
         * @param {DefectStatus} defectStatus 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateDefectStatus: async (code: string, id: number, defectStatus: DefectStatus, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('updateDefectStatus', 'code', code)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateDefectStatus', 'id', id)
            // verify required parameter 'defectStatus' is not null or undefined
            assertParamExists('updateDefectStatus', 'defectStatus', defectStatus)
            const localVarPath = `/v1/defect/{code}/status/{id}`
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
            localVarRequestOptions.data = serializeDataIfNeeded(defectStatus, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefectsApi - functional programming interface
 * @export
 */
export const DefectsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DefectsApiAxiosParamCreator(configuration)
    return {
        /**
         * This method allows to create a defect in selected project. 
         * @summary Create a new defect
         * @param {string} code Code of project, where to search entities.
         * @param {DefectCreate} defectCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createDefect(code: string, defectCreate: DefectCreate, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<IdResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createDefect(code, defectCreate, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This method completely deletes a defect from repository. 
         * @summary Delete defect
         * @param {string} code Code of project, where to search entities.
         * @param {number} id Identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteDefect(code: string, id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<IdResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteDefect(code, id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This method allows to retrieve a specific defect. 
         * @summary Get a specific defect
         * @param {string} code Code of project, where to search entities.
         * @param {number} id Identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDefect(code: string, id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DefectResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDefect(code, id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This method allows to retrieve all defects stored in selected project. 
         * @summary Get all defects
         * @param {string} code Code of project, where to search entities.
         * @param {'open' | 'resolved' | 'in_progress' | 'invalid'} [status] 
         * @param {number} [limit] A number of entities in result set.
         * @param {number} [offset] How many entities should be skipped.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDefects(code: string, status?: 'open' | 'resolved' | 'in_progress' | 'invalid', limit?: number, offset?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DefectListResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDefects(code, status, limit, offset, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This method allows to resolve a specific defect. 
         * @summary Resolve a specific defect
         * @param {string} code Code of project, where to search entities.
         * @param {number} id Identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async resolveDefect(code: string, id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<IdResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.resolveDefect(code, id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This method updates a defect. 
         * @summary Update defect
         * @param {string} code Code of project, where to search entities.
         * @param {number} id Identifier.
         * @param {DefectUpdate} defectUpdate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateDefect(code: string, id: number, defectUpdate: DefectUpdate, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<IdResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateDefect(code, id, defectUpdate, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This method allows to update a specific defect status. 
         * @summary Update a specific defect status
         * @param {string} code Code of project, where to search entities.
         * @param {number} id Identifier.
         * @param {DefectStatus} defectStatus 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateDefectStatus(code: string, id: number, defectStatus: DefectStatus, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BaseResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateDefectStatus(code, id, defectStatus, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DefectsApi - factory interface
 * @export
 */
export const DefectsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DefectsApiFp(configuration)
    return {
        /**
         * This method allows to create a defect in selected project. 
         * @summary Create a new defect
         * @param {string} code Code of project, where to search entities.
         * @param {DefectCreate} defectCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createDefect(code: string, defectCreate: DefectCreate, options?: any): AxiosPromise<IdResponse> {
            return localVarFp.createDefect(code, defectCreate, options).then((request) => request(axios, basePath));
        },
        /**
         * This method completely deletes a defect from repository. 
         * @summary Delete defect
         * @param {string} code Code of project, where to search entities.
         * @param {number} id Identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteDefect(code: string, id: number, options?: any): AxiosPromise<IdResponse> {
            return localVarFp.deleteDefect(code, id, options).then((request) => request(axios, basePath));
        },
        /**
         * This method allows to retrieve a specific defect. 
         * @summary Get a specific defect
         * @param {string} code Code of project, where to search entities.
         * @param {number} id Identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDefect(code: string, id: number, options?: any): AxiosPromise<DefectResponse> {
            return localVarFp.getDefect(code, id, options).then((request) => request(axios, basePath));
        },
        /**
         * This method allows to retrieve all defects stored in selected project. 
         * @summary Get all defects
         * @param {string} code Code of project, where to search entities.
         * @param {'open' | 'resolved' | 'in_progress' | 'invalid'} [status] 
         * @param {number} [limit] A number of entities in result set.
         * @param {number} [offset] How many entities should be skipped.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDefects(code: string, status?: 'open' | 'resolved' | 'in_progress' | 'invalid', limit?: number, offset?: number, options?: any): AxiosPromise<DefectListResponse> {
            return localVarFp.getDefects(code, status, limit, offset, options).then((request) => request(axios, basePath));
        },
        /**
         * This method allows to resolve a specific defect. 
         * @summary Resolve a specific defect
         * @param {string} code Code of project, where to search entities.
         * @param {number} id Identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        resolveDefect(code: string, id: number, options?: any): AxiosPromise<IdResponse> {
            return localVarFp.resolveDefect(code, id, options).then((request) => request(axios, basePath));
        },
        /**
         * This method updates a defect. 
         * @summary Update defect
         * @param {string} code Code of project, where to search entities.
         * @param {number} id Identifier.
         * @param {DefectUpdate} defectUpdate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateDefect(code: string, id: number, defectUpdate: DefectUpdate, options?: any): AxiosPromise<IdResponse> {
            return localVarFp.updateDefect(code, id, defectUpdate, options).then((request) => request(axios, basePath));
        },
        /**
         * This method allows to update a specific defect status. 
         * @summary Update a specific defect status
         * @param {string} code Code of project, where to search entities.
         * @param {number} id Identifier.
         * @param {DefectStatus} defectStatus 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateDefectStatus(code: string, id: number, defectStatus: DefectStatus, options?: any): AxiosPromise<BaseResponse> {
            return localVarFp.updateDefectStatus(code, id, defectStatus, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DefectsApi - object-oriented interface
 * @export
 * @class DefectsApi
 * @extends {BaseAPI}
 */
export class DefectsApi extends BaseAPI {
    /**
     * This method allows to create a defect in selected project. 
     * @summary Create a new defect
     * @param {string} code Code of project, where to search entities.
     * @param {DefectCreate} defectCreate 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefectsApi
     */
    public createDefect(code: string, defectCreate: DefectCreate, options?: AxiosRequestConfig) {
        return DefectsApiFp(this.configuration).createDefect(code, defectCreate, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This method completely deletes a defect from repository. 
     * @summary Delete defect
     * @param {string} code Code of project, where to search entities.
     * @param {number} id Identifier.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefectsApi
     */
    public deleteDefect(code: string, id: number, options?: AxiosRequestConfig) {
        return DefectsApiFp(this.configuration).deleteDefect(code, id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This method allows to retrieve a specific defect. 
     * @summary Get a specific defect
     * @param {string} code Code of project, where to search entities.
     * @param {number} id Identifier.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefectsApi
     */
    public getDefect(code: string, id: number, options?: AxiosRequestConfig) {
        return DefectsApiFp(this.configuration).getDefect(code, id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This method allows to retrieve all defects stored in selected project. 
     * @summary Get all defects
     * @param {string} code Code of project, where to search entities.
     * @param {'open' | 'resolved' | 'in_progress' | 'invalid'} [status] 
     * @param {number} [limit] A number of entities in result set.
     * @param {number} [offset] How many entities should be skipped.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefectsApi
     */
    public getDefects(code: string, status?: 'open' | 'resolved' | 'in_progress' | 'invalid', limit?: number, offset?: number, options?: AxiosRequestConfig) {
        return DefectsApiFp(this.configuration).getDefects(code, status, limit, offset, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This method allows to resolve a specific defect. 
     * @summary Resolve a specific defect
     * @param {string} code Code of project, where to search entities.
     * @param {number} id Identifier.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefectsApi
     */
    public resolveDefect(code: string, id: number, options?: AxiosRequestConfig) {
        return DefectsApiFp(this.configuration).resolveDefect(code, id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This method updates a defect. 
     * @summary Update defect
     * @param {string} code Code of project, where to search entities.
     * @param {number} id Identifier.
     * @param {DefectUpdate} defectUpdate 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefectsApi
     */
    public updateDefect(code: string, id: number, defectUpdate: DefectUpdate, options?: AxiosRequestConfig) {
        return DefectsApiFp(this.configuration).updateDefect(code, id, defectUpdate, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This method allows to update a specific defect status. 
     * @summary Update a specific defect status
     * @param {string} code Code of project, where to search entities.
     * @param {number} id Identifier.
     * @param {DefectStatus} defectStatus 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefectsApi
     */
    public updateDefectStatus(code: string, id: number, defectStatus: DefectStatus, options?: AxiosRequestConfig) {
        return DefectsApiFp(this.configuration).updateDefectStatus(code, id, defectStatus, options).then((request) => request(this.axios, this.basePath));
    }
}
