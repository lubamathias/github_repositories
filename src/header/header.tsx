import Link from "next/link"
import style from "./header.module.css"

export default function Header(){
    return(
        <div>
            <header className={style.header}>
                <div className={style.links}>
                    <Link href='/' >Home</Link> <br />
                    <Link href='/repositorios'>Repositório</Link>
                    <Link href='/contato'>Contato</Link>
                </div>
            </header>

        </div>
    )
}