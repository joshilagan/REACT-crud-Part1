
import { useState } from 'react';
import './App.css';

function App() {
  const [blogContent, setBlogContent] = useState([
    {
    "How to Deal with Peer Pressure as a Teenager" : "Peer pressure is the influence that your friends or classmates have on your decisions and behavior. It can be positive or negative, depending on the situation. In this article, we will share some tips on how to cope with peer pressure and stay true to yourself.",

    "The Benefits of Reading for Teenagers" : "Reading is not only a fun and relaxing activity, but also a great way to improve your skills and knowledge. Reading can boost your vocabulary, creativity, critical thinking, and memory. It can also expose you to different perspectives and cultures. In this article, we will explore some of the benefits of reading for teenagers and how to find books that suit your interests.",
    
    "The Best Apps for Teenagers in 2023" : "Technology is an integral part of our lives, especially for teenagers. There are many apps that can help you with various aspects of your life, such as education, entertainment, health, and socializing. In this article, we will review some of the best apps for teenagers in 2023 and how they can enhance your experience.",
    
    "How to Start a Blog as a Teenager" : "Blogging is a great way to express yourself, share your opinions, and showcase your talents. It can also help you develop your writing, communication, and marketing skills. In this article, we will guide you through the steps of starting a blog as a teenager and how to make it successful.",
    
    "The Challenges and Opportunities of Being a Teenager in 2023" : "Being a teenager in 2023 is not easy, but also exciting. You have to face many challenges, such as academic pressure, social media, climate change, and mental health. But you also have many opportunities, such as online learning, digital entrepreneurship, social activism, and innovation. In this article, we will discuss some of the challenges and opportunities of being a teenager in 2023 and how to make the most of them.",
    }
  ])
  return (
    <div className="App">
      <section>
        <p>Title:</p>
        <p>Description:</p>
        <button>Post</button>
      </section>


      <section>
        <h1>POSTS</h1>
        <div className='cards'>
          <p>Title</p>
          <p>Description</p>
          <p className='readmore'>Read more...</p>
        </div>
      </section>
    </div>
  );
}

export default App;
