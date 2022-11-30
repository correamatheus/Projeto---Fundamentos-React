
import styles from './App.module.css';
import './global.css';

import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';

// author {avatar_url: "", name: "", role: ""}
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://media-exp1.licdn.com/dms/image/C4E03AQH43tM4qwb4yQ/profile-displayphoto-shrink_200_200/0/1620953241453?e=1674691200&v=beta&t=W21cRynn4Kaw8R0CNKYfL6Shcp2VqapLMvotSdqcmIM",
      name: 'Matheus Correa',
      role: 'CTO @ Dunamis'
    },
    content: [
      { type: 'parapraph', content: 'Fala Galera!!' },
      { type: 'parapraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nobis unde deserunt excepturi, doloremque eveniet architecto. Quibusdam ab molestiae tenetur velit cumque. Eius ea id magnam, sapiente iusto ab error.' },
    ],
    publishedAt: new Date('2022-05-03 20:00:00')
  },

  {
    id: 2,
    author: {
      avatarUrl: "https://media-exp1.licdn.com/dms/image/C4E03AQFwtD3lYzTsIw/profile-displayphoto-shrink_100_100/0/1538543889839?e=1675296000&v=beta&t=-BOQ1-fiOXGJCnjwOTTBHPJeNu6qcAIr8Fl88pd29Ik",
      name: 'Edivaldo Correa',
      role: 'Gerente Comercial @ Dunamis'
    },
    content: [
      { type: 'parapraph', content: 'Fala Galera!!' },
      { type: 'parapraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nobis unde deserunt excepturi, doloremque eveniet architecto. Quibusdam ab molestiae tenetur velit cumque. Eius ea id magnam, sapiente iusto ab error.' },
    ],
    publishedAt: new Date('2023-11-24 20:00:00')
  },
];
function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>


  )
}

export default App
