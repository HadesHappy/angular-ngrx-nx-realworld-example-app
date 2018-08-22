import { ApiService } from '@angular-ngrx-nx-realworld-example-app/api';
import { ArticleListConfig } from './+state/article-list.interfaces';
import { ArticleData } from '@angular-ngrx-nx-realworld-example-app/article';
import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ArticleListService {
  constructor(private apiService: ApiService) {}

  query(config: ArticleListConfig): Observable<any> {
    return this.apiService.get(
      '/articles' + (config.type === 'FEED' ? '/feed' : ''),
      this.toHttpParams(config.filters)
    );
  }

  private toHttpParams(params) {
    return Object.getOwnPropertyNames(params).reduce((p, key) => p.set(key, params[key]), new HttpParams());
  }
}
