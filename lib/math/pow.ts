/**
 * Returns the base to the power exp.
 * If mod is defined, return base to the power exp modulo mod.
 * @param base {number} The base number.
 * @param exp {number} The exponent used to raise the base.
 * @param mod {number|undefined} The modulo number.
 */
export function pow(
  base: number,
  exp: number,
  mod: number | undefined
): number {
  if (!mod) {
    // Use the faster native implementation of exponentation if mod is not needed
    return base ** exp;
  }

  if (exp < 0 && mod) {
    throw Error(
      'Cannot exponentiate with negative exponents while taking modulo.'
    );
  }

  base %= mod;
  let ret = 1;
  while (exp) {
    if (exp & 1) {
      ret = (ret * base) % mod;
    }
    exp >>= 1;
    base = base ** 2 % mod;
  }
  return ret;
}
