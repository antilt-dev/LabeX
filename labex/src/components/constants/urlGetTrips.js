import {aluno} from './aluno';

const urlGetTrips = ()=>{
    return (
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trips`
        )
}

export default urlGetTrips