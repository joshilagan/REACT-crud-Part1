
import { useState } from 'react';
import './App.css';

function App() {
  const [blogContent, setBlogContent] = useState([
    {
    id: 1,
    title: "How to Deal with Peer Pressure as a Teenager",
    description : "Peer pressure is the influence that your friends or classmates have on your decisions and behavior. It can be positive or negative, depending on the situation. In this article, we will share some tips on how to cope with peer pressure and stay true to yourself."
    },
    {
    id: 2,
    title: "The Benefits of Reading for Teenagers",
    description :  "Reading is not only a fun and relaxing activity, but also a great way to improve your skills and knowledge. Reading can boost your vocabulary, creativity, critical thinking, and memory. It can also expose you to different perspectives and cultures. In this article, we will explore some of the benefits of reading for teenagers and how to find books that suit your interests.",
    },
    {
    id: 3,
    title: "The Best Apps for Teenagers in 2023", 
    description :  "Technology is an integral part of our lives, especially for teenagers. There are many apps that can help you with various aspects of your life, such as education, entertainment, health, and socializing. In this article, we will review some of the best apps for teenagers in 2023 and how they can enhance your experience."
  },
  {
    id: 4,
    title:  "How to Start a Blog as a Teenager", 
    description : "Blogging is a great way to express yourself, share your opinions, and showcase your talents. It can also help you develop your writing, communication, and marketing skills. In this article, we will guide you through the steps of starting a blog as a teenager and how to make it successful.",
  },
  {
    id: 5,
    title: "The Challenges and Opportunities of Being a Teenager in 2023",
    description : "Being a teenager in 2023 is not easy, but also exciting. You have to face many challenges, such as academic pressure, social media, climate change, and mental health. But you also have many opportunities, such as online learning, digital entrepreneurship, social activism, and innovation. In this article, we will discuss some of the challenges and opportunities of being a teenager in 2023 and how to make the most of them.",
    }
  ])

  const [newTitle, setNewTitle] = useState("")
  const [newDescription, setNewDescription] = useState("")

  const handleChange1 = (event) => {
    setNewTitle(event.target.value);
  }
  const handleChange2 = (event) => {
    setNewDescription(event.target.value);
  }

  const createPost = () => {
    const newPost = {
      //if blog content length is 0. if true, write 1, if false, get blog length - 1, use that number as an index point to get the current id then add 1.
      // [ 0 , 1 , 2 , 3 , 4 ]
      //   1   2   3   4   5
      id: blogContent.length === 0 ? 1 : blogContent[blogContent.length - 1].id + 1,
      title: newTitle,
      description: newDescription,
    }
    setBlogContent([...blogContent, newPost])
  }

  const dels = (id) => {
    //filter() method will return indexes determined to be true
    const newContent = blogContent.filter((task)=>{
      return task.id !== id;
    })
    setBlogContent(newContent)
  }

  const edit = (id, title, description) => {
    console.log(id,title,description);
    const idToBeEdited = blogContent.find((content) => content.id === id)
     console.log(` ${title}success`);
     if (newTitle) idToBeEdited.title = newTitle;
     if (newDescription) idToBeEdited.description = newDescription;
     const filteredArray = blogContent.filter((content) => content.id !== id)
     const unsortedArray = [...filteredArray, idToBeEdited]
     console.log(unsortedArray);
     setBlogContent(unsortedArray)
  }
  


  return (
    <div className="App">
      <h1>Manage Posts</h1>
      <div className='postManagement'>

      <section className='left'>
      <div className='createEdit'>
        
        <div className='manageTexts'>
          <label htmlFor='title'>Title:</label>
          <input type="text" id='title' onChange={handleChange1}/>
          <label htmlFor='description'>Description:</label>
          <textarea name="" id="description" cols="30" rows="5" onChange={handleChange2}></textarea>
          <div>
            <button onClick={createPost}>Create</button> 
          </div>
        </div>
      </div>
      </section>


      <section className='right'>
        
        
          {blogContent.map((task, key)=>{
            return(
              <div className='cards' key={key}>
                <div className='deleteButtonDiv'>
                <button onClick={()=>edit(task.id, task.title, task.description)}>Edit</button><button className='deleteButton'onClick={() => dels(task.id)}>x</button>
                </div>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
                <p className='readmore'>Read more...</p>
          </div>
            )
          })}         
        
      </section>

      </div>
    </div>
  );
}

export default App;
