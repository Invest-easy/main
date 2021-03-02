const exampleDataFormat =
  {
    oneDay: [
      { x: 0, y: 12, date: '05/10/11 - 05h00' },
      { x: 1, y: 7, date: '06/10/11 - 06h00' },
      { x: 2, y: 6, date: '07/10/11 - 07h00' },
      { x: 3, y: 8, date: '08/10/11 - 08h00' },
    ],
    oneWeek: [
      { x: 0, y: 5, date: '05/10/11' },
      { x: 1, y: 7, date: '06/10/11' },
    ],
    oneMonth: [
      { x: 0, y: 12, date: '05/10/11' },
      { x: 1, y: 7, date: '10/10/11' },
    ],
    oneYear: [
      { x: 0, y: 7, date: '05/10/11' },
      { x: 1, y: 8, date: '10/10/11' },   
    ]
}

let data =
{
  oneDay: [
  ],
  oneWeek: [
  ],
  oneMonth: [
  ],
  oneYear: [   
  ]
}

for(let i=0; i<365*3; i++){
    let stockValue = Math.random()*(1*Math.log(i+1))
}


