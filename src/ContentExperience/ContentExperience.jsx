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
            competencia: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            periodo: 'Jan 2018 - Atual'
        },
        {
            empresa: 'Atacadão',
            profissao: 'Jovem Aprendiz',
            competencia: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
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