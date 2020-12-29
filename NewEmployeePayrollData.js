class NewEmployeePayrollData{
    // property
    id;
    name;
    salary;
    gender;
    startDate;


    constructor(...params){
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    get name(){ return this._name;}
    set setName(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(name)){
            this._name = name;

        }
            
        else
            throw 'Name is Incorrect!';
    }

    set setId(id){
        let idRegex = RegExp('^[1-9]{1}[0-9]*');
        if(idRegex.test(id)){
            this.id = id;
        }
        else{
            throw 'Id should be non-zero positive integer';
        }
    }

    

    toString(){
        const options = {year: 'numeric', month: 'long', day: 'numeric'};
        const empDate = this.startDate === undefined ? "undefined" :
                        this.startDate.toLocaleDateString("en-US", options);
        return "id="+this.id+", name='"+this.name+", salary="+this.salary+", "+
                "gender="+this.gender+", startDate="+empDate;
    }
}

    
let employeePayrollData = new NewEmployeePayrollData(1, "Mark", 30000);
console.log(employeePayrollData.toString());
try{
    employeePayrollData.setName = 'Jo';
    console.log(employeePayrollData.toString());
} catch(e){
    console.error(e);
}
let newEmployeePayrollData = new NewEmployeePayrollData(1, "Terrissa", 30000, "F", new Date());
console.log(newEmployeePayrollData.toString());
    


    