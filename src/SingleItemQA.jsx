
import { useState } from "react"



 

export const SingleItemQA = () =>{

    const [isVisible, setIsVisible] = useState(false)

    const questionAndAnswer = () =>{
        setIsVisible(!isVisible)
    }

    return(
       
           <div className='singleItem-container'>
              
              <div className='singleItem-container-singleBox' onClick={questionAndAnswer}>
                Czym jest Netflix? 
              <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48" fill='white'><path d="M450-450H200v-60h250v-250h60v250h250v60H510v250h-60v-250Z"/></svg>
              </div>
              <div className={isVisible ? 'singleItem-container-answerOn' : 'singleItem-container-answerOff'}>
             <p>
             Netflix to usługa przesyłania strumieniowego, dzięki której użytkownicy mogą korzystać z szerokiej oferty nagradzanych filmów, seriali, programów, anime
               oraz produkcji dokumentalnych za pośrednictwem tysięcy urządzeń połączonych z internetem.
              Możesz oglądać do woli, gdziekolwiek jesteś — bez reklam i za jedną miesięczną opłatą. Co tydzień dodajemy nowe tytuły, więc zawsze jest coś ciekawego do obejrzenia.
             </p>
              </div>
              </div>
              
        
    )
}