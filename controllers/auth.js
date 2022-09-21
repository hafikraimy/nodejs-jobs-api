const register = async (req, res) => {
    res.status(200).send('register user')
}

const login = async (req, res) => {
    res.status(200).send('login user')
}

module.exports = {
    register,
    login,
}