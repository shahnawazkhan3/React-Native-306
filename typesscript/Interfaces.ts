
interface ILoan { 
    interest:number 
 } 

 interface Name {
       name :string
 }
 
 class AgriLoan implements Name { 
 
    name :string
    rebate:number 
    
    constructor(Sname :string,rebate:number) { 
   
       this.rebate = rebate
       this.name = Sname; 
    } 
 } 
 
 var obj = new AgriLoan('SHAH',1) ;
 console.log("Interest is : "+obj.name+" Rebate is : "+obj.rebate )