const AuthService = require('../services/AuthService');

module.exports = {
        async login(req, res){
                const {email, password} = req.body;
                if(!email || !email.includes('@')){
                        return res.status(400).json({error: 'Email inválido.'});
                }
                try{
                        const token = await AuthService.login(email, password);
                        return res.json({message: "login feito com sucesso!"})
                        return res.json({token})
                } catch (error){
                        return res.status(401).json({error: error.message})
                }
        },

        async register(req, res){
                const {nome, email, password} = req.body;
                if(!email || !email.includes('@')){
                        return res.status(400).json({error: 'Email inválido.'});
                }
                

                try{
                        const user = await AuthService.register(nome, email, password);
                        return res.status(201).json(user);
                } catch(error){
                        return res.status(400).json({error: error.message});
                }
        }
}