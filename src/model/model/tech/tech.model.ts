import { QuestionAndAnswer } from "../thapelo.model";

export const Tech: QuestionAndAnswer[] = [
        {image: '../../assets/imgs/cell.jpg',
        question: 'who invented a cellphone?', 
       answers:[ 
        {answer: 'Martin Cooper'},
         {answer: 'Joel S.Engel'},
          {answer: 'BRay Tomlinson'},
           {answer: 'Tim Berners-lee'}],
            correctAnswer: 1
        },
        {image: '../../assets/imgs/dron.jpg',
        question: 'when was the drone invented?',
        answers:[ 
        {answer: '2016'}, 
         {answer: '2006'},
          {answer: '2002'},
           {answer: '1917'}],
            correctAnswer: 4
        },  
        {image: '../../assets/imgs/comp.jpg',
        question: 'what did charles Babbage invent?,',
         answers:[
        {answer: 'a serve'},
          {answer: 'the internet'},
           {answer: 'an api'},
           {answer: 'computer'}],
            correctAnswer: 4
        },  
        {image: '../../assets/imgs/andriod.jpg',
        question: ' what is the latest version of andriod?', 
        answers:[
        {answer: '9.0 Pie'}, 
        {answer: '20'},
         {answer: '7'},
          {answer: '10'}],
           correctAnswer: 1
        },  
        {image: '../../assets/imgs/imdw.jpg',
        question: 'which of the mention below is not one of the top ten inventions of the last decade',
        answers:[ 
        {answer: 'Social Networking Platforms'},
          {answer: 'Computer Vision Technologies'},
           {answer: 'Drone'},
            {answer: 'GPS'}],
             correctAnswer: 3}        
];
