import Button from '../Button/Button'
import './ProjectsContent.css'
import { BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoFirebase, BiLinkAlt } from 'react-icons/bi'

export default function ProjectsContent() {

    const projetos = [
        {
            id: 1,
            foto: './imgProjetos/page.png',
            nome: 'Landing Page',
            sobre: 'Uma Landing Page que permite aos usuários acessar informações sobre a empresa e navegar pelos produtos oferecidos. Além disso, oferece recursos de gerenciamento de produtos através de um painel de controle acessível apenas por meio de um login administrativo.',
            tecnologias: [<BiLogoHtml5 />, <BiLogoCss3 />, <BiLogoJavascript />, <BiLogoFirebase />],
            link: 'https://github.com/kmateus13/Page-Oxeconcretos'
        },
        {
            id: 2,
            foto: './imgProjetos/medAPP.png',
            nome: 'MedAPP',
            sobre: 'Aplicação projetada para clínicas médicas, permitindo que os pacientes agendem consultas e visualizem seus agendamentos.',
            tecnologias: [<BiLogoHtml5 />, <BiLogoCss3 />, <BiLogoJavascript />, <BiLogoFirebase />],
            link: 'https://github.com/kmateus13/MedAPP'
        },
        {
            id: 3,
            foto: './imgProjetos/conversor.png',
            nome: 'Conversor De Unidades',
            sobre: 'Este é um projeto simples de conversão de unidades que permite converter temperaturas, moedas, distâncias e tempos.',
            tecnologias: [<BiLogoHtml5 />, <BiLogoCss3 />, <BiLogoJavascript />],
            link: 'https://github.com/kmateus13/Conversor-De-Unidades'
        },
        {
            id: 4,
            foto: './imgProjetos/linkInBio.png',
            nome: 'Link in Bio',
            sobre: 'Permite aos usuários do Instagram e outras redes sociais adicionar vários links em um único local. Com este projeto, os usuários podem adicionar links para seus sites, blogs, portfólios e outras redes sociais em uma única página.',
            tecnologias: [<BiLogoHtml5 />, <BiLogoCss3 />, <BiLogoJavascript />],
            link: 'https://github.com/kmateus13/Link-in-Bio'
        },
    ]


    return (
        <div className='projectsContent'>
            <h1>PROJETOS</h1>
            <div className='containerProject'>
                {projetos.map((projeto) => {
                    return (
                        <div className='project' key={projeto.id}>
                            <div className='fotoProjeto'>
                                <img src={projeto.foto} alt={`Imagem do projeto ${projeto.nome}`} />
                            </div>
                            <div className='descricao'>
                                <h1>{projeto.nome}</h1>
                                <p>{projeto.sobre}</p>
                                <div className='tecnologias'>
                                    <ul>
                                        {projeto.tecnologias.map((tecnologia, index) => {
                                            return (
                                                <>
                                                    <li key={index}>
                                                        {tecnologia}
                                                    </li>
                                                </>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <Button icon={<BiLinkAlt />} name='Visualizar' gradient={'#9358F7, #10D7E2'} link={projeto.link} />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}