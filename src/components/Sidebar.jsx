import styles from './Sidebar.module.css';
import {PencilLine} from 'phosphor-react'
import { Avatar } from './Avatar';
export function Sidebar(){
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" />
           
            <div className={styles.profile}>                
                <Avatar hasBorder src="https://media-exp1.licdn.com/dms/image/C4E03AQH43tM4qwb4yQ/profile-displayphoto-shrink_200_200/0/1620953241453?e=1674691200&v=beta&t=W21cRynn4Kaw8R0CNKYfL6Shcp2VqapLMvotSdqcmIM"/>
                <strong>Matheus Correa</strong>
                <span>FullStack</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                    </a>
            </footer>
        </aside>
    );
}