const savedDatas = [];

class usersDatas{
    saveUserDatas(user){
        
    	for(let usr of savedDatas){//Verifica se o email mandado ja foi registado
			if(user.email === usr.email) return false;
    	}

        //Caso nao exista, salva os dados do usuario
        savedDatas.push({...user});
        
        return true;
    }

    verifUser(userData){//Verifica se o usuario ja esta salvo
        let exist = {
            user: false,
            senha: false,
        };

        for(let user of savedDatas){
            if(user.email === userData.email || user.nome === userData.nome)
                exist.user = true;

            if(user.senha === userData.senha)
                exist.senha = true;
        }

        return exist;
    }
}

export default new usersDatas();