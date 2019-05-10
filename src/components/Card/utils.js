function parseData(data) {

  let generated = 0;
  let consumed = 0;
  let spent = 0;
  let earned = 0;

  data.forEach(item => {
    generated += parseFloat(item.generated);
    consumed += parseFloat(item.consumed);
  })


  return {
    generated: generated.toFixed(3),
    consumed: consumed.toFixed(3),
    date: '',
    day: '',
    spent: (consumed * 0.2).toFixed(2),
    earned: (generated * 0.2).toFixed(2),
    currency: "€"
  }
}

export { parseData };
