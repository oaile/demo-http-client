import { Article } from './article.model';
import { ArticlesService } from './articles.service';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  urlApi: string = "http://httpbin.org";
  title = 'app';
  article: Article = new Article();
  constructor(private articleService:ArticlesService){
  }

  
  doGET() {
    console.log("GET");
    let url = 'henry-10cmf7';
    this.articleService.get(url).subscribe(res => console.log(res)); 
  }

  doPost(){
    this.article.title = 'oai test 1000';
    this.article.description = 'oai test 1000';
    this.article.body = '10000 01010';

    console.log("POST: " + this.article.title);

    this.articleService
    .save(this.article)
    .subscribe(
      article => article.title,
      err => {
        console.log('Post Error!:' + err);
      }
    );
  }
}

