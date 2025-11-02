export const formattedPrice = (number) =>
	new Intl.NumberFormat("fr-FR", {
		style: "currency",
		currency: "EUR",
	}).format(number);
