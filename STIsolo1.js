

var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

// Step 1
var Employee = function(person, number, salary, rating){
this.person = person;
this.number = number;
this.salary = salary;
this.rating = rating;

}

//Step 2
atticus = new Employee("Atticus", "2405", "47000", 3);
jem = new Employee("Jem", "62347", "63500", 4);
boo = new Employee("Boo", "11435", "54000", 3);
scout = new Employee("Scout", "6243", "74750", 5);


//Step 3
var employees = [atticus, jem, boo, scout];



//hot mess below





var eval = function(employeesName){
  this.name = employeesName.person;
  this.idNumber = employeesName.number;
  this.empSalary = employeesName.salary;

  this.calcSTI = function(){
      var bonus = 0;

      if (employeesName.rating <= 2){
        bonus = 0;
      } else if (employeesName.rating === 3){
        bonus = empSalary * .04;

      } else if( employeesName.rating === 4){
        bonus = empSalary * .06

      } else if (employeesName.rating === 5){
        bonus = empSalary * .10
      }

      if (idNumber.length === 4){
        bonus += salary * .05
      }

      if (empSalary >= 65000){
        bonus -= empSalary * .01
      }


      return bonus;
   }

      this.calcComp = function(){
        this.newSalary =  empSalary + bonus;
        return newSalary;

      }

      this.calcTotal = function(){

         this.roundedSalary = Math.round(newSalary);
         return roundedSalary;
      }



   this.sti = this.calcSTI();

   this.annComp = this.calcComp();

   this.total = this.caclTotal();

  }



var assess = calcSTI(atticus);
console.log(assess);





 //Garbage Bin

 /*
 =================================
 var Employee = function (employee){
   this.employeeData = function(){
     for (var i = 0; i<employee.length; i++){
     console.log(i);
    }
  }
 }
 ==============================
 var employeeData = function(employees){
   for (var i = 0; i<employees.length; i++){
     console.log(employees[i]);
   }
 }
 ==========================
 //var employee1 = new Employee(atticus);

 */
