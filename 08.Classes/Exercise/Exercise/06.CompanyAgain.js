class Company{
    constructor(){
        this.departments = []; 
    }
    
    addEmployee(name, salary, position, department){
        let args = [name, salary, position, department];
        if (args.some(x => x === "" || x === null || x === undefined || salary < 0)) {
            throw new Error('Invalid input!')
        }

        let employee = {
            name: name,
            salary: Number(salary),
            position: position
        }

        if (!this.departments[department]) {
            this.departments[department] = [];
        }
        this.departments[department].push(employee);


        return `New employee is hired. Name: ${name}. Position: ${position}`
    }

    bestDepartment(){
        let bestDepartment = '';
        let maxSalary = 0;

        for (const [department, employees] of Object.entries(this.departments)) {
            let currentDepartmentsAvgSalary = this.departments[department].reduce((acc, w) => acc + w.salary , 0) / employees.length;

            if (currentDepartmentsAvgSalary > maxSalary) {
                maxSalary = currentDepartmentsAvgSalary;
                bestDepartment = department;
            }
        }

        if (bestDepartment != '') {
            this.departments[bestDepartment].sort((a,b) => b.salary - a.salary || a.name.localeCompare(b.name))

            let output = `Best Department is: ${bestDepartment}\n`;
            output += `Average salary: ${maxSalary.toFixed(2)}\n`;

            for (const worker of this.departments[bestDepartment]) {
                output += `${worker.name} ${worker.salary} ${worker.position}\n`;
            }

            return output.trim();
        }
    }
}
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
