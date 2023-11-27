import './style.css'
import img1 from '../img/img1.jpg'

export function Main(){
    return(
        <>

            <img id='imagem' src={img1}/>

            <strong id='label'><label >Transformando <span className='cor'>espaço</span>,   Criando <span className='cor'>história</span></label></strong>

            <label className='texto'>Nós criamos ambientes <strong>exclusívos</strong> e <strong>únicos</strong>, com muito bom gosto e profissionalismo, investimos tempo e <span className='cor'>dedicação no seu projeto</span>. Nosso compromisso vai além de simplesmente decorar.</label>

            <label className='texto' id='textoBaixo'>Tenha <span className='cor'>ambientes limpos</span> e bem decorados, transmitindo <strong>elegância</strong> e <strong >finesse</strong> para todo aquele que estiver ali. Sua história visual começa  aqui!</label>
           
        </>

    )
}