import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addPost } from '../../actions/post'

const PostForm = ({ addPost }) => {
  const [formData, setFormData] = useState({
    text: ''
  })

  const {
      text
  } = formData

  const onChange = e => setFormData({
    ...formData, [e.target.name]: e.target.value
  })

  return (
    <div className='post-form'>
      <div className='bg-primary p'>
        <h3>Share your post, thoughts, question or idea..</h3>
      </div>
      <form
        className='form my-1'
        onSubmit={e => {
          e.preventDefault()
          addPost({text})
          setFormData('')
        }}
        >
        <textarea
          name='text'
          cols='30'
          rows='5'
          placeholder='Create a post'
          value={text}
          onChange={e => onChange(e)}
       />
        {/* <p value={text.length}>B</p> */}
        <input type='submit' className='btn btn-dark my-1' value='Submit' />
      </form>
    </div>
  )
}

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired
}

export default connect(null, { addPost })(PostForm)
