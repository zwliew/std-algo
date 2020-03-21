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

  if (!exp) {
    return 1;
  }

  // TODO: Maybe do this iteratively to avoid creating a recursion stack?
  //       Not sure how much this impacts performance or memory usage in practice.
  base %= mod;
  let ret = pow(base, exp >> 1, mod);
  ret = ret ** 2 % mod;
  if (exp & 1) {
    ret = (ret * base) % mod;
  }
  return ret;
}
