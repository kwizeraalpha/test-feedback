import {createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext=createContext()

export const FeedbackProvider= ({children}) =>{

    const [feedback, setFeedback] =useState([
        {
            id:1,
            text:'This is feedback 1',
            rating: 10
        },
        {
            id:2,
            text:'This is feedback 2',
            rating: 9
        },
        {
            id:3,
            text:'This is feedback 3',
            rating: 8
        },
        {
            id:4,
            text:'This is feedback 4',
            rating: 7
        },
    ])

    const [feedbackEdit, setFeedbackEdit] =useState({
        item:{},
        edit:false,
    })
    

    // Add Feedback
    const addFeedback=(NewFeedback) =>{
        NewFeedback.id=uuidv4()
       setFeedback([NewFeedback,...feedback])
      }


      //Delete Feedback
    const deleteFeedback=(id) => {
        if (window.confirm("Are you sure want to delete"))
        setFeedback(feedback.filter((item) => item.id !== id))
      }
   

      //  Update feedback item
      const updateFeedback =(id, updItem) =>{
        setFeedback(feedback.map((item) => item.id ===id ? {...item, ...updItem}: item))
      }

      // Set Item to be Updated
      const editFeedback= (item) =>{
        setFeedbackEdit({
            item,
            edit:true
        })
      }

    return  (

    <FeedbackContext.Provider
    value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
    )
}

export default FeedbackContext