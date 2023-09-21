let userOne = {
    email: 'ryu@ninjas.com',
    name: 'Ryu',
    login(){
        console.log(this.email, 'has logged in')
    },
    logout(){
        console.log(this.email, 'has logged out')
    }
}

userOne.name = 'Yoshi'

console.log(userOne.name)

//or

userOne['name'] = 'Igor'

console.log(userOne.name)

let userTwo = new User()