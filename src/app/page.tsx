import next from 'next';
import styles from './page.module.css'
import { OwnerRepo } from '@/components/OwnerRepo'
import { IoIosLogIn } from "react-icons/io";


interface Repository {
  id: number,
  name: string,
  owner: {
    login: string,
    avatar_url: string
  },
  visibility: string,
  html_url: string,
  description: string,
  private: boolean,
  license?: {
    name: string | undefined,
  },
  created_at: string,
}

async function getData() {


  const token = process.env.GITHUB_TOKEN;

  const response = await fetch("https://api.github.com/users/lubamathias/repos", {next: {revalidate: 2}})


  const data = await response.json();  
  console.log (data)


  return data;  
}


export default async function Home() {
  const datas: Repository[] = await getData();

  const formatDate = (date: string) => {
    return new Date(date).toLocaleString('pt-BR', {
      dateStyle: 'medium',
      timeStyle: 'short',
    });
  };


  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <div className={styles.repo}>
          <div className={styles.titles}>
            <h2>Repositórios Github</h2>
            <h4>Página demonstrativa dedicada a integração, via API, com a plataforma Github</h4>
            <p>Os repositórios abaixos estão sendo apresentados via requisições de APIs, com utilização de ferramentas do React e Next.js. E estão disponíveis em <a href="https://github.com/lubamathias">https://github.com/lubamathias</a>.</p>
          </div>
          <div className={styles.mainRepoContaianer}>
            {datas.map ( (item) => (
              <div key={item.id} className={styles.repoContainer}>
                <div className={styles.repoName}>
                  <p>Nome do repósitorio</p>
                  <strong>{item.name}</strong>
                  <a href={item.html_url} target='_blank'><IoIosLogIn/></a>
                </div>
                <br />
                <OwnerRepo
                  avatarUrl={item.owner.avatar_url}
                  login={item.owner.login}
                  description={item.description}
                  privatee= {item.private}
                  visibility={item.visibility}
                  license={item.license?.name}
                  repositoryURL={item.html_url}
                  repoName={item.name}
                  repoDate={formatDate(item.created_at)}


                />
              </div>
            ))}
          </div>
        </div>
      </main>

    </div>
  )
  
}