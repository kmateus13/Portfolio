import { useState } from 'react'
import './ContentExperience.css'

export default function ContentExperience() {

    const [selectedItem, setSelectedItem] = useState()
    const [company, setCompany] = useState()

    function activeButton(index, company) {
        setSelectedItem(index)
        setCompany(company)
    }

    const companies = [
        {
            empresa: 'Atacadão',
            profissao: 'Auxiliar Administrativo',
            competencia: "Auxiliar Administrativo responsável por controle e organização de documentos, atendimento a funcionários, apoio nos processos de recrutamento e seleção, gestão de planilhas e relatórios, além de suporte na implementação de políticas e procedimentos internos da empresa.",
            periodo: 'Jan 2018 - Atual'
        },
        {
            empresa: 'Atacadão',
            profissao: 'Jovem Aprendiz',
            competencia: 'Auxiliar Administrativo responsável por controle e organização de documentos, atendimento a funcionários, apoio nos processos de recrutamento e seleção, gestão de planilhas e relatórios, além de suporte na implementação de políticas e procedimentos internos da empresa.',
            periodo: 'Fev 2017 - Dez 2017'
        },
    ]



    return (
        <div className='containerExperience'>
            <h1>EXPERIÊNCIA</h1>
            <div className='containerContent'>
                <div className='list'>
                    {companies.map((company, index) => {
                        return (
                            <li
                                key={index}
                                onClick={() => activeButton(index, company)}
                                className={selectedItem === index ? 'selected' : ''}
                            >
                                {company.empresa}
                            </li>
                        )
                    })}
                </div>
                <div className='resultList'>
                    {company ?
                        <>
                            <div className='containerTitle'>
                                <h2>{company.profissao}</h2>
                                <label>{company.periodo}</label>
                            </div>
                            <label>{company.empresa}</label>
                            <p>{company.competencia}</p>
                        </>
                        :
                        <>
                            <h2>Sem experiência</h2>
                            <p>Infelizmente, ainda não possuo experiência na área de programação. No entanto, você pode verificar minha experiência em outras áreas.</p>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}