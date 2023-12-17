
import { useState } from 'react';
import './App.css';

function App() {
  const [blogContent, setBlogContent] = useState([
    {
    title: "How to Deal with Peer Pressure as a Teenager",
    description : "Peer pressure is the influence that your friends or classmates have on your decisions and behavior. It can be positive or negative, depending on the situation. In this article, we will share some tips on how to cope with peer pressure and stay true to yourself."
    },
    {
    title: "The Benefits of Reading for Teenagers",
    description :  "Reading is not only a fun and relaxing activity, but also a great way to improve your skills and knowledge. Reading can boost your vocabulary, creativity, critical thinking, and memory. It can also expose you to different perspectives and cultures. In this article, we will explore some of the benefits of reading for teenagers and how to find books that suit your interests.",
    },
    {
    title: "The Best Apps for Teenagers in 2023", 
    description :  "Technology is an integral part of our lives, especially for teenagers. There are many apps that can help you with various aspects of your life, such as education, entertainment, health, and socializing. In this article, we will review some of the best apps for teenagers in 2023 and how they can enhance your experience."
  },
  {
    
    title:  "How to Start a Blog as a Teenager", 
    description : "Blogging is a great way to express yourself, share your opinions, and showcase your talents. It can also help you develop your writing, communication, and marketing skills. In this article, we will guide you through the steps of starting a blog as a teenager and how to make it successful.",
  },
  {
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
            <button>Create</button> <button>Edit</button>
          </div>
        </div>
      </div>
      </section>


      <section className='right'>
        
        
          {blogContent.map((task, key)=>{
            return(
              <div className='cards'>
                <div className='deleteButtonDiv'>
                  <button className='deleteButton'>x</button>
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
