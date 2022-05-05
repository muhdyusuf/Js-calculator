let calculator={
 upperDisplay:"",
 lowerDisplay:"",
 operation:undefined,
 updateDisplay(){
    $('#upper').text(this.upperDisplay)
    $('#lower').text(this.lowerDisplay)


 },
 clear(){
     this.lowerDisplay="0"
     this.upperDisplay=""
     this.operation=undefined
     this.updateDisplay()
 },
 setOperation(operation){


    
   
    if(!this.operation && this.upperDisplay===""){
        
        this.operation=operation
         this.upperDisplay=this.lowerDisplay
         this.lowerDisplay=""
         $('#upper').text(this.upperDisplay)
         $('#lower').text(this.operation+this.lowerDisplay)
    }
   
    else if(!this.operation && this.upperDisplay!==""){
        this.operation=operation
         $('#lower').text(this.operation+this.lowerDisplay)
    }
    else if (this.operation && operation === "-" && this.lowerDisplay === "") {
        this.lowerDisplay=operation+this.lowerDisplay
        $('#lower').text(this.operation+this.lowerDisplay)
        
    }
    else if(this.operation){
        this.calculate()
        this.operation=operation
        this.lowerDisplay=""
        $('#upper').text(this.upperDisplay)
        $('#lower').text(this.operation+this.lowerDisplay)
    }
    
   



     
     
    
    //  else if(this.operation && operation === "-" && this.lowerDisplay=== "" ){
    //      console.log("dsfsdfsd")
    //      this.lowerDisplay="-"
    //      $('#lower').text(this.lowerDisplay)
         
    //  }
    
    // else if(this.operation && (this.lowerDisplay !== "" || this.lowerDisplay ==="-")){
    //     console.log("ksadkas")
    //     this.calculate()
    //     this.operation=operation
    //     this.upperDisplay=this.lowerDisplay
    //     this.lowerDisplay=""
    //     $('#upper').text(this.upperDisplay + this.operation)
    //      $('#lower').text(this.lowerDisplay)
        
    // }
    
    // else{
    //     return
    // }
 },
 appendNumber(num){
     if(/^0$/.test(this.lowerDisplay) && num == "0") return
     if(/^0$/.test(this.lowerDisplay) && num != "0"){
         this.lowerDisplay=""
     }
     this.lowerDisplay=this.lowerDisplay+num
     if(this.operation){
        $('#lower').text(this.operation+this.lowerDisplay)
     }
     else if(!this.operation){
        $('#lower').text(this.lowerDisplay)
     }
     
 },
 calculate(){
     if(this.lowerDisplay==="" || this.lowerDisplay === "-")return
     let total
     switch(this.operation){
         case "/":{
             total=this.upperDisplay/this.lowerDisplay
    
         }
         break
         case "X":{
            total=this.upperDisplay*this.lowerDisplay
   
        }
        break
        case "+":{
            total= parseFloat(this.upperDisplay)+parseFloat(this.lowerDisplay)
   
        }
        break
        case "-":{
            total=this.upperDisplay-this.lowerDisplay
   
        }
        break
        default:return
       
     }
     this.operation=undefined
     this.lowerDisplay=""
     this.upperDisplay=total
     this.updateDisplay()
    
     

 },
 addDecimal(){
    if(this.lowerDisplay.includes("."))return
    this.lowerDisplay=this.lowerDisplay===""? "0.":this.lowerDisplay+"."
    this.updateDisplay()
 }
 

}






$('.number').click((e)=>{
   calculator.appendNumber(e.target.innerText)
   
})
$('.operation').click(e=>{
    calculator.setOperation(e.target.innerText)
  
})


$('#equals').click(e=>{
    calculator.calculate()
})
$('#clear').click(e=>{
    calculator.clear()
})
$('#decimal').click(e=>{
    calculator.addDecimal()
})