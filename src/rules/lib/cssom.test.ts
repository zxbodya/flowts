import plugin from '../../tsTypesPlugin';
import { createTransform } from '../../createTransform';
const transform = createTransform([plugin]);

describe('lib/cssom.js', () => {
  describe('globals', () => {
    describe('StyleSheet', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = StyleSheet;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new StyleSheet();
            
            class A1 extends StyleSheet {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('StyleSheetList', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = StyleSheetList;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new StyleSheetList();
            
            class A1 extends StyleSheetList {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('MediaList', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = MediaList;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new MediaList();
            
            class A1 extends MediaList {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('CSSStyleSheet', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = CSSStyleSheet;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new CSSStyleSheet();
            
            class A1 extends CSSStyleSheet {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('CSSGroupingRule', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = CSSGroupingRule;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new CSSGroupingRule();
            
            class A1 extends CSSGroupingRule {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('CSSConditionRule', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = CSSConditionRule;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new CSSConditionRule();
            
            class A1 extends CSSConditionRule {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('CSSMediaRule', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = CSSMediaRule;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new CSSMediaRule();
            
            class A1 extends CSSMediaRule {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('CSSStyleRule', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = CSSStyleRule;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new CSSStyleRule();
            
            class A1 extends CSSStyleRule {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('CSSRule', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = CSSRule;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new CSSRule();
            
            class A1 extends CSSRule {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('CSSKeyframeRule', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = CSSKeyframeRule;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new CSSKeyframeRule();
            
            class A1 extends CSSKeyframeRule {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('CSSKeyframesRule', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = CSSKeyframesRule;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new CSSKeyframesRule();
            
            class A1 extends CSSKeyframesRule {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('CSSRuleList', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = CSSRuleList;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new CSSRuleList();
            
            class A1 extends CSSRuleList {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('CSSStyleDeclaration', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = CSSStyleDeclaration;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new CSSStyleDeclaration();
            
            class A1 extends CSSStyleDeclaration {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('TransitionEvent', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = TransitionEvent;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new TransitionEvent();
            
            class A1 extends TransitionEvent {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('AnimationTimeline', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = AnimationTimeline;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new AnimationTimeline();
            
            class A1 extends AnimationTimeline {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('DocumentTimeline', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = DocumentTimeline;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new DocumentTimeline();
            
            class A1 extends DocumentTimeline {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('AnimationEffect', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = AnimationEffect;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new AnimationEffect();
            
            class A1 extends AnimationEffect {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('KeyframeEffect', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = KeyframeEffect;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new KeyframeEffect();
            
            class A1 extends KeyframeEffect {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('Animation', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = Animation;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new Animation();
            
            class A1 extends Animation {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('AnimationPlaybackEvent', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = AnimationPlaybackEvent;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new AnimationPlaybackEvent();
            
            class A1 extends AnimationPlaybackEvent {};
          `)
        ).toMatchSnapshot();
      });
    });
  });

  describe('modules', () => {
    test('has no modules', () => {});
  });
});
