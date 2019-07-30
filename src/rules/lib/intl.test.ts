import plugin from '../../tsTypesPlugin';
import { createTransform } from '../../createTransform';
const transform = createTransform([plugin]);

describe('lib/intl.js', () => {
  describe('globals', () => {
    describe('Intl', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = Intl;
          `)
        ).toMatchSnapshot();
      });
    });

    describe('Intl$Collator', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = Intl$Collator;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new Intl$Collator();
            
            class A1 extends Intl$Collator {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('Intl$CollatorOptions', () => {
      test('generated - type', () => {
        expect(
          transform(`
          `)
        ).toMatchSnapshot();
      });

      test('generated - interface', () => {
        expect(
          transform(`
            class A1 extends Intl$CollatorOptions {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('Intl$DateTimeFormat', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = Intl$DateTimeFormat;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new Intl$DateTimeFormat();
            
            class A1 extends Intl$DateTimeFormat {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('Intl$DateTimeFormatOptions', () => {
      test('generated - type', () => {
        expect(
          transform(`
          `)
        ).toMatchSnapshot();
      });

      test('generated - interface', () => {
        expect(
          transform(`
            class A1 extends Intl$DateTimeFormatOptions {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('Intl$NumberFormat', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = Intl$NumberFormat;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new Intl$NumberFormat();
            
            class A1 extends Intl$NumberFormat {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('Intl$NumberFormatOptions', () => {
      test('generated - type', () => {
        expect(
          transform(`
          `)
        ).toMatchSnapshot();
      });

      test('generated - interface', () => {
        expect(
          transform(`
            class A1 extends Intl$NumberFormatOptions {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('Intl$PluralRules', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = Intl$PluralRules;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new Intl$PluralRules();
            
            class A1 extends Intl$PluralRules {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('Intl$PluralRulesOptions', () => {
      test('generated - type', () => {
        expect(
          transform(`
          `)
        ).toMatchSnapshot();
      });

      test('generated - interface', () => {
        expect(
          transform(`
            class A1 extends Intl$PluralRulesOptions {};
          `)
        ).toMatchSnapshot();
      });
    });
  });

  describe('modules', () => {
    test('has no modules', () => {});
  });
});
