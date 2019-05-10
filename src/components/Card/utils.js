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
    spent,
    earned,
    currency: "€"
  }
}

export { parseData };
