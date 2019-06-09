import { ActionsService } from '@angular-ngrx-nx-realworld-example-app/shared';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map, withLatestFrom } from 'rxjs/operators';

import { ArticleListService } from '../article-list.service';
import {
  ArticleListActionTypes,
  Favorite,
  LoadArticles,
  SetListConfig,
  SetListPage
} from './article-list.actions';
import * as fromActions from './article-list.actions';
import { ArticleListFacade } from './article-list.facade';

@Injectable()
export class ArticleListEffects {
  @Effect()
  setListPage = this.actions.pipe(
    ofType<SetListPage>(ArticleListActionTypes.SET_LIST_PAGE),
    map(() => ({ type: ArticleListActionTypes.LOAD_ARTICLES }))
  );

  @Effect()
  setListTag = this.actions.pipe(
    ofType<SetListConfig>(ArticleListActionTypes.SET_LIST_CONFIG),
    map(() => new fromActions.LoadArticles())
  );

  @Effect()
  loadArticles = this.actions.pipe(
    ofType<LoadArticles>(ArticleListActionTypes.LOAD_ARTICLES),
    withLatestFrom(this.facade.listConfig$),
    concatMap(([_, config]) =>
      this.articleListService.query(config).pipe(
        map(
          results =>
            new fromActions.LoadArticlesSuccess({
              articles: results.articles,
              articlesCount: results.articlesCount
            })
        ),
        catchError(error => of(new fromActions.LoadArticlesFail(error)))
      )
    )
  );

  @Effect()
  favorite = this.actions.pipe(
    ofType<Favorite>(ArticleListActionTypes.FAVORITE),
    map(action => action.payload),
    concatMap(slug =>
      this.actionsService.favorite(slug).pipe(
        map(results => new fromActions.FavoriteSuccess(results)),
        catchError(error => of(new fromActions.FavoriteFail(error)))
      )
    )
  );

  @Effect()
  unFavorite = this.actions.pipe(
    ofType<Favorite>(ArticleListActionTypes.UNFAVORITE),
    map(action => action.payload),
    concatMap(slug =>
      this.actionsService.unfavorite(slug).pipe(
        map(results => new fromActions.UnFavoriteSuccess(results)),
        catchError(error => of(new fromActions.UnFavoriteFail(error)))
      )
    )
  );

  constructor(
    private actions: Actions,
    private articleListService: ArticleListService,
    private actionsService: ActionsService,
    private facade: ArticleListFacade
  ) {}
}
