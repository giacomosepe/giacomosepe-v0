export const translations = {
	en: {
		// Navbar
		chat: "Chat",
		substack: "Substack",

		// Home Page
		title: "Operations and product innovation",

		intro:
			"Operations and product innovation strategy that builds value for shareholders.",

		approach:
			"Every business, ultimately, is based on the people and their interactions. Almost always, the right employees and a strong fit with customers are the key to a healthy growth. Very often, small and medium entrepreneurs struggle to attract and retain talent. They find it challenging to attract and convince valuable partners and new investors. They also fight to retain customers and turn them into raving fans.",

		dayToDay:
			"My goal is to 1) create efficient organizations where employees are motivated and effective, and 2) develop a communication model based on customer discovery that conveys the vision and growth prospects to clients, partners, and investors.",

		result:
			"The work I do usually results in an increase in business value based on solid foundations such as corporate culture, innovation, and economic performance.",

		openTo: "Let's work together",

		// background section
		background:
			"20+ years in M&A (Fineurop Soditic), private equity (EQValue), and operations leadership (Hines, UBS, multiple COO/CEO roles). Columbia MBA.",

		// Completed Work
		completedWork: "Select experience",
		cotolicious: "IPE holding family office — ",
		cotoliciousDesc:
			"COO, Cotolicious (IPE Holdings portfolio company) - Built financial dashboards, streamlined operations, launched e-commerce. Successfully prepared and executed company sale.",
		picciotto: "De Picciotto family office — ",
		picciottoDesc:
			"Managed investment portfolio across 5 companies (hospitality, entertainment). Supported partnerships and divestments.",
		simmetrico: "Simmetrico - ",
		simmetricoDesc:
			"Redesigned org structure, built cash flow dashboard, launched new service line. Improved bank negotiations, sold product rights to Chinese distributor.",
		otherWork: "Chamilia - ",
		otherWorkDesc:
			"(acquired by Swarovski) — Head of Commerce: Commercial leadership during growth phase and acquisition.",
		eqvalue: "EQValue Private equity investment club - ",
		eqvalueDesc:
			"Originated and closed 4 investments (€1-10M). Improved portfolio company performance metrics 5-10% pre-exit.",
		fineurop: "Fineurop Soditic - ",
		fineuropDesc:
			"Originated and executed deals worth €30M and €80M for private equity clients.",
		flamme: "Flamme",
		flammeDesc: "— Sales & Sales Ops.",

		// Contact Page
		contactTitle: "How can I help?",
		contactSubtitle:
			"The best way to understand if we can work together is a short conversaion. Send me a message and I will be in touch.",
		nameLabel: "Name",
		namePlaceholder: "Your name",
		emailLabel: "Email",
		emailPlaceholder: "your.email@example.com",
		messageLabel: "Message",
		messagePlaceholder: "Your message...",
		submitButton: "Send your note to Giacomo",
		submitting: "Sending...",
		successMessage:
			"Your message successfully landed in my inbox. I will be in touch within a few hours.",
		errorMessage:
			"Something went wrong. Please try again or find me on Linekedin.",
	},
	it: {
		// Navbar
		chat: "Contatti",
		substack: "Substack",

		// Home Page
		title: "Operations e innovazione di prodotto",

		intro:
			"Operations e strategia di prodotto a servizio di azionisti di piccole e medie imprese che vogliono creare organizzazioni scalabili e sostenibili.",

		approach:
			"Ogni impresa, in ultima analisi, e' basata sulle sue persone e sulle loro interazioni. Quasi sempre, sono le persone giuste la chiave per uno sviluppo sano. Molto spesso i piccoli e medi imprenditori hanno difficolta' ad attrarre e trattenere le persone. Faticano ad attrarre e convincere partner e nuovi investitori di valore. E combattono per trattenere i clienti e trasformali in fans.",

		dayToDay:
			"Lo scopo del mio lavoro e' creare organizzazioni efficienti in cui i dipendenti si sentono motivati e possono esprimere le proprie capacita', e sviluppare un modello di comunicazione basato sull'ascolto che trasmetta a clienti, partner e investitori la visione e le prospettive di crescita.",

		result:
			"Il risultato del mio impegno e' l'aumento di valore aziendale fondato su base solide, come cultura aziendale, innovazione, e performance economica.",

		openTo: "Per parlare di come collaborare >>",

		// background section
		background:
			"20+ anni in M&A (Fineurop Soditic), private equity (EQValue), e leadership operativa (Hines, UBS, diversi ruoli COO/CEO). MBA da Columbia.",

		// Completed Work
		completedWork: "Casi di successo",
		cotolicious: "IPE holding family office — ",
		cotoliciousDesc:
			"Creazione dashboard finanziari, ottimizzazione operazioni, lancio e-commerce. Preparazione e vendita azienda completata con successo.",
		picciotto: "De Picciotto family office —",
		picciottoDesc:
			"Gestione portfolio investimenti su 5 aziende (hospitality, entertainment). Supporto partnership e disinvestimenti.",
		simmetrico: "Simmetrico - ",
		simmetricoDesc:
			"Ridisegno struttura organizzativa, creazione dashboard cash flow, lancio nuova linea servizi. Miglioramento negoziazioni bancarie, vendita diritti prodotto a distributore cinese.",
		otherWork: "Chamilia",
		otherWorkDesc:
			"(acquisita da Swarovski) — Head of Commerce. Leadership commerciale durante fase crescita e acquisizione.",
		eqvalue: "EQValue Private equity investment club - ",
		eqvalueDesc:
			"Origination e chiusura 4 investimenti (€1-10M). Miglioramento performance aziende portfolio 5-10% pre-exit.",
		fineurop: "Fineurop Soditic - ",
		fineuropDesc:
			"Acquisizione clienti e esecuzione deal per €30M e €80M per clienti private equity.",
		flamme: "Flamme",
		flammeDesc: "— Sales & Sales Ops.",

		// Contact Page
		contactTitle: "(Come) posso essere utile?",
		contactSubtitle:
			"Il modo migliore per capire se ci sono le condizioni per collaborare e' mandarmi un messaggio. Rispondo rapidamente.",
		nameLabel: "Nome",
		namePlaceholder: "Il nome",
		emailLabel: "Email",
		emailPlaceholder: "nome.cognome@esempio.com",
		messageLabel: "Messaggio",
		messagePlaceholder: "Il messaggio...",
		submitButton: "Inviare il messaggio a Giacomo",
		submitting: "Invio in corso...",
		successMessage:
			"Il vostro messaggio è arrivato con successo nella mia casella di posta. Vi risponderò entro poche ore.",
		errorMessage:
			"La tecnologia non ha funzionato. Riprovate, per favore, o inviatemi un messaggio diretto su Linkedin.",
	},
};

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;
