export const parish = {
	name: 'Saint Thomas the Apostle',
	shortName: 'Saint Thomas',
	denomination: 'Orthodox Church',
	affiliation: 'A Parish of the Diocese of the Midwest (OCA)',
	founded: 1978,
	deanery: 'Kansas City Deanery',
	language: 'English',
	rector: {
		name: 'Father Basil Ferguson',
		formalName: 'Rev. Basil Ferguson',
		role: 'Rector',
	},
	hierarchs: [
		{
			name: 'His Beatitude Tikhon',
			role: 'Archbishop of Washington, Metropolitan of All America and Canada',
		},
		{
			name: 'His Eminence Daniel',
			role: 'Archbishop of Chicago and the Midwest',
		},
	],
	links: {
		oca: 'https://www.oca.org/',
		orthodoxFaith: 'https://www.oca.org/orthodoxy/the-orthodox-faith',
		diocese: 'https://domoca.org/',
		directory: 'https://www.oca.org/parishes/oca-mw-sgfsta',
	},
	address: {
		street: '4200 S Holiday Ave',
		city: 'Springfield',
		state: 'MO',
		zip: '65810',
		full: '4200 S Holiday Ave, Springfield MO 65810',
		mapsUrl:
			'https://www.google.com/maps/search/?api=1&query=4200+S+Holiday+Ave+Springfield+MO+65810',
	},
	phone: '(417) 352-2162',
	phoneHref: 'tel:+14173522162',
	email: 'office@orthodoxsgf.org',
	emailHref: 'mailto:office@orthodoxsgf.org',
	donateUrl: 'https://give.tithe.ly/?formId=06a170a7-07b7-4470-b4f0-df4f6662d7e0',
	services: [
		{ name: 'Great Vespers', time: '5:30 PM', day: 'Saturdays' },
		{ name: 'Hours', time: '8:40 AM', day: 'Sundays' },
		{ name: 'Divine Liturgy', time: '9:00 AM', day: 'Sundays' },
		{ name: 'Small Compline', time: '6:30 PM', day: 'Wednesdays' },
	],
	calendars: {
		services: {
			label: 'Services',
			src: 'staocsgf@gmail.com',
			ics: 'https://calendar.google.com/calendar/ical/staocsgf%40gmail.com/public/basic.ics',
			webcal: 'webcal://calendar.google.com/calendar/ical/staocsgf%40gmail.com/public/basic.ics',
		},
		feasts: {
			label: 'Feasts',
			src: 'gr2uhpa6psd6a9gs7hng089ss8@group.calendar.google.com',
			ics: 'https://calendar.google.com/calendar/ical/gr2uhpa6psd6a9gs7hng089ss8%40group.calendar.google.com/public/basic.ics',
			webcal:
				'webcal://calendar.google.com/calendar/ical/gr2uhpa6psd6a9gs7hng089ss8%40group.calendar.google.com/public/basic.ics',
		},
		events: {
			label: 'Events',
			src: '52qqj9its3oit4tn9cjt59k3ds@group.calendar.google.com',
			ics: 'https://calendar.google.com/calendar/ical/52qqj9its3oit4tn9cjt59k3ds%40group.calendar.google.com/public/basic.ics',
			webcal:
				'webcal://calendar.google.com/calendar/ical/52qqj9its3oit4tn9cjt59k3ds%40group.calendar.google.com/public/basic.ics',
		},
	},
} as const;

export const recipeCategoryLabels: Record<string, string> = {
	desserts: 'Desserts',
	entrees: 'Entrees',
	sides: 'Sides',
	'soups-stews': 'Soups & Stews',
};
