const { 
    getValidVideos,
    normalizeTime,
	createSchedule
} = require("../../src/services/viewerScheduleService");


describe("viewer Schedule Service", () => {
  const weeklyTimeAvailable = [5, 140, 80, 70, 10, 30, 25];

  const searchResult = [{
      title: 'Node.js: Iniciando da teoria à prática | Masterclass #11',
      description: null,
      duration: '1:33:18',
      url: 'https://www.youtube.com/watch?v=DiXbJL3iWVs'
    },
    {
      title: 'O que é Node JS? #HipstersPontoTube',
      description: null,
      duration: '9:15',
      url: 'https://www.youtube.com/watch?v=GKR6uSvEj8w'
    },
    {
      title: 'Node.js Tutorial for Beginners: Learn Node in 1 Hour',
      description: null,
      duration: '1:18:16',
      url: 'https://www.youtube.com/watch?v=TlB_eWDSMt4'
    },
    {
      title: 'Обзор Node.js платформы в 2021 | Егор Малькевич',
      description: null,
      duration: '58:55',
      url: 'https://www.youtube.com/watch?v=b8k0FLrW4xw'
    },
    {
      title: 'Node.js // Dicionário do Programador',
      description: null,
      duration: '10:33',
      url: 'https://www.youtube.com/watch?v=vYekSMBCCiM'
    },
    {
      title: 'CRIANDO SUA PRIMEIRA APLICAÇÃO/SISTEMA UTILIZANDO NODE JS (TUTORIAL)',   
      description: null,
      duration: '16:57',
      url: 'https://www.youtube.com/watch?v=CjQMi8mv2Do'
    },
    {
      title: 'O que é Node.js? (Entenda de uma vez por todas)',
      description: null,
      duration: '8:28',
      url: 'https://www.youtube.com/watch?v=nfrVPzDJZQc'
    }
  ]

  it("create Schedule - 7 search Result ", () => {
    const schedule = createSchedule(searchResult, weeklyTimeAvailable);

    expect(schedule.get(1).day).toBe(1);
    expect(schedule.get(1).videos).toStrictEqual([]);
    expect(schedule.get(1).timeLeft).toBe(5);
    expect(schedule.get(1).dailyTimeAvailable).toBe(5);

    expect(schedule.get(2).day).toBe(2);
    expect(schedule.get(2).videos[0]).toStrictEqual(searchResult[0]);
    expect(schedule.get(2).videos[1]).toStrictEqual(searchResult[1]);
    expect(schedule.get(2).timeLeft).toBe(37.45);
    expect(schedule.get(2).dailyTimeAvailable).toBe(140);

    expect(schedule.get(3).day).toBe(3);
    expect(schedule.get(3).videos[0]).toStrictEqual(searchResult[2]);
    expect(schedule.get(3).timeLeft).toBe(1.7333333333333343);
    expect(schedule.get(3).dailyTimeAvailable).toBe(80);    
  });

	it.todo("getValidVideos - no valid videos");
	it.todo("normalizeTime - no valid videos");
})
