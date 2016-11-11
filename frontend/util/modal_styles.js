export const authModalStyle = {
  overlay : {
   position        : 'fixed',
   top             : 0,
   left            : 0,
   right           : 0,
   bottom          : 0,
   backgroundColor : 'rgba(30, 30, 30, 0.75)',
   zIndex          : 50
 },
 content : {
   position        : 'fixed',
   top             : '150px',
   width           : '300px',
   height          : '300px',
   borderRadius    : '20px',
   padding         : 0,
   margin          : '0 auto',
   zIndex          : 51
 }
};

export const playlistModalStyle = (playing) => {
  if(!playing){
    return {
      overlay : {
       position        : 'fixed',
       top             : 0,
       left            : '100px',
       right           : 0,
       bottom          : 0,
       backgroundColor : 'rgba(17, 18, 20, 0.75)',
       zIndex          : 50
     },
     content : {
       position        : 'relative',
       top             : 0,
       right           : 0,
       bottom          : 0,
       borderRadius    : '0px',
       width           : '70%',
       height          : '100%',
       padding         : 0,
       float           : 'right',
       zIndex          : 51
     }
   };
 } else {
   return {
     overlay : {
      position        : 'fixed',
      top             : 0,
      left            : '100px',
      right           : '245px',
      bottom          : 0,
      backgroundColor : 'rgba(17, 18, 20, 0.75)',
      zIndex          : 50
    },
    content : {
      position        : 'relative',
      top             : 0,
      right           : 0,
      bottom          : 0,
      borderRadius    : '0px',
      width           : '70%',
      height          : '100%',
      padding         : 0,
      float           : 'right',
      zIndex          : 51
    }
  };
 }
};

export const searchModalStyle = {
    overlay : {
     position        : 'fixed',
     top             : 0,
     left            : '100px',
     right           : 0,
     bottom          : 0,
     backgroundColor : 'rgba(17, 18, 20, 0.75)',
     zIndex          : 100
   },
   content : {
     position        : 'relative',
     top             : 0,
     right           : 0,
     bottom          : 0,
     left            : '-5px',
     borderRadius    : '0px',
     width           : '250px',
     height          : '100%',
     backgroundColor : 'rgba(34, 35, 38, 0.75)',
     zIndex          : 101
   }
};
