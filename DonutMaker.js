class DonutMaker{

    constructor(numDonuts, numAutoClicker, costOfAutoClicker, activateAutoClicker){
        this.numDonuts= numDonuts;
        this.numAutoClicker= numAutoClicker;
        this.costOfAutoClicker= costOfAutoClicker;
        this.activateAutoClicker= activateAutoClicker;
    }
   
   addDonuts(){
       if( this.numDonuts += 1){
           this.activateAutoClicker
       }
    }

    addAutoClicker(){
        if(this.numDonuts>= 100){
        this.numDonuts -= 100;
        this.numAutoClicker +=1;
         }
         if(this.costOfAutoClicker>=1){
           this.costOfAutoClicker += this.costOfAutoClicker*0.1
         
         }else{
             alert("Sorry, you don't have enough doughnuts :( ")
         }
        
      }
}


    
    export default DonutMaker;
