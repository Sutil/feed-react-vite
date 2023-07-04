import { Header } from './components/Header'
import { Sidebar } from './components/sidebar/Sidebar'
import { Post } from './components/post/Post'

import './global.css'
import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      name: 'Eduardo Sutil',
      avatarUrl: 'https://github.com/Sutil.png',
      role: 'Software Engineer @FullstackLabs'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: '👉 jane.design/doctorcare'}
    ],
    publishedAt: new Date('2023-06-01 20:00:00')
  },
  {
    id: 2,
    author: {
      name: 'Thiago Lourin',
      avatarUrl: 'https://github.com/lourintp.png',
      role: 'Software Engineer @GetMob'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: '👉 jane.design/doctorcare'}
    ],
    publishedAt: new Date('2023-06-03 15:30:00')
  }
]

function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map((post) => {
              return (<Post key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })
          }
        </main>
      </div>
    </div>
  )
}



export default App
