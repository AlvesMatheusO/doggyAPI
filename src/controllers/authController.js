import bcrypt from "bcrypt";
import User from "../models/User.js";

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
}
export default AuthController;