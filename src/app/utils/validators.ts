/**
 * Use for objects
 * @param value The object to check wether it's null
 * @returns True if "value" is null
 */
export const isNull = (value: any): boolean => value == undefined || value == null;

/**
 * Use for arrays
 * @param value The array to check wether it's null or has no elements
 * @returns True if "value" is null or has no elements
 */
export const isNullOrEmpty = (value: any): boolean => isNull(value) || value.length == 0;

/**
 * Use for numbers
 * @param value The number to check wether it's null or zero
 * @returns True if "value" is null or zero
 */
export const isNullOrZero = (value: number): boolean => isNull(value) || value == 0;

/**
 * Use for strings
 * @param value The string to check wether it's null or consists of only white spaces
 * @returns True if "value" is null or an empty string
 */
export const isNullOrWhitespace = (value: any): boolean => isNull(value) || value.trim().length == 0;

/**
 * Use for objects
 * @param value The object to check wether it's not null
 * @returns True if "value" is not null
 */
export const notNull = (value: any): boolean => !isNull(value);

/**
 * Use for arrays
 * @param value The array to check wether it's not null and has at least one element
 * @returns True if "value" is not null and not empty
 */
export const notNullNorEmpty = (value: any[]): boolean => notNull(value) && value.length > 0;

/**
 * Use for strings
 * @param value The string to check wether it's not null and has at least one non white space character
 * @returns True if "value" is not null and not an empty string
 */
export const notNullNorWhitespace = (value: string): boolean => notNull(value) && value.trim().length > 0;

/**
 * Use for numbers
 * @param value The number to check wether it's not null or zero
 * @returns True if "value" is not null and not zero
 */
export const notNullNorZero = (value: number): boolean => notNull(value) && value != 0;

/**
 * Use for emails
 * @param email the email to be tested
 * @returns True if "value" is in correct format
 */
export const isEmailFormat = (email: string): boolean => {
    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

/**
* Use for phone numbers
* @param number the number to be tested
* @returns True if "value" is in correct format
*/
export const isPhoneNumberFormat = (number: string): boolean => {
    return /^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/.test(number);
}

/**
* Use for US Zip Codes
* @param zip the zip code to be tested
* @returns True if "value" is in correct format
*/
export const isUsZipCodeValid = (zip: string): boolean => {
    return /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zip);
}

/**
* Use for website domains
* @param website the domain to be tested
* @returns True if "value" is in correct format
*/
export const isWebsiteValid = (website: string): boolean => {
    return /^((?:(?:(?:\w[\.\-\+]?)*)\w)+)((?:(?:(?:\w[\.\-\+]?){0,62})\w)+)\.(\w{2,6})$/.test(website);
}

/**
* Use for testing password patterns
* 
* - At least 6 characters long
* - Contains one lowercase
* - Contains one uppercase
* - Contains one number
* 
* @param password the password to be tested
* @returns True if "value" is in correct format
*/
export const isPasswordValid = (password: string): boolean => {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,}$/.test(password);
}