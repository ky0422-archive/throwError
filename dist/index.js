"use strict";
/**
 * @param {string} err Error message
 * @return Nothing
 *
 * @author tsukiroku
 * @description Throw error!
 * @since 0000.00.00
 *
 * @file index.ts
 * @todo Nothing
 *
 *
 * # Example
 * ```ts
 * import throwError from '@tsukiroku/throwerror';
 *
 * throwError('Error message');
 * ```
 *
 * ### with **`try` - `catch`** ❤️
 *
 * ```ts
 * import throwError from '@tsukiroku/throwerror';
 *
 * try {
 * throwError('Error message');
 * } catch (err) {
 *  console.log(err);
 * }
 * ```
 * ---
 * @license MIT License
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (err) => {
    throw new Error(err);
};
