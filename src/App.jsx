import {Header} from './components/Header';
import {Post} from './components/Post'
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css'

const posts = [
  {
    id: 1,
    author: {
    avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80.png',
    name: 'Carol Fernandes',
    role: 'CTO @Rocketseat'
  },
  content: [ 
  {type: 'paragraph', content: 'Fala galeraa',},
  {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat'},
  {type: 'link', content:'jane.design/doctorcare'},
  ],
  publishedAt: new Date('2022-05-03 20:00:00'),
},

  {
    id: 2,
    author: {
    avatarUrl: 'https://github.com/maykbrito.png',
    name: 'Mayk Brito',
    role: 'Educator @Rocketseat'
  },
  content: [ 
  {type: 'paragraph', content: 'Fala galeraa',},
  {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat'},
  {type: 'link', content:'jane.design/doctorcare'},
  ],
  publishedAt: new Date('2022-05-10 20:00:00'),
},
]

export function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
        {posts.map(post => {
          return (<Post 
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


