export class QuestionAndAnswer {
    public image    : string;
    public question : string;
    public answers  : [
        {answer: any},
        {answer: any},
        {answer: any},
        {answer: any}
    ];
    public correctAnswer: number;
}