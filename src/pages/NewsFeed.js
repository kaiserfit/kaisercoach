import { render } from "@testing-library/react";
import React from "react";
import {BsHeartFill} from "react-icons/bs"
import "./NewsFeed.css"
export default function NewsFeed(){
    var posts = [
        {
            id:1,
            author: 'Coach Shane',
            title: "Post Title 1",
            content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
            attachment: "https://www.stockvault.net/data/2020/01/18/272608/thumb16.jpg",
            date: "2022-09-02",
            likeCount: 2,
            userLiked: true
        },
        {
            id:2,
            author: 'Coach Rita',
            title: "Nature Calm",
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut ligula fringilla, molestie leo eu, luctus mi. Nullam erat nunc, gravida a elementum ut, ullamcorper sed eros. Sed vitae arcu lobortis, suscipit orci in, luctus nisi. Suspendisse lacinia varius ipsum, in posuere purus. Donec scelerisque aliquet ante vel ullamcorper. Pellentesque gravida neque ac mi interdum, eu posuere ipsum egestas. In sed urna nunc. Fusce pharetra nisl vel semper elementum. Donec tempor nec leo at volutpat. Nullam sed lacus eget ipsum cursus porttitor id in dolor. Vivamus sit amet mi sollicitudin, luctus nisi ac, porttitor mi.',
            attachment: "https://fancycrave.com/wp-content/uploads/2019/12/Free-Nature-Pictures-min.jpg",
            date: "2022-08-12",
            likeCount: 24,
            userLiked: false
        }
    ]

      
    function getFormattedDate(dateStr){
        const months = [
            "January","February", "March", "April", "May","June","July","August","September","October","November","December"
        ]
        var d= new Date(dateStr);
        return months[d.getMonth()] + " " + d.getDate()+", "+d.getFullYear()
    }

  
      
     const NewsItems = posts.map((val,index)=>
       <div className="container bg-white border border-2 rounded py-2 my-3" key={val.id}>
        <section>
            <h4 className="fw-bold lh-sm">{val.author}</h4>
            <p><small>{getFormattedDate(val.date)}</small></p>
            <p>{val.content}</p>
            <div>
                <img src={val.attachment} className="w-100 h-auto mb-2"></img>
            </div>
            <p><span className="text-danger like-icon"><BsHeartFill /></span> {(val.userLiked) ? "You and " + val.likeCount + " others" : val.likeCount}</p>
        </section>
        
        </div>
        )
    return (
        <>
        
     
        <div>{NewsItems}</div>
        </>
    )
}