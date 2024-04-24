import bcrypt from "bcrypt";
import User from "../models/User.js";
import jwt from "jsonwebtoken";

class AuthController {

    static async registerUser(req, res) {



        const { name, email, password, confirmPassword } = req.body;

        if (!name) {
            return res.status(422).json({ msg: "O nome é obrigatório!" });
        }
        if (!email) {
            return res.status(422).json({ msg: "O email é obrigatório!" });
        }
        if (!password) {
            return res.status(422).json({ msg: "A senha é obrigatória!" });
        }
        if (!confirmPassword) {
            return res.status(422).json({ msg: "Por favor, confirme sua senha!" });
        }

        if (password != confirmPassword) {
            return res.status(422).json({ msg: "Senhas diferentes, verifique se digitou o mesmo valor." });
        }

        // Verifica se o usuário já existe.
        const userExist = await User.findOne({ email: email });

        if (userExist) {
            return res.status(422).json({ msg: "Usuário encontrado! Logue na sua conta ou utilize outro email." });
        }

        // Criar senha
        const salt = await bcrypt.genSalt(12);
        const passwordHash = await bcrypt.hash(password, salt);

        //criar usuário
        const user = new User({
            name,
            email,
            password
        });

        try {
            
            await user.save();
            res.status(201).json({msg: "Usuário criado com sucesso."})    

        } catch (error) {

            console.log(error);
            res.status(500).json({msg: "Aconteceu um erro no servidor, tente novamente mais tarde."});
        }
    }

    static async login(req, res) {
        const {email, password} = req.body;

        if (!email) {
            return res.status(422).json({ msg: "O email é obrigatório." });
        }
        if(!password) {
            return res.status(422).json({ msg: "A senha é obrigatória." });
        }
        
        const user = await User.findOne({ email: email });

        if (!user) {
            return res.status(404).json({ msg: "Usuário não encontrado!" });
        }

        const checkPassword = await password == user.password;

        console.log(password);
        console.log(user.password);

        if (!checkPassword) {
            return res.status(422).json({ msg: "Senha incorreta, verifique novamente." });
        }
        
        try {
            const secret = process.env.SECRET;  
            const token = jwt.sign(
                {
                    id: user._id,
                },
                secret,
            )
            res.status(200).json({ msg: "Autenticação realizada com sucesso.", token });
        } catch (error) {
            console.log(error);
            res.status(500).json({ msg: "Falha na autenticação." });
        }
    }
}
export default AuthController;