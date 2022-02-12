import { ApiService } from '@angular-ngrx-nx-realworld-example-app/api';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { StoreModule } from '@ngrx/store';

import { ArticleService } from '../article.service';
import { ArticleEffects } from './article.effects';
import { ActionsService } from '@angular-ngrx-nx-realworld-example-app/shared';
import { NgrxFormsFacade } from '@angular-ngrx-nx-realworld-example-app/ngrx-forms';
import { hot } from 'jasmine-marbles';
import { RouterTestingModule } from '@angular/router/testing';

describe('ArticleEffects', () => {
  let actions;
  let effects: ArticleEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({}), HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      providers: [
        ArticleEffects,
        provideMockActions(() => actions),
        ArticleService,
        ApiService,
        ActionsService,
        NgrxFormsFacade,
      ],
    });

    effects = TestBed.inject(ArticleEffects);
  });

  describe('someEffect', () => {
    it('should work', async () => {
      actions = hot('-a-|', { a: { type: 'LOAD_DATA' } });
      expect(true).toBeTruthy();
    });
  });
});
