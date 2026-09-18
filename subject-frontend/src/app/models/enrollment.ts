export interface Enrollment {
  eId?: number;
  subject: {
    subId: number;
    subName: string;
    code: string;
    description: string;
  };
  marks: number;
}