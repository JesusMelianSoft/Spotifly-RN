const comprobePassword = (password, confirmPassword) => {
    if(password == confirmPassword && password.length >= 8 && password.match(/\d/) && password.match(/[A-Z]/) && password.match(/[A-z]/)) {
        console.log("CUMPLE LOS REQUISITOS")
        return true
    }else{
        return false
    }
}

const comprobeMail = (mail) => {
    if(/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.exec(mail)){
        console.log("EL EMAIL ES CORRECTO")
        return true
    }else{
        return false
    }
}

module.exports = {comprobePassword, comprobeMail}