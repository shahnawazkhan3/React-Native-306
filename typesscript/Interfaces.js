var AgriLoan = /** @class */ (function () {
    function AgriLoan(Sname, rebate) {
        this.rebate = rebate;
        this.name = Sname;
    }
    return AgriLoan;
}());
var obj = new AgriLoan('SHAH', 1);
console.log("Interest is : " + obj.name + " Rebate is : " + obj.rebate);
