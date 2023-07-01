import { PencilLine } from 'phosphor-react'
import styles from './Sidebar.module.css'
import { Avatar } from '../Avatar/Avatar'

export function Sidebar() {
  return (
    <aside className={styles.sidebar} >
      <img 
        className={styles.cover} 
        src="https://images.unsplash.com/photo-1484589065579-248aad0d8b13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="Cover" 
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/Sutil.png" />
        <strong>Eduardo Sutil</strong>
        <span>Frontend engineer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}