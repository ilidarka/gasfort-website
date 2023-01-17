

      let popup = document.querySelector('.popup'); 
      let openPopupButtons = document.querySelectorAll('.popup-trigger'); 
      let closePopupButton = document.querySelector('.popup__close'); 
      let nextPopupPaage = document.getElementById("pop_up")
      let confirm = document.querySelector('.confirm');
      let confirmPopup = document.querySelector('.confirm_popup');
      let confirmClose = document.querySelector('.confirm__close');
      openPopupButtons.forEach((button) => { 
          button.addEventListener('click', (e) => { 
              e.preventDefault(); 
              popup.classList.add('show');
          })
      });
      document.addEventListener('click', (e) => { 
          if(e.target === popup) { 
              popup.classList.remove('show'); 
          }
      });
      document.addEventListener('click', (e) => { 
        if(e.target == closePopupButton) { 
            popup.classList.remove('show'); 
            confirmPopup.classList.remove('show');
        } 
      });
      document.addEventListener('click', (e)=>{
        if(e.target === confirm){
          popup.classList.remove('show'); 
          confirmPopup.classList.add('show');
        }
      });
      document.addEventListener('click', (e) => { 
        if(e.target == confirmPopup) { 
            confirmPopup.classList.remove('show'); 
        }
      });
      document.addEventListener('click', (e) =>{
        if(e.target == confirmClose){
          confirmPopup.classList.remove('show');
        }
      })