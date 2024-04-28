import {TAnswer} from "./answersTypes";

interface IChoiceQuestion {
    type: 'choice' | 'text';
    id: number;
    text: string;
    options?: TAnswer[];
}

// interface ITextQuestion {
//     type: "text";
//     id: number;
//     text: string;
// }

type IQuestion = IChoiceQuestion ;

export type IQuestions = IQuestion[];