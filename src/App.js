import './App.css';
import { useState, useRef } from 'react';

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
  const [editedTitle, setEditedTitle] = useState("")
  const [editedDescription, setEditedDescription] = useState("")
  const [editedId, setEditedId] = useState("")
  const inputRef = useRef(null);
  const inputRef2 = useRef(null)

  const handleChange1 = (event) => {
    setNewTitle(event.target.value);
  }

  const handleChange2 = (event) => {
    setNewDescription(event.target.value);
  }

  const createPost = () => {
    const newPost = {
      //is blog content length strictly equal to 0 ? if true, write 1, if false, get blog length - 1, use that number as an index point to get the current id then add 1.
      // [ 0 , 1 , 2 , 3 , 4 ]
      //   1   2   3   4   5
      id: blogContent.length === 0 ? 1 : blogContent[blogContent.length - 1].id + 1,
      title: newTitle,
      description: newDescription,
    }
    //use spread operator to combine newPost to blogContent
    setBlogContent([...blogContent, newPost])
  }

  const dels = (id) => {
    //filter() method will return indexes determined to be true
    const newContent = blogContent.filter((task)=>{
      return task.id !== id;
    })
    setBlogContent(newContent)
  }

  //get the value of the card id, title and description and save it to a variable
  //set these variables as default values of Input Title and Description Text
  const edit = (id, title, description) => {   
    setEditedTitle(title)
    setEditedDescription(description)
    setEditedId(id)
  }

    // using the info from the edit function, update the blog card
    const updatePost = () => {
    //use find() method to look for the id in the blogContent arrayObject using the editedId variable
    const idToBeEdited = blogContent.find((content) => content.id === editedId)
     console.log(` ${newTitle}success`);
     //handle the error if theres no input on the fields
     if (!idToBeEdited) {
      return alert('Please enter input fields')
     }
      //if there is newTitle, assign it as title to the idToBeEdited object variable
      if (newTitle) idToBeEdited.title = newTitle;
      //if there is newDescription, assign it as description to the idToBeEdited object variable
      if (newDescription) idToBeEdited.description = newDescription;
      //filter the blogContent array excluding the editedId index
      //filter() method will return indexes determined to be true
      const filteredArray = blogContent.filter((content) => content.id !== editedId)
      //use spread operator to combine the idToBeEdited index into the filteredArray arrayobject
      const unsortedArray = [...filteredArray, idToBeEdited]     
      //use sort method to sort the entire array in ascending order using the array's id
      setBlogContent(unsortedArray.sort((a, b) => a.id > b.id ? 1 : a.id < b.id ? -1 : 0))
    }
  
    const clear = () => {
      setEditedTitle('')
      setNewTitle('')
      inputRef.current.value = "";
      inputRef2.current.value = "";
    }
    
  return (
    <div className="App">
      <h1>Manage Posts</h1>
      <div className='postManagement'>

      <section className='left'>
      <div className='createEdit'>
        
        <div className='manageTexts'>
          <label htmlFor='title'>Title:</label>
          {/* defaultValue prop makes the input editable */}
          <input type="text" id='title' ref={inputRef} onChange={handleChange1} defaultValue={editedTitle}/>
          <label htmlFor='description'>Description:</label>
          <textarea name="" id="description" cols="30" rows="5" ref={inputRef2} onChange={handleChange2} defaultValue={editedDescription}></textarea>
          <div>
            <button onClick={createPost}>Create</button> 
            <button onClick={updatePost}>Update</button> 
            <button onClick={clear}>Clear</button>
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
