


// class Home {

//     public name :string;

//     setName (Sname : string): void{
//         this.name= Sname;
//     }
    
//     getName (): string{
//       return this.name;
//     }


// }

// var obj = new Home();
// obj.setName('SHAH');
// obj.getName();

// console.log("my name  " +obj.getName());



// class Shape { 
//     Area:number 
    
//     constructor(a:number) { 
//        this.Area = a 
//     } 
//  } 
 
//  class Circle extends Shape { 
//     disp():void { 
//        console.log("Area of the circle:  "+this.Area) 
//     } 
//  }
   
//  var obj = new Circle(223); 
//  obj.disp()


class PrinterClass { 

    doPrint():void {
       console.log("doPrint() from Parent called…") 
    } 
 
 } 
 
 class StringPrinter extends PrinterClass { 
 
    doPrint():void { 
       super.doPrint() 
       console.log("doPrint() is printing a string…")
    } 
 
 } 
 
 var obj = new StringPrinter() 
 obj.doPrint()
