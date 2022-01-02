import { useState } from 'react/cjs/react.development'
import Card from './shared/Card'

function FeedbackForm() {
  const [text, setText] = useState('')
  const handleTextChange = (e) => {
    setText(e.target.value)
  }
  return (
    <Card>
      <form>
        <h2>How would rate your service with us?</h2>
        <div className='input-group'>
          <input
            onChange={handleTextChange}
            type='text'
            placeholder='Write a review'
            value={text}
          />
          <button type='submit'>Send</button>
        </div>
      </form>
    </Card>
  )
}

export default FeedbackForm
