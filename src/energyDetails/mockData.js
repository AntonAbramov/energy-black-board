const mockData = [
  {
    dateTime: '01.05.2019 00:15',
    generated: '944.35260096',
    consumed: '663.17567685',
  },
  {
    dateTime: '01.05.2019 00:30',
    generated: '683.57599856',
    consumed: '455.80412055',
  },
  {
    dateTime: '01.05.2019 00:45',
    generated: '265.98858687',
    consumed: '795.14264045',
  },
  {
    dateTime: '01.05.2019 01:00',
    generated: '526.88132490',
    consumed: '348.95506332',
  },
  {
    dateTime: '01.05.2019 01:15',
    generated: '373.07167611',
    consumed: '707.26117614',
  },
  {
    dateTime: '01.05.2019 01:30',
    generated: '171.53412398',
    consumed: '872.85503026',
  },
  {
    dateTime: '01.05.2019 01:45',
    generated: '249.77359020',
    consumed: '596.10188675',
  },
  {
    dateTime: '01.05.2019 02:00',
    generated: '991.67450530',
    consumed: '266.44305136',
  },
  {
    dateTime: '01.05.2019 02:15',
    generated: '266.96162935',
    consumed: '269.02879287',
  },
  {
    dateTime: '01.05.2019 02:30',
    generated: '904.73374772',
    consumed: '99.78437166',
  },
  {
    dateTime: '01.05.2019 02:45',
    generated: '133.17306736',
    consumed: '389.07988798',
  },
  {
    dateTime: '01.05.2019 03:00',
    generated: '885.98531381',
    consumed: '926.83963336',
  },
  {
    dateTime: '01.05.2019 03:15',
    generated: '550.76486143',
    consumed: '149.03196469',
  },
  {
    dateTime: '01.05.2019 03:30',
    generated: '771.89618259',
    consumed: '438.47558209',
  },
  {
    dateTime: '01.05.2019 03:45',
    generated: '463.94170367',
    consumed: '94.39801711',
  },
  {
    dateTime: '01.05.2019 04:00',
    generated: '491.84723622',
    consumed: '964.55982927',
  },
  {
    dateTime: '01.05.2019 04:15',
    generated: '641.66428120',
    consumed: '802.08719939',
  },
  {
    dateTime: '01.05.2019 04:30',
    generated: '551.64930577',
    consumed: '758.75860385',
  },
  {
    dateTime: '01.05.2019 04:45',
    generated: '493.07866137',
    consumed: '750.45680039',
  },
  {
    dateTime: '01.05.2019 05:00',
    generated: '850.79902917',
    consumed: '782.52686211',
  },
  {
    dateTime: '01.05.2019 05:15',
    generated: '442.21037307',
    consumed: '337.82691011',
  },
  {
    dateTime: '01.05.2019 05:30',
    generated: '95.15570402',
    consumed: '763.20708912',
  },
  {
    dateTime: '01.05.2019 05:45',
    generated: '372.51100932',
    consumed: '51.89175044',
  },
  {
    dateTime: '01.05.2019 06:00',
    generated: '970.36986167',
    consumed: '537.58629500',
  },
  {
    dateTime: '01.05.2019 06:15',
    generated: '763.25517058',
    consumed: '841.92052247',
  },
  {
    dateTime: '01.05.2019 06:30',
    generated: '232.51368553',
    consumed: '921.71395793',
  },
  {
    dateTime: '01.05.2019 06:45',
    generated: '834.52518432',
    consumed: '153.89692821',
  },
  {
    dateTime: '01.05.2019 07:00',
    generated: '472.47364149',
    consumed: '772.70324536',
  },
  {
    dateTime: '01.05.2019 07:15',
    generated: '150.66268702',
    consumed: '796.01466966',
  },
  {
    dateTime: '01.05.2019 07:30',
    generated: '643.24451888',
    consumed: '685.58167019',
  },
  {
    dateTime: '01.05.2019 07:45',
    generated: '251.68359901',
    consumed: '222.90921361',
  },
  {
    dateTime: '01.05.2019 08:00',
    generated: '992.40934994',
    consumed: '120.85156549',
  },
  {
    dateTime: '01.05.2019 08:15',
    generated: '435.49074879',
    consumed: '349.06681098',
  },
  {
    dateTime: '01.05.2019 08:30',
    generated: '848.92729852',
    consumed: '823.24835436',
  },
  {
    dateTime: '01.05.2019 08:45',
    generated: '891.84516679',
    consumed: '125.29040493',
  },
  {
    dateTime: '01.05.2019 09:00',
    generated: '760.94174599',
    consumed: '82.80150239',
  },
  {
    dateTime: '01.05.2019 09:15',
    generated: '211.93256833',
    consumed: '588.06207170',
  },
  {
    dateTime: '01.05.2019 09:30',
    generated: '326.54921906',
    consumed: '250.20300809',
  },
  {
    dateTime: '01.05.2019 09:45',
    generated: '70.25519473',
    consumed: '12.99260112',
  },
  {
    dateTime: '01.05.2019 10:00',
    generated: '636.81069404',
    consumed: '437.42644732',
  },
  {
    dateTime: '01.05.2019 10:15',
    generated: '468.10999883',
    consumed: '596.37489099',
  },
  {
    dateTime: '01.05.2019 10:30',
    generated: '630.78550797',
    consumed: '216.42599034',
  },
  {
    dateTime: '01.05.2019 10:45',
    generated: '375.60588883',
    consumed: '389.17566153',
  },
  {
    dateTime: '01.05.2019 11:00',
    generated: '358.96151497',
    consumed: '883.44458626',
  },
  {
    dateTime: '01.05.2019 11:15',
    generated: '428.37178546',
    consumed: '657.85478765',
  },
  {
    dateTime: '01.05.2019 11:30',
    generated: '890.94762835',
    consumed: '148.97105081',
  },
  {
    dateTime: '01.05.2019 11:45',
    generated: '282.58490160',
    consumed: '165.48766056',
  },
  {
    dateTime: '01.05.2019 12:00',
    generated: '342.27928442',
    consumed: '382.27898006',
  },
  {
    dateTime: '01.05.2019 12:15',
    generated: '78.63815203',
    consumed: '456.60368228',
  },
  {
    dateTime: '01.05.2019 12:30',
    generated: '213.62115147',
    consumed: '334.19178147',
  },
  {
    dateTime: '01.05.2019 12:45',
    generated: '363.53292819',
    consumed: '341.22531697',
  },
  {
    dateTime: '01.05.2019 13:00',
    generated: '573.52672222',
    consumed: '458.94849920',
  },
  {
    dateTime: '01.05.2019 13:15',
    generated: '411.79498870',
    consumed: '865.50376545',
  },
  {
    dateTime: '01.05.2019 13:30',
    generated: '790.35252505',
    consumed: '17.33899805',
  },
  {
    dateTime: '01.05.2019 13:45',
    generated: '123.70813552',
    consumed: '553.02935698',
  },
  {
    dateTime: '01.05.2019 14:00',
    generated: '764.06919780',
    consumed: '114.61037909',
  },
  {
    dateTime: '01.05.2019 14:15',
    generated: '250.15339987',
    consumed: '853.47650214',
  },
  {
    dateTime: '01.05.2019 14:30',
    generated: '42.56992254',
    consumed: '949.45456956',
  },
  {
    dateTime: '01.05.2019 14:45',
    generated: '950.65818486',
    consumed: '411.64698671',
  },
  {
    dateTime: '01.05.2019 15:00',
    generated: '309.68370958',
    consumed: '725.47570782',
  },
  {
    dateTime: '01.05.2019 15:15',
    generated: '649.62073389',
    consumed: '220.20724646',
  },
  {
    dateTime: '01.05.2019 15:30',
    generated: '902.28313461',
    consumed: '183.21222564',
  },
  {
    dateTime: '01.05.2019 15:45',
    generated: '3.08597510',
    consumed: '318.96032651',
  },
  {
    dateTime: '01.05.2019 16:00',
    generated: '553.23199782',
    consumed: '768.37632152',
  },
  {
    dateTime: '01.05.2019 16:15',
    generated: '620.12718280',
    consumed: '415.24961585',
  },
  {
    dateTime: '01.05.2019 16:30',
    generated: '463.71773686',
    consumed: '778.24816859',
  },
  {
    dateTime: '01.05.2019 16:45',
    generated: '482.80758482',
    consumed: '736.93755446',
  },
  {
    dateTime: '01.05.2019 17:00',
    generated: '206.54297858',
    consumed: '237.90191319',
  },
  {
    dateTime: '01.05.2019 17:15',
    generated: '907.90172435',
    consumed: '945.07458225',
  },
  {
    dateTime: '01.05.2019 17:30',
    generated: '621.71120299',
    consumed: '77.98128510',
  },
  {
    dateTime: '01.05.2019 17:45',
    generated: '74.97463483',
    consumed: '920.25592249',
  },
  {
    dateTime: '01.05.2019 18:00',
    generated: '572.63408531',
    consumed: '695.88578983',
  },
  {
    dateTime: '01.05.2019 18:15',
    generated: '184.98997491',
    consumed: '740.73003272',
  },
  {
    dateTime: '01.05.2019 18:30',
    generated: '92.26817918',
    consumed: '460.91388071',
  },
  {
    dateTime: '01.05.2019 18:45',
    generated: '692.84574874',
    consumed: '608.21118638',
  },
  {
    dateTime: '01.05.2019 19:00',
    generated: '16.39533104',
    consumed: '957.12113746',
  },
  {
    dateTime: '01.05.2019 19:15',
    generated: '200.55985155',
    consumed: '766.65136218',
  },
  {
    dateTime: '01.05.2019 19:30',
    generated: '660.30463668',
    consumed: '198.60186874',
  },
  {
    dateTime: '01.05.2019 19:45',
    generated: '654.22916878',
    consumed: '376.30439123',
  },
  {
    dateTime: '01.05.2019 20:00',
    generated: '587.69067533',
    consumed: '673.00623850',
  },
  {
    dateTime: '01.05.2019 20:15',
    generated: '417.35871350',
    consumed: '973.89154840',
  },
  {
    dateTime: '01.05.2019 20:30',
    generated: '83.44997206',
    consumed: '174.96659828',
  },
  {
    dateTime: '01.05.2019 20:45',
    generated: '611.35867742',
    consumed: '343.92787840',
  },
  {
    dateTime: '01.05.2019 21:00',
    generated: '861.41693116',
    consumed: '216.57430424',
  },
  {
    dateTime: '01.05.2019 21:15',
    generated: '294.53572560',
    consumed: '502.87342971',
  },
  {
    dateTime: '01.05.2019 21:30',
    generated: '897.44520151',
    consumed: '759.95561057',
  },
  {
    dateTime: '01.05.2019 21:45',
    generated: '90.75397230',
    consumed: '315.34027579',
  },
  {
    dateTime: '01.05.2019 22:00',
    generated: '243.01120490',
    consumed: '635.11196336',
  },
  {
    dateTime: '01.05.2019 22:15',
    generated: '606.80124310',
    consumed: '164.00065274',
  },
  {
    dateTime: '01.05.2019 22:30',
    generated: '849.38534083',
    consumed: '166.95450145',
  },
  {
    dateTime: '01.05.2019 22:45',
    generated: '223.46393055',
    consumed: '272.02338528',
  },
  {
    dateTime: '01.05.2019 23:00',
    generated: '463.30683654',
    consumed: '172.91338342',
  },
  {
    dateTime: '01.05.2019 23:15',
    generated: '665.22896125',
    consumed: '986.07102395',
  },
  {
    dateTime: '01.05.2019 23:30',
    generated: '621.60049364',
    consumed: '552.56838114',
  },
  {
    dateTime: '01.05.2019 23:45',
    generated: '151.25558932',
    consumed: '773.84520433',
  },
  {
    dateTime: '02.05.2019 00:00',
    generated: '258.75580087',
    consumed: '559.29119574',
  },
];

export { mockData };
