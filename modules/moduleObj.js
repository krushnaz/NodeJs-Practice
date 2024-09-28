var Employee = {
    id : 101,
    name : "krushna zarekar",
    salary : 300000,
    setData : function(id, name, salary){
        this.id = id;
        this.name = name;
        this.salary = salary;
    },
    printInfo : function(){

        console.log(this.id , this.name , this.salary);
    }
    
}

module.exports = Employee;
