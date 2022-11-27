import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';


export function Post(props) {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>

                    <Avatar hasBorder={true} src="https://media-exp1.licdn.com/dms/image/C4E03AQH43tM4qwb4yQ/profile-displayphoto-shrink_200_200/0/1620953241453?e=1674691200&v=beta&t=W21cRynn4Kaw8R0CNKYfL6Shcp2VqapLMvotSdqcmIM" />
                    <div className={styles.authorInfo}>
                        <strong>Diego Fernandes</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title='11 de Maio às 08:13' dateTime="2022-05-11 08:13:00">Publicado há 1h </time>
            </header>

            <div className={styles.content}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p>Quaerat laborum, repellendus dignissimos reiciendis voluptates odit </p>
                <p>Corrupti ullam cum eveniet blanditiis molestiae ducimus at aut excepturi </p>
            </div>

            <form className={styles.comentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    placeholder='Deixe um comentário'
                />

                <footer>
                    <button type='submit'>Comentar</button>
                </footer>

            </form>

            <div className={styles.commentList}>
                <Comment />

            </div>
        </article>
    );
}