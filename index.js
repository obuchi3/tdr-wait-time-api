const Themeparks = require('themeparks');
const fs = require('fs');

const Park = {
  tdl: 'tdl',
  tds: 'tds'
};

const getParkObject = parkName =>
  parkName === Park.tds
    ? new Themeparks.Parks.TokyoDisneyResortDisneySea()
    : new Themeparks.Parks.TokyoDisneyResortMagicKingdom();

(async () => {
  const tdl = getParkObject(Park.tdl);
  await fs.writeFile(
    '/var/www/html/tdl.json',
    JSON.stringify(await tdl.GetWaitTimes()),
    () => {}
  );

  const tds = getParkObject(Park.tds);
  await fs.writeFile(
    '/var/www/html/tds.json',
    JSON.stringify(await tds.GetWaitTimes()),
    () => {}
  );
})();
