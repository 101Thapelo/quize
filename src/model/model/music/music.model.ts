import {
  QuestionAndAnswer
} from "../thapelo.model";

export const Music: QuestionAndAnswer[] = [{
    image: '../../assets/imgs/mj.jpg',
    question: 'whats the name of the artist below?',
    answers: [
        {answer: 'mickeal jackson'},
        {answer: 'Frank Sinatra'},
        {answer: 'Little Richard'},
        {answer: 'Dr Sebi'},
    ],
    correctAnswer: 1
  },
  {
    image: '../../assets/imgs/coff.jpg',
    question: 'what kind of music does black-coffe produce ?',
    answers:[
    {answer: 'jazz'},
    {answer: 'hip-hop'},
    {answer: 'house'},
    {answer: 'electro music'}
]
    ,
    correctAnswer: 3
  },
  {
    image: '../../assets/imgs/hill.jpg',
    question: 'what is the name of this gospel group',
    answers:[
    {answer: 'Joyers Celebration'},
    {answer: 'Soul Stirrers'},
    {answer: 'The Blind Boys of Albany'},
    {answer: 'Hillsong'}
    ],
    correctAnswer: 4
  },
  {
    image: '../../assets/imgs/trav.jpg',
    question: 'what is travis scott popular songs',
    answers:[
    {answer: 'Sicko mode'},
    {answer: 'Power is Power'},
    {answer: 'cant say'},
    {answer: 'Drug you should try'}
]   ,
    correctAnswer: 1
  },
  {
    image: '../../assets/imgs/chal.jpg',
    question: 'how old is charles webster',
    answers:[
    {answer: '2'},
    {answer: '35'},
    {answer: '54'},
    {answer: '43'}],
    correctAnswer: 3
  }
];
