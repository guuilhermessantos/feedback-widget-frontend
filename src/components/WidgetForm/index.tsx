import { CloseButton } from "../CloseButton";
import bugImageUrl from '../../assets/Bug.svg'
import ideaImageUrl from '../../assets/Idea.svg'
import thoughtImageUrl from '../../assets/Thought.svg'
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSucessStep";


export const feedBackTypes = {
   BUG: {
      title: 'Problema',
      image: {
         source: bugImageUrl,
         alt: 'Imagem de um Inseto',
      },
      placeholder:
      "Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo...",
   },
   IDEA: {
      title: 'Ideia',
      image: {
         source: ideaImageUrl,
         alt: 'Imagem de uma lâmpada',
      },
      placeholder:
      "Teve uma ideia de melhoria ou de nova funcionalidade? Conta pra gente!",
   },
   OTHER: {
      title: 'Outro',
      image: {
         source: thoughtImageUrl,
         alt: 'Imagem de um balão de pensamento',
      },
      placeholder: "Queremos te ouvir. O que você gostaria de nos dizer?",
   },
}
export type FeedbackType = keyof typeof feedBackTypes

export function WidgetForm() {
   const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
   const [feedbackSent, setFeedbackSent] = useState(false);
   
   function handleRestartFeedback() {
      setFeedbackSent(false)
      setFeedbackType(null)
   }
   
   return (
      <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      
      { feedbackSent ? (
         <FeedbackSuccessStep
         onFeedbackRestartRequested={handleRestartFeedback}
         />
         ) : (
            <>
            {!feedbackType ? (
               <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>
               ) : (
                  <FeedbackContentStep
                  feedbackType={feedbackType}
                  onFeedbackRestartRequested={handleRestartFeedback}
                  onFeedbackSent={() => setFeedbackSent(true)}
                  />
               )}
            </>
         )}
         <footer className="text-xs text-neutral-400">
            Feito com ♥ pela <a className="underline underline-offset-2" href="https://rocketseat.com.br">Rocketseat</a>
         </footer>
      </div>
   );
}