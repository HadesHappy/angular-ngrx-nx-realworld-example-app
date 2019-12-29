import { ArticleComment, ArticleData } from '@angular-ngrx-nx-realworld-example-app/api';
import { Action, createReducer, on } from '@ngrx/store';
import * as ArticleActions from './article.actions';

export interface Article {
  data: ArticleData;
  comments: ArticleComment[];
  loading: boolean;
  loaded: boolean;
}

export interface ArticleState {
  readonly article: Article;
}

export const articleInitialState: Article = {
  data: {
    slug: '',
    title: '',
    description: '',
    body: '',
    tagList: [],
    createdAt: '',
    updatedAt: '',
    favorited: false,
    favoritesCount: 0,
    author: {
      username: '',
      bio: '',
      image: '',
      following: false,
      loading: false,
    },
  },
  comments: [],
  loaded: false,
  loading: false,
};

const reducer = createReducer(
  articleInitialState,
  on(ArticleActions.loadArticleSuccess, (state, action) => ({
    ...state,
    data: action.article,
    loaded: true,
    loading: false,
  })),
  on(ArticleActions.loadArticleFail, state => ({
    ...state,
    data: articleInitialState.data,
    loaded: false,
    loading: false,
  })),
  on(ArticleActions.addCommentSuccess, (state, action) => {
    const comments: ArticleComment[] = [action.comment, ...state.comments];
    return { ...state, comments };
  }),
  on(ArticleActions.deleteCommentSuccess, (state, action) => {
    const comments: ArticleComment[] = state.comments.filter(item => item.id !== action.commentId);
    return { ...state, comments };
  }),
  on(ArticleActions.initializeArticle, state => articleInitialState),
  on(ArticleActions.deleteArticleFail, state => articleInitialState),
  on(ArticleActions.loadCommentsSuccess, (state, action) => ({
    ...state,
    comments: action.comments,
  })),
  on(ArticleActions.loadCommentsFail, state => ({
    ...state,
    comments: articleInitialState.comments,
  })),
  on(ArticleActions.followSuccess, ArticleActions.unFollowSuccess, (state, action) => {
    const data: ArticleData = { ...state.data, author: action.profile };
    return { ...state, data };
  }),
  on(ArticleActions.favoriteSuccess, ArticleActions.unFavoriteSuccess, (state, action) => ({
    ...state,
    data: action.article,
  })),
);

export function articleReducer(state: Article | undefined, action: Action): Article {
  return reducer(state, action);
}
