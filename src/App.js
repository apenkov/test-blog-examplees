import './App.css';

const posts =
  [
    {
      title: 'first post',
      littleText: 'preview text',
      text: 'big text'
    }, {
    title: 'second post',
    littleText: 'preview text',
    text: 'big text'
}
]


function Post(props) {
  const post = props.post;
  return (
      <div className="post">
        <p className="title">{post.title}</p>
        <p className="preview" >{post.littleText}</p>
        <p className={`body`} >{post.text}</p>
      </div>
  )
}
function Posts(props) {
  const posts = props.posts;
  const postsTemplate = posts.map((post, index)=>{
    return (
      <div key={index}>
        <Post post ={post}/>
      </div>
    )
  })
  return(
    <div>
      {postsTemplate}
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <Posts posts={posts}/>
    </div>
  );
}

export default App;
