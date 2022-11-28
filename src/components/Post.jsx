import { Avatar } from './Avatar';
import { Comment } from './Comment';
import { format, compareAsc, formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

import styles from './Post.module.css';

import { ptBR } from 'date-fns/locale';
import { useState } from 'react';



export function Post({author, publishedAt, content}) {

    const [comments, setComments] = useState([
        "Um post bacana!!!"
    ]);

    const publishedDateFormated = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {locale: ptBr})
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,

    });


    function handleCreateNewComment(){
        event.preventDefault();
        const nextCommentText = event.target.comment.value;        
        setComments([...comments, nextCommentText]);
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar 
                        hasBorder={true} 
                        src={author.avatarUrl}
                    />                    
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormated} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type == 'parapraph')
                    {
                        return <p>{line.content}</p>
                    } else {
                        return <p><a>{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.comentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    name="comment"
                    placeholder='Deixe um comentário'
                />

                <footer>
                    <button type='submit'>Comentar</button>
                </footer>

            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment content={comment}/>
                })}
            </div>
        </article>
    );
}