const request = require('request');

test('Able to retrive one data given ID', () => {
  request('http://127.0.0.1:3000/api/turash/description/50', function(err, response, body) {
    var output = JSON.parse(body);
    expect(typeof output).toBe('object');
    expect(output.id).toBe(50);
    expect(output).toHaveProperty('trips');
    expect(output).toHaveProperty('faq');
  });

  request('http://127.0.0.1:3000/api/turash/description/70', function(err, response, body) {
    var output = JSON.parse(body);
    expect(typeof output).toBe('object');
    expect(output.id).toBe(70);
    expect(output).toHaveProperty('business');
    expect(output).toHaveProperty('doors');
  });
});
