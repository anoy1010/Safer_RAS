// Process.js
"use client"
import React, { useState } from 'react';
import Step1 from '../Step1/page';
import Step2 from '../Step2/page';
import Step3 from '../Step3/page';
import EndStep from '../EndStep/page';



function Process() {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const previousStep = () => {
    setCurrentStep(currentStep - 1);
  };
  const validate = () => {
    // Ajoutez ici la logique de validation du formulaire
    alert('Formulaire validé !');
  };

  function ButtonPrevious (){
    return (
        <button onclick={previousStep} className='font-bold bg-[#4556F5] text-white hover:bg-[#8A95FF]  transition ease-in-out duration-200 px-[28px] flex items-center justify-center'>{text}</button>

    )
    }
  const steps = [
    { label: 'Register', active: currentStep === 1 },
    { label: 'Choose plan', active: currentStep === 2 },
    { label: 'Purchase', active: currentStep === 3 },
    { label: 'Receive Product', active: currentStep === 4 },
  ];
  

  return (
    <div className='flex justify-around items-center flex-col py-8'>
      <h1>Processus à plusieurs étapes</h1>
      <ul className="steps">
        {steps.map((step, index) => (
          <li key={index} className={`step${step.active ? ' step-primary' : ''}`}>
            {step.label}
          </li>
        ))}
      </ul>

      {currentStep === 1 && <Step1 nextStep={nextStep} />}
      {currentStep === 2 && <Step2 nextStep={nextStep} previousStep={previousStep} />}
      {currentStep === 3 && <Step3 nextStep={nextStep} previousStep={previousStep} />}
      {currentStep === 4 && <EndStep previousStep={previousStep} />}

      <div className='flex gap-4'>
        {currentStep > 1 && (
          <button onClick={previousStep} className='font-bold bg-[#4556F5] text-white hover:bg-[#8A95FF]  transition ease-in-out duration-200 px-[48px] py-[20px] flex items-center justify-center'>Précédent</button> 
          
          
        )}
        {currentStep < 4 && (
          <button onClick={nextStep} className='font-bold bg-[#4556F5] text-white hover:bg-[#8A95FF]  transition ease-in-out duration-200 px-[48px] py-[20px]  flex items-center justify-center'>Suivant</button>
        )}

          {/* Bouton de validation */}
      {currentStep === 4 && (
        <button onClick={validate} className='font-bold bg-[#4556F5] text-white hover:bg-[#8A95FF]  transition ease-in-out duration-200 px-[48px] py-[20px]  flex items-center justify-center'>Valider</button>
      )}
      </div>
    </div>

    
  );
}

export default Process;
