import { Header } from './components/Header'
import { Sidebar } from './components/sidebar/Sidebar'
import { Post } from './components/post/Post'

import './global.css'
import styles from './App.module.css'

function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post title="Teste" content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos reprehenderit harum temporibus illo. Placeat asperiores illum, nihil veniam optio, quas aut enim cupiditate alias quidem aperiam iste dignissimos accusantium iusto!" />
          <Post title="Teste" content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos reprehenderit harum temporibus illo. Placeat asperiores illum, nihil veniam optio, quas aut enim cupiditate alias quidem aperiam iste dignissimos accusantium iusto!" />
        </main>
      </div>
    </div>
  )
}



export default App
