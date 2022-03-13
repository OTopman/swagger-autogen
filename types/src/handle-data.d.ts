export function setOptions(options: any): void;
/**
 * Removes unnecessary content.
 * @param {string} data file content.
 */
export function clearData(data: string): any;
/**
 * Remove comments in a string.
 * @param {string} data file content.
 * @param {boolean} keepSwaggerTags keep comment with "#swagger.*".
 */
export function removeComments(data: string, keepSwaggerTags?: boolean): any;
/**
 * Remove all strings.
 * @param {string} data file content.
 */
export function removeStrings(data: string): any;
/**
 * Add "([_[method]_])([_[foo]_])([_[index]_])" to all endpoints. This standardize each endpoint.
 *
 * 'method': get, post, put, etc.
 *
 * 'foo': app, route, etc.
 *
 * 'index': id
 *
 * @param {string} data file content.
 * @param {array} patterns array containing patterns recognized as: app, route, etc.
 */
export function addReferenceToMethods(data: string, patterns: any[]): any;
/**
 * TODO: fill
 * @param {*} elem
 * @param {*} request
 * @param {*} objParameters
 */
export function getQueryIndirectly(elem: any, request: any, objParameters: any): any;
/**
 * Recognize content of .status(...) method (ExpressJS).
 * @param {string} elem content.
 * @param {array} response array containing variables of response.
 * @param {object} objResponses
 */
export function getStatus(elem: string, response: any[], objResponses: object): Promise<any>;
/**
 * Recognize content of .setHeader(...) method (ExpressJS).
 * @param {string} elem content.
 * @param {string} path endpoint's path.
 * @param {string} method
 * @param {array} response array containing variables of response.
 * @param {object} objEndpoint
 */
export function getHeader(elem: string, path: string, method: string, response: any[], objEndpoint: object): any;
/**
 * Recognize header, query and body content automatically.
 * @param {string} elem content.
 * @param {array} request array containing variables of response.
 * @param {object} objParameters
 */
export function getHeaderQueryBody(elem: string, request: any[], objParameters: object): any;
/**
 * Recognize callback parameters.
 * @param {string} data content.
 */
export function getCallbackParameters(data: string): Promise<{
    req: any[];
    res: any[];
    next: any[];
}>;
/**
 * Recognize path parameters.
 * @param {string} path
 * @param {object} objParameters
 */
export function getPathParameters(path: string, objParameters: object): Promise<any>;
/**
 * TODO: REFACTOR THIS FUNCTION
 * Recognize function in a string data.
 * @param {string} data content.
 * @param {string} functionName
 */
export function functionRecognizerInData(data: string, functionName: string): Promise<string>;
/**
 * Return the first function in a string.
 * @param {string} data content.
 */
export function popFunction(data: string): Promise<any>;
/**
 * Return all "#swagger.*" in a string.
 * @param {string} data file content.
 */
export function getSwaggerComments(data: string): any;
/**
 * Remove all content in parentheses.
 * @param {string} data file content.
 * @param {boolean} keepParentheses if true, keep the parentheses "()" after erasing the contents inside.
 * @param {number} level remove according to stack level
 */
export function removeInsideParentheses(data: string, keepParentheses?: boolean, level?: number): any;
/**
 * Convert statements such as: "require('./path')(foo)" in "foo.use(require('./path'))"
 * Useful, because the statement "foo.use(require('./path'))" is already handled successfully.
 * @param {string} data file content
 */
export function dataConverter(data: string): any;
