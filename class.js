class student{
    constructor(sid, sname){
        this.sid = sid;
        this.sname = sname;
    }
    print(){
        console.log(this.sid);
        console.log(this.sname);
    }

}

let x = new student(1,"krushna");
x.print()

// for(let i in x){
//     console.log(x[i]);
// }

