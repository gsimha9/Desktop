class person {
    constructor(name) {
        this.name = name
    }
    greet(){
        console.log(`Hello ${this.name}`)
    }
}
class student extends person {

}
let student1 = new student("simha")
student1.greet()