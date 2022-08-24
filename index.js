const dayjs = require('dayjs');

function DateOrder(format) {
	// always use 4 digit year
	format = format.replace(/Y{1,3}/, 'YYYY');
	// use 2 digit month,day,hour,min,sec
	format = format.replace(/M{3,}/, 'MM');
	format = format.replace(/D{3,}/, 'DD');
	format = format.replace(/m{3,}/, 'mm');
	format = format.replace(/h{3,}/, 'hh');
	format = format.replace(/s{3,}/, 'ss');

	const testDate = '2022-09-24 10:13:55',
		formattedDate = dayjs(testDate, 'YYYY-MM-DD').format(format),
		order = formattedDate
			.split(/[^0-9APM]+/)
			.map((v) => {
				switch (v) {
					case '2022':
						v = 'year';
						break;
					case '09':
						v = 'month';
						break;
					case '24':
						v = 'day';
						break;
					case '10':
						v = 'hour';
						break;
					case '13':
						v = 'minute';
						break;
					case '55':
						v = 'second';
						break;

					case 'AM':
					case 'PM':
						v = 'AM/PM';
						break;

					default:
						v = null;
				}

				return v;
			})
			.filter((v) => v !== null);


	return order;
}
