export interface Todo {
  id?: number;
  text?: string;
  done: boolean;
  created: Date;
  updated: Date;
}

export const todos = [
  {
    id: 1,
    text: 'Aizada',
    done: true,
    created: new Date(),
    updated: new Date(),
  },
  {
    id: 2,
    text: 'Akkanat',
    done: false,
    created: new Date(),
    updated: new Date(),
  },
  {
    id: 3,
    text: 'Jarkynai or Jibek',
    done: false,
    created: new Date(),
    updated: new Date(),
  },
];
