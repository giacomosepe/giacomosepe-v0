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
			"Every business is ultimately about people and how they interact. Shareholders' challenges today are mainly about peopple. They struggle to find trained employees, loyal customers, strategic partners or investors. I focus on serving leadership teams at small companies in adopting techology, communicating with investors and launching new products that truly customer-driven.",

		dayToDay:
			"Over many years and different experiences I developed managerial and technical competencies to generate value for companies like financial communication, innovation strategy and product management.",

		result:
			"The result of my efforts aligning and connecting people is additional revenue streams, modernized go-to-market with software, improved company positioning.Shareholders at 4 companies I worked at, ended up with higher value businesses and were able to sell them to new investors. They built valuabe and viable solutions to customers problems and they built sales pitches and investor decks that secured higher valuations.",

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
			"Strategia di operations e innovazione di prodotto che crea valore per gli azionisti.",

		approach:
			"Ogni impresa, in ultima analisi, riguarda le persone e il modo in cui interagiscono. Le persone sono quasi sempre la chiave di uno sviluppo sano. Gli azionisti di imprese familiare oggi affrontano una sfida sulle persone. Faticano a trovare dipendenti formati, clienti fedeli e partner strategici o investitori. Io servo gli azionisti nel loro obiettivo di creare valore aziendale.",

		dayToDay:
			"Nel corso di molti anni grazie ad esperienze diverse ho sviluppato competenze per creare valore in aziende medie, piccole e piccolissime. Tra queste competenze ci sono comunicazione finanziaria, strategia di innovazione e product management.",

		result:
			"Il risultato del mio impegno e' di solito l'aumento di valore e una maggiore modernita' dei processi anche in occasione della cessione a nuovi investitori.",

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
