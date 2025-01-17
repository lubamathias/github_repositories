 "use client"
 
 import { useState } from "react"
 import Image from "next/image"
 import style from "@/components/OwnerRepo/page.module.css"


 interface OwnerPropsRepo {
    avatarUrl: string,
    login: string,
    description: string,
    privatee: boolean,
    visibility: string,
    license: string | undefined,
    repositoryURL: string,
    repoName: string,
    repoDate: string,
 }


 export function OwnerRepo ({avatarUrl, login, description, privatee, visibility, license, repositoryURL, repoName, repoDate}: OwnerPropsRepo){
    const[show, setShow] = useState(false);
    const[ownerButton, setOwnerButton] = useState(true);


    return (
        <div className={style.main}>
            {show && (
                <div className={style.userMainConta}>
                    <div className={style.userContainer}>
                        <Image
                            alt="Foto do usuário"
                            src={avatarUrl}
                            width={50}
                            height={50}
                            className={style.picture}
                        />
                        <strong className={style.user}>{login}</strong>
                    </div>
                    <div className={style.details}>
                        <ul className={style.list}>
                            <li>
                                <strong>
                                    Descrição:
                                </strong>
                                {description ? (
                                    <p>
                                        {description} 
                                    </p>                                
                            ): (
                                <p style={{ 'fontStyle': 'italic', 'fontSize': 'smaller', 'fontWeight': 'bolder'}}>
                                    Sem descrição
                                </p>
                            )}
                            </li>
                            <li>
                                <strong>
                                    Data de criação:
                                </strong>
                                <p style={{ 'fontStyle': 'italic', 'fontSize': 'smaller', 'fontWeight': 'bolder'}}>
                                    {repoDate}
                                </p>
                            </li>
                            <li>
                                <strong>
                                    Privado:
                                </strong>
                                    
                                    {privatee ? (
                                        <p>Sim</p>
                                    ):
                                    (
                                        <p>Não</p>
                                    )}
                            </li>
                            <li>
                                <strong>
                                    Visibilidade:
                                </strong>
                                {visibility === 'public' && (
                                    <p>Público</p>
                                )}
                            </li>
                            <li>
                                <strong>
                                    Licença:
                                </strong>
                                {license ? (
                                    <p>
                                        {license}
                                    </p>
                                ): (
                                    <p>Não possui</p>
                                )}
                            </li>
                            <li>
                                <strong>
                                    URL:
                                </strong>
                                {repositoryURL && (
                                    <a href={repositoryURL} target="_blank">
                                        lubamathias/{repoName}
                                    </a>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
                
            )}

            {ownerButton ? (
                <button onClick={() => {
                    setShow(true); 
                    setOwnerButton(false)
                }}>
                    detalhes
                </button>
            
            ):
            (
                <button onClick={() => {
                    setShow(false); 
                    setOwnerButton(true)
                    
                }}>
                    ocultar
                </button>
            )}
        </div>
    )
 }