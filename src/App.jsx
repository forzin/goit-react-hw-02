
import './App.css'
import Description from './components/Description/Description.jsx'
import Options from './components/Options/Options.jsx'
import Feedback from './components/Feedback/Feedback.jsx'
import Notification from './components/Notification.jsx'
import { useState } from 'react'
import { useEffect } from 'react'

function App() {

   

  const [reviews, setReviews] = useState(() => {
    
    const savedReviews = window.localStorage.getItem('saveUserReviews');

    if (savedReviews !== null) {
      return JSON.parse(savedReviews);
    }
    
    return {
      good: 0,
      neutral: 0,
      bad: 0
    };
  });

  const updateFeedback = feedbackType => {
    setReviews({ ...reviews, [feedbackType]: reviews[feedbackType] + 1});
  }

  useEffect(() => {
    window.localStorage.setItem('saveUserReviews', JSON.stringify(reviews));
  }, [reviews])

  const resetFeedback = () => {
    setReviews({
      good: 0,
      neutral: 0,
      bad: 0
    })
  }

  const totalFeedback = reviews.good + reviews.neutral + reviews.bad;
  
  return (
    <>
      <div>
        <Description />
      </div>
      <div>
        <Options 
          updateFeedback={updateFeedback}
          totalFeedback={totalFeedback}
          resetFeedback={resetFeedback}
        />
      </div>
      <div>
        {totalFeedback > 0 ? (
          <Feedback 
            reviews={reviews} 
            totalFeedback={totalFeedback}
          />
        ) : (
          <Notification />
        )}
      </div>
    </>
  )
}

export default App
