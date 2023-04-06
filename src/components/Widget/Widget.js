import React from 'react';
import "./Widget.css";

const Widget = () => {
  return (
    <div>
      <iframe 
      src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Ftechieey%2Fposts%2Fpfbid02Q7SFvowLbHuB1kbAr6ps8ExYNYwTyY6o2Trik4EpGsqW2JAZjXxdLd45Tye47rsEl&show_text=true&width=500" 
      width="500" 
      height="650" 
      style={{
        border:"none",
        overflow:"hidden"
      }}
      allowFullscreen={true} 
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">

      </iframe>
    </div>
  )
}

export default Widget
