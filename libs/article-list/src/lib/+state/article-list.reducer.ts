import { ArticleData } from '@angular-ngrx-nx-realworld-example-app/api';
import { Action, createReducer, on } from '@ngrx/store';
import * as ArticleListActions from './article-list.actions';

export interface ArticleList {
  listConfig: ArticleListConfig;
  articles: Articles;
}

export interface ArticleListState {
  readonly articleList: ArticleList;
}

export interface ArticleListConfig {
  type: ListType;
  currentPage: number;
  filters: Filters;
}

export interface Filters {
  tag?: string;
  author?: string;
  favorited?: string;
  limit?: number;
  offset?: number;
}

export type ListType = 'ALL' | 'FEED';

export interface Articles {
  entities: ArticleData[];
  articlesCount: number;
  loaded: boolean;
  loading: boolean;
}

export const articleListInitialState: ArticleList = {
  listConfig: {
    type: 'ALL',
    currentPage: 1,
    filters: {
      limit: 10,
    },
  },
  articles: {
    entities: [],
    articlesCount: 0,
    loaded: false,
    loading: false,
  },
};

const reducer = createReducer(
  articleListInitialState,
  on(ArticleListActions.setListPage, (state, action) => {
    const filters = {
      ...state.listConfig.filters,
      offset: state.listConfig.filters.limit * (action.page - 1),
    };
    const listConfig = {
      ...state.listConfig,
      currentPage: action.page,
      filters,
    };
    return { ...state, listConfig };
  }),
  on(ArticleListActions.setListConfig, (state, action) => ({
    ...state,
    listConfig: action.config,
  })),
  on(ArticleListActions.loadArticles, (state, _) => {
    const articles = { ...state.articles, loading: true };
    return { ...state, articles };
  }),
  on(ArticleListActions.loadArticlesSuccess, (state, action) => {
    const articles = {
      ...state.articles,
      entities: action.articles,
      articlesCount: action.articlesCount,
      loading: false,
      loaded: true,
    };
    return { ...state, articles };
  }),
  on(ArticleListActions.loadArticlesFail, (state, _) => {
    const articles = {
      ...state.articles,
      entities: [],
      articlesCount: 0,
      loading: false,
      loaded: true,
    };
    return { ...state, articles };
  }),
  on(ArticleListActions.unFavoriteSuccess, ArticleListActions.favoriteSuccess, (state, action) => ({
    ...state,
    articles: replaceArticle(state.articles, action.article),
  })),
);

function replaceArticle(articles: Articles, payload: ArticleData): Articles {
  const articleIndex = articles.entities.findIndex(a => a.slug === payload.slug);
  const entities = [
    ...articles.entities.slice(0, articleIndex),
    Object.assign({}, articles.entities[articleIndex], payload),
    ...articles.entities.slice(articleIndex + 1),
  ];
  return { ...articles, entities, loading: false, loaded: true };
}

export function articleListReducer(state: ArticleList | undefined, action: Action): ArticleList {
  return reducer(state, action);
}
