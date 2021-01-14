const ROWS = 15;
const COLUMNS = 15;
const SIZE_IMAGE = 32;

class Game {
  constructor(files, columnes){
    if(!arguments.length){
      this.rows = ROWS;
      this.columns = COLUMNS;
      this.sizeImage = SIZE_IMAGE;
      this.maze =  [
                    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
                    [1,2,0,0,0,0,0,0,0,0,0,0,0,2,1],
                    [1,0,1,1,1,1,1,0,1,1,1,1,1,0,1],
                    [1,0,1,2,0,0,1,0,1,0,0,2,1,0,1],
                    [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
                    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
                    [1,0,1,1,0,1,1,1,1,1,0,1,1,0,1],
                    [1,0,0,0,0,1,0,0,0,1,0,0,0,0,1],
                    [1,0,1,1,0,1,1,1,1,1,0,1,1,0,1],
                    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
                    [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
                    [1,0,1,2,0,0,1,0,1,0,0,2,1,0,1],
                    [1,0,1,1,1,1,1,0,1,1,1,1,1,0,1],
                    [1,2,0,0,0,0,0,0,0,0,0,0,0,2,1],
                    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
                  ];
    } /*else if(arguments.length === 2){

      this.rows = files;
      this.columns = columnes;
      this.sizeImage = SIZE_IMAGE;
      this.maze =  [];
      for(let i = 0; i<files; i++){
        let fila = [];
        for(let j = 0; j<columnes; j++){
          fila[j] = Math.random() * (20 - 10 + 1)) + 10;
        } //Tanquem J
        maze.push(fila);
      } //Tanquem I
    } */
  } //Tanquem constructor
  /*
  constructor(){
    this.rows = ROWS;
    this.columns = COLUMNS;
    this.sizeImage = SIZE_IMAGE;
  } */
} //Tanquem classe
