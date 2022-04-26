import "./Contact.css"

function Contact(){
  return(
    <>
         <section className='contact-container'>
            
         <p className='contact-p'>Have any question or complains to make?</p>
         
      <form className="form-container">
        
        <h5 className='form-message'>Please fill in your details</h5>
          <div className="form-fields">
          
            <input  type="text" name='fname'  placeholder='first name' required ></input>
          
          
            <input  type="text" name='lname' placeholder='last name' required ></input>
          
          
            <input  type="text" name='email' placeholder='your email' required ></input>
          
        
          <textarea type="text" name='message' placeholder='write your message here' required></textarea>
           </div>
          <button className='form-button' type='submit'>send</button>
          
        </form>
          <p className='contact-p'>Or you Can Email Us at chopresturant@gmail.com</p>
    </section>
    </>
  )
}

export {Contact}