/**
 * TODO: fill
 * @param {*} def
 * @param {*} resp
 */
export function formatDefinitions(def: any, resp: any, constainXML: any): any;
export function getLanguage(): string;
export function getOpenAPI(): any;
/**
 * TODO: fill
 * @param {*} elem
 * @param {*} autoMode
 */
export function getPath(elem: any, autoMode: any): string | boolean;
/**
 * Get #swagger.method
 * @param {string} data
 * @returns
 */
export function getMethodTag(data: string, reference: any): string | false;
/**
 * Get #swagger.start and #swagger.end
 * @param {*} aData
 */
export function getForcedEndpoints(aData: any, reference: any): any;
/**
 * Search for #swagger.ignore
 * @param {*} elem
 */
export function getIgnoreTag(elem: any): boolean;
/**
 * Search for #swagger.auto = false   (by default is true)
 * @param {*} data
 */
export function getAutoTag(data: any): boolean;
/**
 * Get the content in '#swagger.parameters'
 * @param {string} data file content
 * @param {object} objParameters
 */
export function getParametersTag(data: string, objParameters: object, reference: any): Promise<any>;
/**
 * TODO: fill
 * @param {*} data
 */
export function getProducesTag(data: any, reference: any): Promise<any[]>;
/**
 * TODO: fill
 * @param {*} data
 */
export function getConsumesTag(data: any, reference: any): Promise<any[]>;
/**
 * TODO: fill
 * @param {*} data
 * @param {*} objResponses
 */
export function getResponsesTag(data: any, objResponses: any, reference: any): Promise<any>;
/**
 * TODO: fill
 * @param {*} data
 */
export function getDescription(data: any, reference: any): any;
/**
 * TODO: fill
 * @param {*} data
 */
export function getTags(data: any, reference: any): string[];
/**
 * TODO: fill
 * @param {*} data
 */
export function getSecurityTag(data: any, reference: any): Promise<any>;
/**
 * TODO: fill
 * @param {*} data
 */
export function getSummary(data: any, reference: any): any;
/**
 * TODO: fill
 * @param {*} data
 */
export function getOperationId(data: any, reference: any): any;
/**
 * Search for #swagger.deprecated = true   (by default is false)
 * @param {*} data
 */
export function getDeprecatedTag(data: any, reference: any): boolean;
/**
 * Get the content in '#swagger.requestBody'
 * @param {string} data file content
 */
export function getRequestBodyTag(data: string, reference: any): Promise<{}>;
/**
 * TODO: fill
 * @param {*} newLang
 */
export function setLanguage(newLang: any): string;
export function setOpenAPI(param: any): any;
export function getDisableLogs(): boolean;
export function setDisableLogs(param: any): boolean;
