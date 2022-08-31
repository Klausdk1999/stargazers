import axios from "axios";
const response={
    winner: "fulano", // nulo se empate
    loser: "ciclana", //nulo se empate
	draw: false // true se empate
};
export async function battleService(req, res, next) {
    
    const promise = await axios.get(`http://api.github.com/users/${req.body.firstUser}/repos`);

    let atividade_petulante1:number=0;
    let atividade_petulante2:number=0;

    for(let i=0;i<promise.data.length;i++){
        atividade_petulante1+=promise.data[i].stargazers_count;
    }

    const promise1 = await axios.get(`http://api.github.com/users/${req.body.secondUser}/repos`);

    for(let i=0;i<promise1.data.length;i++){
        atividade_petulante2+=promise1.data[i].stargazers_count;
    }

    console.log(atividade_petulante1)
    console.log(atividade_petulante2)

    if ( atividade_petulante1>atividade_petulante2){
        res.status(200).send(response)
        response.winner=req.body.firstUser;
        response.loser=req.body.secondUser;
        response.draw=false;
        console.log("1 é maior")
    }
    if ( atividade_petulante1===atividade_petulante2){
        response.winner=null;
        response.loser=null;
        response.draw=true;
        console.log("empate")
    }else{
        response.winner=req.body.secondUserfirstUser;
        response.loser=req.body.firstUser;
        response.draw=false;
        console.log("2 é maior")
    };

    res.status(200).send(response);

    next();
} 
