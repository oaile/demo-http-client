import { Article } from './article.model';
import { Observable } from 'rxjs/Rx';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ArticlesService {

  constructor( private apiService:ApiService) { }

  get(slug): Observable<Article> {
    return this.apiService.get('/articles/' + slug)
           .map(data => data.article);
  }

  save(article): Observable<Article> {
    // If we're updating an existing article
    if (article.slug) {
      return this.apiService.put('/articles/' + article.slug, {article: article})
             .map(data => data.article);

    // Otherwise, create a new article
    } else {
      return this.apiService.post('/articles/', {article: article})
             .map(data => data.article);
    }
  }

}
