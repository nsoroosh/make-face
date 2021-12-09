
  
  function facefactory(x,y) {
    
    return {
      x: x,
      y: y,
      face :drawCircle(centerPoint, 200)
    }
  }
  function eyesfactory(rightx,righty,leftx,lefty){
    const righteye = {
      x : rightx,
      y : righty
    }
    const lefteye ={
      x :leftx,
      y : lefty
    }
    return {

      righteye : drawCircle(righteye,20),
    lefteye : drawCircle(lefteye,20),
    }
  }

  function nosefactory(startx,starty,endx,endy){
    const startPoint = {
      x: startx,
      y: starty,
    };
    
    const endPoint = {
      x: endx,
      y: endy,
    };
    return {
      nose: drawLine(startPoint, endPoint),
    }
  }
  function mousefactory(startx,starty,endx,endy){
    const startmouse ={
      x : startx,
      y : starty
    }
    const endmouse ={
      x : endx,
      y : endy
    }
   
    return {
      mouse : drawLine(startmouse,endmouse)
    }
  }
  facefactory(400,200)
  nosefactory(400,120,400,250)
  mousefactory(300,300,500,300)
  eyesfactory(300,100,500,100)