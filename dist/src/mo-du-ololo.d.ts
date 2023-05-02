/**
 * A class that provides functions for computing remainders when dividing binary strings by a specified number.
 */
export declare class Moduololo {
    private base;
    /**
     * Creates a new ModuloCalculator instance with the specified base.
     * @param base The base used to interpret the binary string (default: 2).
     */
    constructor(base?: number);
    /**
     * Computes the remainder when the specified binary string is divided by the specified number.
     * @param binaryString The binary string to compute the remainder for.
     * @param n The number to divide the binary string by.
     * @returns The remainder when the binary string is divided by n.
     */
    moduloN(binaryString: string, n: number): number;
    /**
     * Calculates the new remainder when a binary digit is added to the current remainder.
     * @param remainder The current remainder.
     * @param binaryDigit The binary digit to add.
     * @param n The number to divide by.
     * @returns The new remainder after adding the binary digit.
     */
    private calculateNewRemainder;
}
