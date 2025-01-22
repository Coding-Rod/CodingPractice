import { describe, it, expect } from "vitest";
import { canConfigure  } from "../src/can-reconfigure";

describe('Can Reconfigure', () => {
  it('should be a function', () => {
    expect(canConfigure).toBeTypeOf('function')
  })

  it('should throw if first parameter is missing', () => {
    expect(() => canConfigure()).toThrow()
  })

  it('should throw if first parameter is not a string', () => {
    expect(() => canConfigure(1)).toThrow()
  })

  it('should throw if second parameter is not a string', () => {
    expect(() => canConfigure('1')).toThrow()
  })

  it('should return a boolean', () => {
    expect(canConfigure('a', 'b')).toBeTypeOf('boolean')
  })

  it('should return false if strings provided have different length', () => {
    expect(canConfigure('abc', 'de')).toBe(false)
  })

  it('should return false if strings provided have different number of unique letters', () => {
    expect(canConfigure('abc', 'ddd')).toBe(false)
  })

  it('should return false if strings has different order of transformation', () => {
    expect(canConfigure('XBOX', 'XXBO')).toBe(false)
  })
})