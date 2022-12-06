import { ThumbsUp , Trash} from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'


export function Comment(props) {

    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment(){
        props.onDeleteComment(props.content)
    }

    function handleLikeComment(){
       setLikeCount((state) => {
            return state + 1;
       })
    }
    
    return (
        <div className={styles.comment}>            
        <Avatar hasBorder={false}  src="https://media-exp1.licdn.com/dms/image/C4E03AQH43tM4qwb4yQ/profile-displayphoto-shrink_200_200/0/1620953241453?e=1674691200&v=beta&t=W21cRynn4Kaw8R0CNKYfL6Shcp2VqapLMvotSdqcmIM"/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Matheus Correa</strong>
                            <time title='11 de Maio às 08:13' dateTime="2022-05-11 08:13:00">Cerca de 1h atrás </time>
                        </div>
                      
                        <button onMouseDown={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{props.content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}