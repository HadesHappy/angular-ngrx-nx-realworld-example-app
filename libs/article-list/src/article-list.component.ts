import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ArticleListState, ArticleListConfig } from '@angular-ngrx-nx/article-list/src/+state/article-list.interfaces';
import { Store, select } from '@ngrx/store';
import * as fromArticleList from './+state/article-list.reducer';
import { withLatestFrom } from 'rxjs/operators/withLatestFrom';
import { Observable } from 'rxjs/Observable';
import { ArticleData } from '@angular-ngrx-nx/article/src/+state/article.interfaces';

@Component({
	selector: 'app-article-list',
	templateUrl: './article-list.component.html',
	styleUrls: ['./article-list.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleListComponent implements OnInit {
	totalPages: Array<number> = [1];
	articles$: Observable<ArticleData[]>;
	listConfig$: Observable<ArticleListConfig>;
	isLoading$: Observable<boolean>;

	constructor(private store: Store<ArticleListState>) { }

	ngOnInit() {
		this.getTotalPages();
		this.articles$ = this.store.pipe(select(fromArticleList.getArticles));
		this.listConfig$ = this.store.pipe(select(fromArticleList.getListConfig));
		this.isLoading$ = this.store.pipe(select(fromArticleList.isLoading));
	}

	favorite(slug: string) {
		this.store.dispatch({
			type: '[article-list] FAVORITE',
			payload: slug
		});
	}

	unFavorite(slug: string) {
		this.store.dispatch({
			type: '[article-list] UNFAVORITE',
			payload: slug
		});
	}

	navigateToArticle(slug: string) {
		this.store.dispatch({ type: '[Router] Go', payload: { path: ['/article', slug] } });
	}

	getTotalPages() {
		this.store
			.select(fromArticleList.getArticlesCount)
			.pipe(withLatestFrom(this.store.select(fromArticleList.getListConfig)))
			.subscribe(([articlesCount, config]) => {
				this.totalPages = Array.from(
					new Array(Math.ceil(articlesCount / config.filters.limit)),
					(val, index) => index + 1
				);
			});
	}

	setPage(page: number) {
		this.store.dispatch({
			type: '[article-list] SET_LIST_PAGE',
			payload: page
		});
	}
}
