const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    // C) FIX
    value: prompt('Degrees celsius:'),
  };

  // B) Find the bug
  console.table(measurement); // <-- Soma do celsius está concatenado e não somado

  const kelvin = measurement.value + 273;
  return kelvin;
};

// A) Identify the bug
console.log(measureKelvin());
