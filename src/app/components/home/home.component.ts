import { Component, OnInit } from '@angular/core';
import { TodoItem } from 'src/app/model/todo-item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  message:string = "";

  greenColor:string= "";

  todoList: TodoItem[] = [
    new TodoItem("Sleep", false, false),
    new TodoItem("Eat", false, false),
    new TodoItem("Repeat", false, false),
  ];

  posposedList: TodoItem[]=[];

  constructor() { }

  ngOnInit(): void {
  }

  addToList():void{
    if (this.message !== ''){
      this.todoList.push(new TodoItem(this.message, false, false));
      this.message='';
    }
  }

  addToPosposedList(index:number):void{
    console.log(this.todoList[index].name, true, false);
    this.posposedList.push(new TodoItem(this.todoList[index].name, true, false));
  }

  deleteText():void{
    this.message='';
  }

  deleteAll():void{
    this.todoList=[];
  }

  enterAddElement(event: KeyboardEvent):void{
    if(event.key === "Enter") {
      if(this.message !== ''){
        this.addToList();
        this.message='';
      }
    }
  }


  deleteElement(index:number):void{
    this.todoList.splice(index, 1);  
  }

  completedTask(index:number):void{
    this.todoList[index].completed = true;
  }

  cleanCompleted():void{
    for (let i=0; i<this.todoList.length; i++){
      if (this.todoList[i].completed === true){
        this.todoList.splice(i, 1);
      }
    }
  }

  posposedTask(index:number):void{
    this.addToPosposedList(index);
    this.todoList.splice(index, 1);
  }
  
  showPosposed():void{
    for (let i=0; i<this.posposedList.length; i++){
      this.todoList.push(this.posposedList[i]);
    }
    this.posposedList=[];
  }
}
