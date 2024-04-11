import { useEffect } from 'react';
import './EducationContent.css'


export default function EducationContent() {


    const schools = [
        {
            nome: 'UNIFACISA | Centro Universitário',
            curso: 'Análise e Desenvolvimento de Sistemas',
            status: 'Em andamento',
            imagem: './logoUnifacisa.png'
        },
        {
            nome: 'ONE - Oracle Next Education',
            curso: 'Front-End + React',
            status: 'Concluído',
            imagem: './logoAluraeOracle.png'
        },
        {
            nome: 'OneBitCode',
            curso: 'FullStack JavaScript',
            status: 'Em andamento',
            imagem: './logoOneBitCode.png'
        },
    ]

    

    return (
        <div className='educationContainer'>
            <h1>FORMAÇÃO ACADÊMICA</h1>
            <div className='containerSchool'>
                {schools.map((school, index) => {
                    return (
                        <div className='contentSchool effectScroll' key={index}>
                            <div className='containerImagem'>
                                <img src={school.imagem} alt="Imagem da Escola" />
                            </div>
                            <div className='infos'>
                                <h1>{school.nome}</h1>
                                <h2>{school.curso}</h2>
                                <h3>{school.status}</h3>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}