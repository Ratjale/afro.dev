let arr0 = [ 'CE','C','BCK']
let arr1 = [9,8,7,'/']
 let arr2 = [6,5,4,'*']
 let arr3 = [3,2,1,'-']
 let arr4 = [0,',','=','+']
  

  
 const container = document.getElementById('container')
 const input = document.createElement('input')
 input.id ='input-el'
 
 const divZero = document.createElement('div')
 console.log(divZero)
 const divOne = document.createElement('div')
 const divTwo = document.createElement('div')
 const divTree = document.createElement('div')
 const divFour = document.createElement('div')
 container.appendChild(input)
 container.appendChild(divZero)
  container.appendChild(divOne)
  container.appendChild(divTwo)
  container.appendChild(divTree)
  container.appendChild(divFour)
 
  
 for (let x = 0; x < arr0.length; x++){      
        const button = document.createElement('button')    
        button.style='font-size:small' 
        button.id = 'sign_'+ x      
        console.log(button.id)
            button.textContent = arr0[x]
              button.addEventListener('click',() =>{ 
                if (x !== 2){             
               input.value += arr0[x]          
                }
              })
              divZero.appendChild(button)
 }

   for (let x= 0; x < arr1.length; x++){
     const button = document.createElement('button')
     button.textContent =arr1[x]
     button.addEventListener('click',()=>{
      console.log(arr1[x])
      input.value += arr1[x]
     
           
          

     })
     divOne.appendChild(button)
   }
   for (let x= 0; x < arr2.length; x++){
     const button = document.createElement('button')
     button.textContent =arr2[x]
     button.addEventListener('click',()=>{
          input.value += arr2[x]

     })
     divTwo.appendChild(button)
   }
   for (let x = 0; x < arr3.length; x++ ){
     const button = document.createElement('button')
     button.textContent = arr3[x]
     button.addEventListener('click', () =>{
          input.value += arr3[x]
          
     })
     divTree.appendChild(button)  
   }
       // lower row  set of buttons
     for(let x = 0; x < arr4.length; x++){
         const button = document.createElement('button')
         button.id = 'dynamicButton_'+ x       
         console.log(button.id)       
             button.textContent = arr4[x]
             button.addEventListener('click', ()=>{
              if(x !==2){
               input.value += arr4[x]  
              }                         
             })
             divFour.appendChild(button)
     }
 
  const equalEl = document.querySelector('#dynamicButton_2')
   equalEl.addEventListener('click', () =>{
    
   })
    const clearAnswer = document.querySelector('#sign_0')
      clearAnswer.addEventListener('click', () =>{
        input.value = ''
      })
    const backButton = document.querySelector('#sign_1')
    backButton.addEventListener('click', () =>{
         input.value = ''
    })
     const deleteNumber = document.querySelector('#sign_2')
    
     deleteNumber.addEventListener('click', () =>{
       
   
      let str =  input.value
      console.log(str)
      input.value =str.slice(0,-1)
     console.log(input.value)
     })
    const calculateNumber = document.querySelector('#dynamicButton_2')
  calculateNumber.addEventListener('click', () =>{
   let strNumber = input.value
    input.value = eval(input.value)
    console.log(input.value)
    
  })
 
   
 
   