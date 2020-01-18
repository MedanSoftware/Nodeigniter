var Helper = {
	format_date : (date, month, year, hours, minutes, second) => {
		var months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
		if (months.indexOf(month.toLowerCase()) !== -1) {
			return new Date(year, months.indexOf(month.toLowerCase()), date, hours, minutes, second);
		}
	}
}

module.exports = Helper;