function appendToDisplay(value)
  {
     const display=document.getElementById('display');
    display.value+=value;
  }
  function clearDisplay()
  {
    const display=document.getElementById('display');
    display.value='';
  }
  function deletelast()
  {
    const display=document.getElementById('display');
    display.value=display.value.slice(0,-1);
  }
  function calculateResult()
  {
    try
    {
    const display=document.getElementById('display');
    display.value=eval(display.value);
    }
      catch(e)
    {
      display.value='Error';
    }
  }
  
  