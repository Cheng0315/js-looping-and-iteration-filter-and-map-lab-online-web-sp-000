// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (driver) {
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  overDrivers = driversWithRevenueOver(drivers, revenue)
  return overDrivers.map(function (driver) {
    return driver.name;
  });
}

function exactMatch(drivers, obj) {
  key = Object.keys(obj);
  return drivers.filter(function (driver) {
    return driver[key[0]] === obj[key]
  })
}
