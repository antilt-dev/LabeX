import { aluno } from "./aluno";

const urlGetTripDetail = (id)=>{
    return(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trip/${id}`
    )
}

export default urlGetTripDetail