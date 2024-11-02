function strongPassword(n, password) {
    let count = 0;
    const hasDigit = /\d/;
    const hasLowercase = /[a-z]/;
    const hasUppercase = /[A-Z]/;
    const hasSpecialChar = /[^a-zA-Z0-9]/;
    if (n > 3) {
        if (hasDigit.test(password)) {
            count++;
        }
        if (hasLowercase.test(password)) {
            count++;
        }
        if (hasUppercase.test(password)) {
            count++;
        }
        if (hasSpecialChar.test(password)) {
            count++;
        }
        if(count===3&&n<6){
            return 6-n;
        }
        if(count===4&&n<6){
            return 6-n;
        }
        return 4-count;
    }
    if(n<=3){
        return 6-n;
    }


}
console.log(strongPassword(4, "1z2!"));