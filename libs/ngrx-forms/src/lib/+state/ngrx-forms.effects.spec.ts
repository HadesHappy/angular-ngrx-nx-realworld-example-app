import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { hot } from '@nrwl/nx/testing';

import { NgrxFormsEffects } from './ngrx-forms.effects';

describe('NgrxFormsEffects', () => {
  let actions;
  let effects: NgrxFormsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgrxFormsEffects, provideMockActions(() => actions)]
    });

    effects = TestBed.get(NgrxFormsEffects);
  });

  describe('someEffect', () => {
    it('should work', async () => {
      actions = hot('-a-|', { a: { type: 'LOAD_DATA' } });
      expect(true).toBeTruthy();
    });
  });
});
