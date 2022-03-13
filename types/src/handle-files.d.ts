/**
 * Recognize and handle a file and its endpoints.
 * @param {string} filePath file's path.
 * @param {string} pathRoute Route's path to which file endpoints belong.
 * @param {string} relativePath Relative file's path.
 * @param {array} receivedRouteMiddlewares Array containing middleware to be applied in the endpoint's file.
 */
export function readEndpointFile(filePath: string, pathRoute: string, relativePath: string, receivedRouteMiddlewares: any[], restrictedContent: any, globalSwaggerProperties: any): any;
export function setOptions(options: any): void;
