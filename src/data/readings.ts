export type Reading = {
	title: string;
	author?: string;
	note: string;
	/** Shown as a button once a link is ready. */
	url?: string;
};

export const readings: Reading[] = [
	{
		title: 'The Orthodox Study Bible',
		note: 'A study Bible prepared for Orthodox readers. The Old Testament follows the Greek Septuagint, and the notes introduce the Church’s way of reading Scripture.',
	},
	{
		title: 'The Mountain of Silence',
		author: 'Kyriacos C. Markides',
		note: 'A search for Orthodox spirituality, told through visits to a monastery in the mountains of Cyprus and conversations about prayer and stillness.',
	},
];
