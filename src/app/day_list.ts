import { Day } from './day';
import { LabQueue } from './lab_queue';

export const DAYS: Day[] = [
  {id: 1, name: "Сегодня",     term: "Понедельник 07.04.2018", queues:[
    new LabQueue(1, "ИСП", "111-4", "8:00 - 9:35"),
    new LabQueue(2, "ООП", "322-4", "9:45 - 11:20"),
    new LabQueue(3, "АИСД", "314-4", "15:20 - 16:55")
  ]},
  {id: 2, name: "Завтра",      term: "Вторник 08.04.2018", queues:[
    new LabQueue(4, "ТВиМС", "712-5", "8:00 - 9:35"),
    new LabQueue(5, "ООП", "111-4", "9:45 - 11:20"),
    new LabQueue(6, "АВС", "204a-4", "11:40 - 13:15")
  ]},
  {id: 3, name: "Послезавтра", term: " Среда 09.04.2018", queues:[
    new LabQueue(7, "ОАИП", "112-4", "8:00 - 9:35"),
    new LabQueue(8, "АВС", "505-5", "11:40 - 13:15"),
    new LabQueue(9, "ИСП", "103-3", "13:25 - 15:00"),
    new LabQueue(10, "АИСД", "314-4", "15:20 - 16:55")
  ]},
];