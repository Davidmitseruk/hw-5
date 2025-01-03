import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
const chartData = {
  labels: [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
    '25',
    '26',
    '27',
    '28',
    '29',
    '30',
  ],
  datasets: [
    {
      label: 'Продажі за останній місяць',
      data: [
        150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550,
        600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200,
        1250, 1300, 1350,
      ],
      backgroundColor: '#2196f3',
      borderColor: '#2196f3',
      borderWidth: 1,
    },
  ],
};

const confic = {
  type: 'line',
  data: chartData,
  options: {},
};
document.addEventListener('DOMContentLoaded', () => {
  const box = document.getElementById('sales-chart').getContext('2d');
  new Chart(box, confic);
});

// 2
import { success, error, defaultModules } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/BrightTheme.css';
defaultModules.set(PNotifyMobile, {});

const allKeys = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
];

function getRandomKeys(keysArray, count){
    const a = keysArray.slice().sort(() => Math.random() - 0.5);
    return a.slice(0, count);
}
let currentKeyIndex = 0;
let randomKeys = [];
const btn = document.getElementById('btn');
const key = document.querySelector('#pressKey');

btn.addEventListener('click', () => {
    if(btn.textContent === 'start game'){
        btn.textContent = 'new game';

    } 
    randomKeys = updateKeys();
    currentKeyIndex = 0;
    key.textContent = `${randomKeys[currentKeyIndex]}`;
    document.addEventListener('keydown', handleKeyPress);

}) 

function updateKeys(){
    return getRandomKeys(allKeys, 10);
}

function handleKeyPress(e) { 
  e.preventDefault(); 
  if (currentKeyIndex < randomKeys.length) { 
    const expecte = randomKeys[currentKeyIndex]; 
 
    if ( 
      e.code === `Key${expecte}` ||  e.code === `Digit${expecte}` 
    ) { 
      const success = success({ 
        text: 'Your press the right key!!', 
        dalay: 200, 
      }); 
      currentKeyIndex++; 
 
      if (currentKeyIndex < randomKeys.length) { 
        key.textContent = `${randomKeys[currentKeyIndex]}`; 
      } else { 
        const success2 = success({ 
          text: 'You win! Please, press to the button and start new game', 
          dalay: 200, 
        }); 
        key.textContent = 'Press "New game" to restart.'; 
        document.removeEventListener('keydown', handleKeyPress); 
      } 
    } else { 
      const error = error({ 
        text: 'Your press the wrong key, please, try again', 
        dalay: 200, 
      }); 
    } 
  } 
}