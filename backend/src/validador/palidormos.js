function validar(num) {
    return(
        parseFloat(
            num
                .toString()
                .split('')
                .reverse()
                .join('')
        ) * Math.sign(num)

    )


}


module.exports = validar