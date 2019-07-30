import { RuleSet } from '../../ruleTypes';

export default {
  globals: {
    /*
        lib/intl.js:8:0

        declare var Intl: {
          Collator: Class<Intl$Collator>,
          DateTimeFormat: Class<Intl$DateTimeFormat>,
          NumberFormat: Class<Intl$NumberFormat>,
          PluralRules: ?Class<Intl$PluralRules>,
          getCanonicalLocales?: (locales?: Intl$Locales) => Intl$Locale[],
          ...
        }
        */
    Intl(context) {
      context.warnOnce('Rule for global "Intl" is not verified');
    },

    /*
        lib/intl.js:20:0

        declare class Intl$Collator {
          constructor (
            locales?: Intl$Locales,
            options?: Intl$CollatorOptions
          ): Intl$Collator;

          static (
            locales?: Intl$Locales,
            options?: Intl$CollatorOptions
          ): Intl$Collator;

          compare (string, string): number;

          resolvedOptions (): {
            locale: Intl$Locale,
            usage: 'sort' | 'search',
            sensitivity: 'base' | 'accent' | 'case' | 'variant',
            ignorePunctuation: boolean,
            collation: string,
            numeric: boolean,
            caseFirst?: 'upper' | 'lower' | 'false',
            ...
          };

          static supportedLocalesOf (locales?: Intl$Locales): Intl$Locale[];
        }
        */
    Intl$Collator(context) {
      context.warnOnce('Rule for global "Intl$Collator" is not verified');
    },

    /*
        lib/intl.js:47:0

        declare type Intl$CollatorOptions = {
          localeMatcher?: 'lookup' | 'best fit',
          usage?: 'sort' | 'search',
          sensitivity?: 'base' | 'accent' | 'case' | 'variant',
          ignorePunctuation?: boolean,
          numeric?: boolean,
          caseFirst?: 'upper' | 'lower' | 'false',
          ...
        }
        */
    Intl$CollatorOptions(context) {
      context.warnOnce(
        'Rule for global "Intl$CollatorOptions" is not verified'
      );
    },

    /*
        lib/intl.js:60:0

        declare class Intl$DateTimeFormat {
          constructor (
            locales?: Intl$Locales,
            options?: Intl$DateTimeFormatOptions
          ): Intl$DateTimeFormat;

          static (
            locales?: Intl$Locales,
            options?: Intl$DateTimeFormatOptions
          ): Intl$DateTimeFormat;

          format (value?: Date | number): string;

          formatToParts (value?: Date | number): Array<{
            type: FormatToPartsType,
            value: string,
            ...
          }>;

          resolvedOptions (): {
            locale: Intl$Locale,
            calendar: string,
            numberingSystem: string,
            timeZone?: string,
            hour12: boolean,
            weekday?: 'narrow' | 'short' | 'long',
            era?: 'narrow' | 'short' | 'long',
            year?: 'numeric' | '2-digit',
            month?: 'numeric' | '2-digit' | 'narrow' | 'short' | 'long',
            day?: 'numeric' | '2-digit',
            hour?: 'numeric' | '2-digit',
            minute?: 'numeric' | '2-digit',
            second?: 'numeric' | '2-digit',
            timeZoneName?: 'short' | 'long',
            ...
          };

          static supportedLocalesOf (locales?: Intl$Locales): Intl$Locale[];
        }
        */
    Intl$DateTimeFormat(context) {
      context.warnOnce('Rule for global "Intl$DateTimeFormat" is not verified');
    },

    /*
        lib/intl.js:100:0

        declare type Intl$DateTimeFormatOptions = {
          localeMatcher?: 'lookup' | 'best fit',
          timeZone?: string,
          hour12?: boolean,
          formatMatcher?: 'basic' | 'best fit',
          weekday?: 'narrow' | 'short' | 'long',
          era?: 'narrow' | 'short' | 'long',
          year?: 'numeric' | '2-digit',
          month?: 'numeric' | '2-digit' | 'narrow' | 'short' | 'long',
          day?: 'numeric' | '2-digit',
          hour?: 'numeric' | '2-digit',
          minute?: 'numeric' | '2-digit',
          second?: 'numeric' | '2-digit',
          timeZoneName?: 'short' | 'long',
          ...
        }
        */
    Intl$DateTimeFormatOptions(context) {
      context.warnOnce(
        'Rule for global "Intl$DateTimeFormatOptions" is not verified'
      );
    },

    /*
        lib/intl.js:117:0

        declare class Intl$NumberFormat {
          constructor (
            locales?: Intl$Locales,
            options?: Intl$NumberFormatOptions
          ): Intl$NumberFormat;

          static (
            locales?: Intl$Locales,
            options?: Intl$NumberFormatOptions
          ): Intl$NumberFormat;

          format (number): string;

          resolvedOptions (): {
            locale: Intl$Locale,
            numberingSystem: string,
            style: 'decimal' | 'currency' | 'percent',
            currency?: string,
            currencyDisplay?: 'symbol' | 'code' | 'name',
            useGrouping: boolean,
            minimumIntegerDigits?: number,
            minimumFractionDigits?: number,
            maximumFractionDigits?: number,
            minimumSignificantDigits?: number,
            maximumSignificantDigits?: number,
            ...
          };

          static supportedLocalesOf (locales?: Intl$Locales): Intl$Locale[];
        }
        */
    Intl$NumberFormat(context) {
      context.warnOnce('Rule for global "Intl$NumberFormat" is not verified');
    },

    /*
        lib/intl.js:148:0

        declare type Intl$NumberFormatOptions = {
          localeMatcher?: 'lookup' | 'best fit',
          style?: 'decimal' | 'currency' | 'percent',
          currency?: string,
          currencyDisplay?: 'symbol' | 'code' | 'name',
          useGrouping?: boolean,
          minimumIntegerDigits?: number,
          minimumFractionDigits?: number,
          maximumFractionDigits?: number,
          minimumSignificantDigits?: number,
          maximumSignificantDigits?: number,
          ...
        }
        */
    Intl$NumberFormatOptions(context) {
      context.warnOnce(
        'Rule for global "Intl$NumberFormatOptions" is not verified'
      );
    },

    /*
        lib/intl.js:162:0

        declare class Intl$PluralRules {
          constructor (
            locales?: Intl$Locales,
            options?: Intl$PluralRulesOptions
          ): Intl$PluralRules;

          select (number): Intl$PluralRule;

          resolvedOptions (): {
            locale: Intl$Locale,
            type: 'cardinal' | 'ordinal',
            minimumIntegerDigits?: number,
            minimumFractionDigits?: number,
            maximumFractionDigits?: number,
            minimumSignificantDigits?: number,
            maximumSignificantDigits?: number,
            pluralCategories: Intl$PluralRule[],
            ...
          };

          static supportedLocalesOf (locales?: Intl$Locales): Intl$Locale[];
        }
        */
    Intl$PluralRules(context) {
      context.warnOnce('Rule for global "Intl$PluralRules" is not verified');
    },

    /*
        lib/intl.js:187:0

        declare type Intl$PluralRulesOptions = {
          localeMatcher?: 'lookup' | 'best fit',
          type?: 'cardinal' | 'ordinal',
          minimumIntegerDigits?: number,
          minimumFractionDigits?: number,
          maximumFractionDigits?: number,
          minimumSignificantDigits?: number,
          maximumSignificantDigits?: number,
          ...
        }
        */
    Intl$PluralRulesOptions(context) {
      context.warnOnce(
        'Rule for global "Intl$PluralRulesOptions" is not verified'
      );
    },
  },

  modules: {},
} as RuleSet;
