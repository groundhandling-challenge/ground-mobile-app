import { Injectable } from '@angular/core';

@Injectable()
export class ExercisesService {
  data: any;

  constructor() {
    this.data = {
      levels: [
        { id: 'A', color: '#abc6a3' },
        { id: 'B', color: '#aacf6b' },
        { id: 'C', color: '#cdcf6a' },
        { id: 'D', color: '#d0a36a' },
        { id: 'E', color: '#d06e6b' }
      ],
      exercises: [
        {
          id: 'A01',
          level: 'A',
          check: false
        },{
          id: 'A02',
          level: 'A',
          check: false
        },{
          id: 'A03',
          level: 'A',
          check: false
        },{
          id: 'A04',
          level: 'A',
          check: false
        },{
          id: 'B01',
          level: 'B',
          check: false
        },{
          id: 'B02',
          level: 'B',
          check: false
        },{
          id: 'B03',
          level: 'B',
          check: false
        },{
          id: 'B04',
          level: 'B',
          check: false
        },{
          id: 'C01',
          level: 'C',
          check: false
        },{
          id: 'C02',
          level: 'C',
          check: false
        },{
          id: 'C03',
          level: 'C',
          check: false
        },{
          id: 'C04',
          level: 'C',
          name: 'Walk Back',
          desc: 'Walk downwind keeping the wing above your head. What keeps your wing flying is airspeed, so keep an eye on it. Different wind conditions have a big effect on difficulty.',
          check: false
        },{
          id: 'C05',
          level: 'C',
          name: 'Lie Down',
          desc: 'Like a brick. Keep the wing above you. You\'ll need smooth air and precise brake control. Can you get back up without dropping the wing?',
          check: false
        },{
          id: 'C06',
          level: 'C',
          name: '30% Assy',
          desc: 'Pull down one of the As to collapse 30% of the wing. Don\'t overreact. Use just enough opposite brake to keep the wing flying. Pulling on the brake to pump out the deflation only works if you have enough pressure.',
          check: false
        },{
          id: 'C07',
          level: 'C',
          name: 'Side Kill It',
          desc: 'Put your wing down at the edge of the wind window. Might be hard to do in some wind conditions. If successful makes concertina packing much easier.',
          check: false
        },{
          id: 'C08',
          level: 'C',
          name: 'Kill It with As',
          desc: 'Pulling on the As will collapse the leading edge. This can be useful to put the wing down quickly in strong wind. You can\'t hold them forever. Bear in mind how you launch a wing.',
          check: false
        },{
          id: 'C09',
          level: 'C',
          name: 'Kill It with Bs',
          desc: 'Pull down on the Bs until the wing folds like a taco. It\'s not pretty but very useful to kill the wing in almost any situation. You can hold the taco forever.',
          check: false
        },{
          id: 'C10',
          level: 'C',
          name: 'Down Gently',
          desc: 'Put your wing down gently using all available lines. If you don\'t slam your wing on the ground it will last longer. Different wind strengths require different techniques.',
          check: false
        },{
          id: 'D01',
          level: 'D',
          name: 'Cravat Launch',
          desc: 'Push one wingtip through your lines, on purpose. Bring the wing up and keep it over your head. Bonus points for clearing the cravat without dropping the wing.',
          check: false
        },{
          id: 'D02',
          level: 'D',
          name: '1 Side Only',
          desc: 'Pull your wing up using only one side. Use only the A and brake on one side of the wing. You can move your feet though.',
          check: false
        },{
          id: 'D03',
          level: 'D',
          name: 'Don\'t Touch It',
          desc: 'Your wing is upside down. Turn up right side up. You can\'t touch the canopy, use your lines only. Moving your feet at the right time might help.',
          check: false
        },{
          id: 'D04',
          level: 'D',
          name: 'Stall Point',
          desc: 'Slightly above the wing will come up. Slightly below the wing will die. Keep it in this stall point above the ground. Super fine quick adjustments are required.',
          check: false
        },{
          id: 'D05',
          level: 'D',
          name: 'Controlled Drag',
          desc: 'Find the position where you wing pulls you the most and let it drag you. On your feet, bum or even belly, the key is knowing how to get out. Can be a very useful mean of transportation.',
          check: false
        },{
          id: 'D06',
          level: 'D',
          name: 'Flapping',
          desc: 'Pump your brakes and flap around but don\'t let it drop behind you. How fast and how deep can you pump? Is there a link between frequency and how much you pull?',
          check: false
        },{
          id: 'D07',
          level: 'D',
          name: '50% Assy',
          desc: 'Pull down one of the As to collapse 50% of the wing. Be patient in getting the collapse out. Foot work might come in handy.',
          check: false
        },{
          id: 'D08',
          level: 'D',
          name: 'Climb Dune',
          desc: 'Or any other hill. Use the wing to pull you up. If you get airborne you lose, but it will still be fun. Zig-Zagging up might be easier than straight up.',
          check: false
        },{
          id: 'E01',
          level: 'E',
          name: 'Throw Launch',
          desc: 'Wing bunched in one hand, As in the other. Throw the wing downwind, runs back and pull on the As. If the wing doesn\'t touch the ground you get full marks.',
          check: false
        },{
          id: 'E02',
          level: 'E',
          name: 'Fly Backwards',
          desc: 'Keep the wing off the ground, backwards. Everything is in reverse. Brakes make the wing go up, As make it go down. There is no sharknose on the trailing edge, so you can only go so far up.',
          check: false
        },{
          id: 'E03',
          level: 'E',
          name: '80% Assy',
          desc: 'Pull on all the As minus one of the tips. Recover from the collapse without letting the wing drop. Might be harder than a Full frontal as it\'s not symetric.',
          check: false
        },{
          id: 'E04',
          level: 'E',
          name: '360',
          desc: 'Facing up, facing down, facing up. All in one fluid movement. Wing size, wind speed and other things might make it easier. Pat yourself on the back if you got this one nailed.',
          check: false
        },{
          id: 'E05',
          level: 'E',
          name: 'Spiderman',
          desc: 'If you made it this far, the Groundhandling Challenge has done it\'s job :)',
          check: false
        }
      ]
    };
  }

  getData() {
    return this.data;
  }

}
