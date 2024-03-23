//Bài 1
interface AddFn {
    (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
    return n1 + n2 ;
}

//Bài 2
interface Named {
    readonly name?: string;
    outputName?: string;
}

interface Greetable extends Named {
    greet(phrase: string): void;
}

let user1: Greetable;

user1 = new Person();

user1.greet('Hi there - I am');
console.log(user1);

//Bài 3
abstract class  Department {
    static fiscalYear = 2020;

    protected employees: string[] = [];

    constructor( protected readonly id: string, public name: string){

    }

    static createEmployee(name: string){
        return{ name: name};
    }
    
    abstract describe(this: Department): void;

    addEmployee(employee: string){
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);       
    }
}

class ITDepartment extends Department {
    admins: string[];
    constructor(id: string, admins: string[]){
        super(id, 'IT');
        this.admins = admins;
    }

    describe() {
        console.log('IT Department - ID:' + this.id);
    }
}

const employee1 = Department.createEmployee('Nguyen');
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment('d1', ['Nguyen']);

it.addEmployee('Nguyen');
it.addEmployee('CNguyen');
