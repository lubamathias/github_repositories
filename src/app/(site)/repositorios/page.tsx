"use client"

import { useEffect, useState } from "react"

interface Repository {
    id: number,
    name: string,
    owner: {
      avatar_url: string
    },
    visibility: boolean,
  }
  

export default function Repository(){
    const [repos, setRepos] = useState<Repository[]>([])

    useEffect(() => {
        async function getData(){
            fetch("https://api.github.com/users/lubamathias/repos")
            .then(response => response.json())
            .then((data: Repository[]) => {
                setRepos(data);
            })
        }
        getData()
    },[])
    return (
        <main>
          <h1>Página Repositórios</h1>
          <div>
            <h2>Repositório dados</h2>
            {repos.map ( (item) => (
              <div key={item.id}>
                <strong>Repositório</strong><a>{item.name}</a>
                <br /><br />
              </div>
            ))}
          </div>
        </main>
      )
}