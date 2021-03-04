import { startTest } from '../utils';

const fnName = 'maxEnvelopes';
const units: Array<[any[], any]> = [
  [
    [[[5,4],[6,4],[6,7],[2,3]]], 
    3,
  ],
  [
    [[[1,1],[1,1],[1,1]]], 
    1,
  ],
  [
    [[[1,3],[3,5],[6,7],[6,8],[8,4],[9,5]]], 
    3,
  ],
  [
    [[[46,89],[50,53],[52,68],[72,45],[77,81]]], 
    3,
  ],
  [
    [[[4,5],[4,6],[6,7],[2,3],[1,1]]], 
    4,
  ],
  [
    [[[1,15],[7,18],[7,6],[7,100],[2,200],[17,30],[17,45],[3,5],[7,8],[3,6],[3,10],[7,20],[17,3],[17,45]]], 
    3,
  ],
  // [
  //   [[[20,48],[12,35],[32,16],[30,17],[35,23],[37,33],[14,10],[23,31],[8,7],[17,6],[6,19],[3,6],[22,34],[10,26],[16,46],[20,11],[20,28],[39,33],[44,47],[29,18],[8,25],[17,24],[43,27],[45,12],[40,29],[37,10],[49,20],[2,4],[33,1],[46,27],[39,24],[34,6],[15,15],[21,40],[7,30],[19,9],[11,39],[29,31],[28,37],[4,37],[8,36],[38,1],[48,46],[4,1],[43,29],[41,32],[19,23],[37,35],[31,9],[8,1],[34,30],[2,20],[49,21],[16,26],[38,12],[27,20],[43,7],[25,8],[17,36],[42,40],[45,14],[16,10],[19,47],[5,37],[21,7],[30,3],[42,40],[18,40],[35,41],[12,33],[4,15],[40,22],[4,29],[27,27],[41,40],[12,33],[37,41],[21,11],[5,24],[4,32]]], 
  //   4,
  // ],
];

export default startTest(__dirname, fnName, units);
