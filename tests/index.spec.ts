import 'mocha';
import { assert } from 'chai';

import { JwtUtils } from '../src/index';
import npmPackage from '../src/index';

describe('NPM Package', () => {
    it('should be an object', () => {
        assert.isObject(npmPackage);
    });

    it('should have a JwtUtils property', () => {
        assert.property(npmPackage, 'JwtUtils');
    });
});

describe('JWT Utils Class', () => {
    it('should have a getInstance init method', () => {
        assert.isFunction(JwtUtils.getInstance);
    });
});
