import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

const routes: Routes = [
  { path: '', component: PostListComponent }, // Rota padrão
  { path: 'post-list', component: PostListComponent }, // Rota para a lista de posts
  { path: 'post/:id', component: PostDetailComponent } // Rota para os detalhes do post
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
