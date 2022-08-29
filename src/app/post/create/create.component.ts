import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Posicao } from '../posicao';
import { Position } from '../posicao';
     
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
    
  form!: FormGroup;
  posicao!: Posicao;
  isShown: boolean = false ;
  newposition!: Position;
  htmlStr: string = '';
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public postService: PostService,
    private router: Router
  ) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.form = new FormGroup({
      cpf: new FormControl('', [Validators.required]),
      symbol: new FormControl('', Validators.required),
      amount: new FormControl('', Validators.required)      
    });

    
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  get f(){
    return this.form.controls;
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  submit(){
    console.log(this.form.value);    

    this.postService.create(this.form.value).subscribe((res:any) => {
         console.log('Post created successfully!');
         this.router.navigateByUrl('post/index');
    }
    ,(err) =>{
      console.log(err);
      this.htmlStr = "Erro ao efetuar a compra: " + err;
      this.isShown = true;
    }
    )
  }
  
}