/**
 * Check if 'path' is a directory or a file
 *
 * @param {string} path
 * @returns
 */
export function fileOrDirectoryExist(path: string): Promise<{
    isDirectory: boolean;
    isFile: boolean;
}>;
/**
 * Get file extension.
 * @param {string} fileName
 */
export function getExtension(fileName: string): Promise<string>;
/**
 * Get file content.
 * @param {string} pathFile
 */
export function getFileContent(pathFile: string): any;
/**
 * Check if the input parameter is a number
 * @param {*} n
 */
export function isNumeric(n: any): boolean;
export function resolvePatternPath(path: any): any;
/**
 * Get first substring between two characters (startSymbol and endSymbol).
 * This method return remove the first character (startSymbol)
 * @param {string} data file content.
 * @param {string} startSymbol
 * @param {string} endSymbol
 */
export function stackSymbolRecognizer(data: string, startSymbol: string, endSymbol: string, ignoreString?: boolean): any;
/**
 * Get first substring between two characters (startSymbol and endSymbol)
 * @param {string} data file content.
 * @param {string} startSymbol
 * @param {string} endSymbol
 */
export function stack0SymbolRecognizer(data: string, startSymbol: string, endSymbol: string, keepSymbol?: boolean): any;
export function getFirstPosition(param: any, data: any): any;
/**
 * Get the first string in a string.
 * @param {string} data content.
 */
export function popString(data: string, keepQuote?: boolean): string;
export function replaceRange(str: any, start: any, end: any, substitute: any): any;
