import axios from "axios";

export async function battleService(req, res, next) {
    
    const promise = await axios.get(`http://api.github.com/users/${req.body.firstUser}/repos`);

    let atividade_petulante1:number=0;
    let atividade_petulante2:number=0;

    for(let i=0;i<promise.data.length;i++){
        atividade_petulante1+=promise.data[i].stargazers_count;
    }

    const promise1 = await axios.get(`http://api.github.com/users/${req.body.secondUser}/repos`)

    for(let i=0;i<promise1.data.length;i++){
        atividade_petulante2+=promise1.data[i].stargazers_count;
    }

    console.log(atividade_petulante1)
    console.log(atividade_petulante2)

    if ( atividade_petulante1>atividade_petulante2){
        console.log("1 é maior")
    }
    if ( atividade_petulante1===atividade_petulante2){
        console.log("empate")
    }else{
        console.log("2 é maior")
    };
    next();
} 
