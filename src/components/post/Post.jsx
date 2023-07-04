import { useState } from 'react'
import { Avatar } from '../Avatar/Avatar'
import { Comment } from '../comment/Comment'
import styles from './Post.module.css'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function Post({author, publishedAt, content}) {

  const [commments, setComments] = useState([
    'Post muito bacana, hein!?'
  ]);

  const [newCommentText, setNewCommnetText] = useState('');

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {locale: ptBR})
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  });

  function handleCreateNewComment() {
    event.preventDefault()

    setComments([...commments, newCommentText])
    setNewCommnetText('')
  }

  function handleNewCommentChange() {
    setNewCommnetText(event.target.value)
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author} >
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo} >
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()} >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {
          content.map(line => {
            if (line.type === 'paragraph') {
              return <p key={line.content} >{line.content}</p>
            } else if (line.type === 'link') {
              return <p key={line.content} ><a href='#' >{line.content}</a></p>
            }
          })
        }
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          placeholder='Deixe um comentário'
          value={newCommentText}
          onChange={handleNewCommentChange}
        />
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList} >
        {commments.map(c => <Comment content={c} />)}
      </div>
    </article>
  )
}