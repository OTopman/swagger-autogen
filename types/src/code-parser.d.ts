/**
 * Getting the string until a character to be found.
 * @param {string} data content
 * @param {string} character character that will stop the search
 * @param {boolean} ignoreInString If 'true', the 'character' won't be searched in the string.
 * @returns
 */
export function getUntil(data: string, character: string, ignoreInString?: boolean): string;
/**
 * Return all nodes that are 'VariableDeclaration'.
 * @param {*} node
 * @returns
 */
export function getVariablesNode(node: any): any;
/**
 * Parse a JavaScript content.
 * It get only the variables. In the future, it will get other patterns.
 *
 * @param {string} data content
 * @returns
 */
export function jsParser(data: string): {
    variables: any[];
};
/**
 * Parse a ES Module content.
 * It get only the variables. In the future, it will get other patterns.
 *
 * @param {string} data content
 * @param {boolean} onlyPrimitiveTypes
 * @returns
 */
export function jsParserEsModule(data: string, onlyPrimitiveTypes?: boolean): Promise<{
    variables: any[];
}>;
/**
 * Remove a specific character.
 * @param {string} data
 * @param {string} character
 * @param {boolean} ignoreInString If 'true', the 'character' won't be searched in the string.
 * @returns
 */
export function removeCharacter(data: string, character: string, ignoreInString?: boolean): string;
/**
 * Resolve referenced varibles in the path.
 *
 * @param {string} rawPath
 * @param {number} bytePosition
 * @param {*} jsParsed
 * @param {Array} importedFiles
 * @returns
 */
export function resolvePathVariables(rawPath: string, bytePosition: number, jsParsed: any, importedFiles: any[]): Promise<string>;
/**
 * Resolve the value of a specific variable.
 * @param {*} node
 * @param {Array} variables variables that can be in the node.
 * @returns
 */
export function resolveVariableValue(node: any, variables: any[]): any;
/**
 * Search a variable value in an object.
 * @param {object} obj
 * @param {string} property
 * @returns
 */
export function searchInObject(obj: object, property: string): any;
