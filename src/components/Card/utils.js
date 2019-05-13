function parseData(data) {
  let generated = 0;
  let consumed = 0;
  let spent = 0;
  let earned = 0;

  data.forEach(item => {
    generated += parseFloat(item.generated);
    consumed += parseFloat(item.consumed);
  });

  return {
    generated: generated.toFixed(0),
    consumed: consumed.toFixed(0),
    date: '',
    day: '',
    spent: (consumed * 0.2).toFixed(0),
    earned: (generated * 0.2).toFixed(0),
    currency: '€',
  };
}

function getDateInfo(param) {
  if (param === 'day') {
    return {
      name: 'Today',
      date: new Date().toDateString()
    };
  }

  if (param === 'month') {
    let x = new Date();
    x.setDate(1);
    x.setMonth(x.getMonth()-1);
    console.log('x', x);
    return {
      name: 'Previus month',
      date: ''
    };
  }

  if (param === 'year') {
    return {
      name: 'Previus year',
      date: ''
    };
  }

  return null
}

export { parseData, getDateInfo };
