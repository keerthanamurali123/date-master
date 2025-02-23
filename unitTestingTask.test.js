// unitTestingTask.test.js
const unitTestingTask = require('./unitTestingTask'); // Ensure this path is correct

describe('unitTestingTask', () => {
    // Test for basic date formatting
    describe('date formatting tokens', () => {
      const date = new Date(2022, 3, 5, 14, 30, 15, 123);

      it('should format YYYY correctly', () => {
          expect(unitTestingTask('YYYY', date)).toBe('2022');
      });

      it('should format YY correctly', () => {
          expect(unitTestingTask('YY', date)).toBe('22');
      });

      it('should format MMMM correctly', () => {
          unitTestingTask.lang('en');
          expect(unitTestingTask('MMMM', date)).toBe('April');
      });

      it('should format MMM correctly', () => {
          unitTestingTask.lang('en');
          expect(unitTestingTask('MMM', date)).toBe('Apr');
      });

      it('should format MM correctly', () => {
          expect(unitTestingTask('MM', date)).toBe('04');
      });

      it('should format M correctly', () => {
          expect(unitTestingTask('M', date)).toBe('4');
      });

      it('should format DD correctly', () => {
          unitTestingTask.lang('en');
          expect(unitTestingTask('DDD', date)).toBe('Tuesday');
      });

      it('should format D correctly', () => {
          unitTestingTask.lang('en');
          expect(unitTestingTask('D', date)).toBe('Tu');
      });

      it('should format dd correctly', () => {
          expect(unitTestingTask('dd', date)).toBe('05');
      });

      it('should format d correctly', () => {
          expect(unitTestingTask('d', date)).toBe('5');
      });

      it('should format HH correctly', () => {
          expect(unitTestingTask('HH', date)).toBe('14');
      });

      it('should format H correctly', () => {
          expect(unitTestingTask('H', date)).toBe('14');
      });

      it('should format hh correctly', () => {
          expect(unitTestingTask('hh', date)).toBe('02');
      });

      it('should format h correctly', () => {
          expect(unitTestingTask('h', date)).toBe('2');
      });

      it('should format mm correctly', () => {
          expect(unitTestingTask('mm', date)).toBe('30');
      });

      it('should format m correctly', () => {
          expect(unitTestingTask('m', date)).toBe('30');
      });

      it('should format ss correctly', () => {
          expect(unitTestingTask('ss', date)).toBe('15');
      });

      it('should format s correctly', () => {
          expect(unitTestingTask('s', date)).toBe('15');
      });

      it('should format ff correctly', () => {
          expect(unitTestingTask('ff', date)).toBe('123');
      });

      it('should format f correctly', () => {
          expect(unitTestingTask('f', date)).toBe('123');
      });

      it('should format A correctly', () => {
          unitTestingTask.lang('en');
          expect(unitTestingTask('A', date)).toBe('PM');
      });

      it('should format a correctly', () => {
          unitTestingTask.lang('en');
          expect(unitTestingTask('a', date)).toBe('pm');
      });

      it('should register and use custom formats', () => {
        unitTestingTask.register('customFormat', 'MMMM dd, YYYY');
        const date = new Date(2022, 3, 5);
        expect(unitTestingTask('customFormat', date)).toBe('April 05, 2022');
    });
  });

    // Test for error handling in the unitTestingTask function
    describe('Error handling', () => {
        it('should throw an error if format is not a string', () => {
            expect(() => {
                unitTestingTask(12345, new Date());
            }).toThrow(TypeError);
        });

        it('should not throw an error if date is not provided (default to current date)', () => {
            expect(() => {
                unitTestingTask('YYYY');
            }).not.toThrow();
        });
    });

    // Test for language functionality (English is already set by default)
    describe('Language functionality', () => {
        it('should correctly return the current language', () => {
            expect(unitTestingTask.lang()).toBe('en');
        });

        it('should change language when calling lang function', () => {
            unitTestingTask.lang('en'); // Make sure English is loaded
            expect(unitTestingTask.lang()).toBe('en');
        });

    });

    // Test for noConflict method
    describe('noConflict', () => {
        it('should restore previous value of unitTestingTask when calling noConflict', () => {
            const prevValue = unitTestingTask;
            const newInstance = unitTestingTask.noConflict();
            expect(newInstance).toBe(prevValue);
        });

        it('should return previous value when calling noConflict', () => {
          const prevUnitTestingTask = global.unitTestingTask;
          unitTestingTask.noConflict();
          expect(global.unitTestingTask).toBe(prevUnitTestingTask);
      });

    });
});

