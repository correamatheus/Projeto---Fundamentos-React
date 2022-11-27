import { ThumbsUp , Trash} from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'


export function Comment() {
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

                        <button title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>Muito bom Dev, parabéns!!!</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}