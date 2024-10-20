import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: any[] = [];
  filteredPosts: any[] = [];
  page = 1;
  pageSize = 5;
  searchTerm = '';

  constructor(private postService: PostService, private router: Router) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
    this.postService.getPosts().subscribe((data) => {
      this.posts = data;
      this.filteredPosts = this.posts;
    });
  }

  goToPostDetail(id: number): void {
    this.router.navigate(['/post', id]);
  }

  searchPosts(): void {
    if (this.searchTerm) {
      this.postService.searchPosts(this.searchTerm).subscribe((data) => {
        this.filteredPosts = data.length ? data : [];
        if (!data.length) alert('Post não encontrado');
      });
    } else {
      this.filteredPosts = this.posts;
    }
  }

  get paginatedPosts(): any[] {
    const start = (this.page - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.filteredPosts.slice(start, end);
  }  

  onPageChange(page: number): void {
    this.page = page;
  }
}
