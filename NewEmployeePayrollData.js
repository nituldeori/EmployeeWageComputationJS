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

    get name(){ return this.name;}
    get id(){return this.id;}
    get salary(){return this.salary;}
    get gender(){return this.gender;}
    get startDate(){return this.startDate;}
    
    set setName(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(name)){
            this.name = name;

        }
            
        else{
            throw 'Name is Incorrect!';
        }
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

    set setSalary(salary){
        let salaryRegex = RegExp('^[1-9]{1}[0-9]*');
        if(salaryRegex.test(salary)){
            this.salary = salary;
        }
        else{
            throw 'Salary should be non-zero positive integer';
        }
    }

    set setGender(gender){
        let genderRegex = RegExp('^(M || F)');
        if(genderRegex.test(gender)){
            this.gender = gender;
        }
        else{
            throw 'Gender should be M or F';
        }
    }

    set setStartDate(startDate){
        let givenDate = new Date(startDate);
        let todayDate = new Date();
        if(givenDate > todayDate){
            throw 'Start Date cannot be a future date'
        }
        else{
            this.startDate = startDate;
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
    employeePayrollData.setId='1';
    employeePayrollData.setName='Jon';
    employeePayrollData.setSalary=1999;
    employeePayrollData.setGender = 'M';
    employeePayrollData.setStartDate='2019-10-11';
    console.log("id: "+employeePayrollData.id+" name: "+employeePayrollData.name+ " salary: "+employeePayrollData.salary+" gender: "+employeePayrollData.gender+" startDate: "+employeePayrollData.startDate);
} catch(e){
    console.error(e);
}
let newEmployeePayrollData = new NewEmployeePayrollData(1, "Terrissa", 30000, "F", new Date());
console.log(newEmployeePayrollData.toString());
    


    