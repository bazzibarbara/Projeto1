function generateJWT(user, res){
    const body = {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
    };

    const token = jwt.sign ({ user: body }, process.env.SECRET_KEY,
        {   expiresIn: process.env.JWT_EXPIRATION });

        res.cookie('jwt', token, {
            httpOnly: true,
            secure: process.env.NODE_EMV !== 'development',
        });
}