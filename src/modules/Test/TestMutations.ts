import TestState from './TestState';
import { Tests } from './TestDomaine';

export function modifierTests(
  state: TestState,
  tests: Tests
): void {
  state.tests = [...tests];
}