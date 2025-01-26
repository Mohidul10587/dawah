

const form = () => {


  const handleForm = (e) => {
    e.preventDefault();
    const post = {
      title: e.target.title.value,
      text: e.target.myText.value

    }
    fetch('https://din-18sc.onrender.com/correction', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',

      },
      body: JSON.stringify({ post })
    })
      .then(res => res.json())
      .then(inserted => {


        alert('ok')
      })

  }




  return (
    <div className='pt-24'>
      <div className="flex justify-center px-8">
        <div className="w-full ">
          <form onSubmit={handleForm}>
            <label>Title</label><br />
            <input type='text' name='title' placeholder="Title" className="border-2 border-black w-full p-2" /> <br />
            <label>Details</label><br />
            <textarea name='myText' rows="10" className="border-2 border-black w-full p-2" placeholder="Details"></textarea><br />
            <button type='submit' className="border-2 border-black rounded-md p-2">Submit</button>

          </form>  </div>
      </div>
    </div>
  )
}

export default form