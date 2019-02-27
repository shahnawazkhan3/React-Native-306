// class Home {
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var PrinterClass = /** @class */ (function () {
    function PrinterClass() {
    }
    PrinterClass.prototype.doPrint = function () {
        console.log("doPrint() from Parent called…");
    };
    return PrinterClass;
}());
var StringPrinter = /** @class */ (function (_super) {
    __extends(StringPrinter, _super);
    function StringPrinter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StringPrinter.prototype.doPrint = function () {
        _super.prototype.doPrint.call(this);
        console.log("doPrint() is printing a string…");
    };
    return StringPrinter;
}(PrinterClass));
var obj = new StringPrinter();
obj.doPrint();
