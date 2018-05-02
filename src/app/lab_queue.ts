export class LabQueue {
  id: number;
  name: string;
  classroom: string;
  range: string;

  constructor(id: number, name: string, classroom: string, range: string) {
    this.id = id;
    this.name = name;
    this.classroom = classroom;
    this.range = range;
  }
}