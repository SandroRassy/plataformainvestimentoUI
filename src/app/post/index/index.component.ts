import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Tendencia } from '../tendencia';
import { UsuarioPosicao } from '../usuarioposicao';
      
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
      
  posts: Tendencia[] = [];
  tendencias: Tendencia[] = [];
  usuarioposicoes!: UsuarioPosicao;
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public postService: PostService) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    /*
    this.postService.getAll().subscribe((data: Tendencia[])=>{
      this.posts = data;
      console.log(this.posts);
    }) */
    
    this.postService.getAllTendencia().subscribe((data: Tendencia[])=>{
      this.tendencias = data;
      console.log(this.posts);
    }) 
/*
    this.postService.getUsuarioPosicao('08309184778').subscribe((data: UsuarioPosicao)=>{
      this.usuarioposicoes = data;
      console.log(this.posts);
    })*/
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  deletePost(id:string){
    this.postService.delete(id).subscribe(res => {
         this.posts = this.posts.filter(item => item.key !== id);
         console.log('Post deleted successfully!');
    })
  }

  usuarioPosicaoGet(cpf:string){
    this.postService.getUsuarioPosicao(cpf).subscribe((data: UsuarioPosicao)=>{
      this.usuarioposicoes = data;
      console.log(this.posts);
    })
  }
    
}