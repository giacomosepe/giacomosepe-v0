export const translations = {
	en: {
		// Navbar
		chat: "Chat",
		substack: "Substack",

		// Home Page
		title: "Operating Partner",

		intro:
			"I partner with shareholders of mid-market companies ($2.5-20M revenue) to scale operations and prepare for exits or capital raises.",

		approach:
			"Every business is ultimately about people. My work involves refining vision, extracting financial data, and improving financial communication so that business value is crystal clear to investors and partners, standardizing operations so that internal people know what to do autonomously, building the ecosystem of partnerships and revenue channels so that external people love and support what we do.",

		dayToDay:
			"Day-to-day work includes: operational scaling (financial systems, process documentation, team building), partnership development (building revenue channels through strategic relationships), and exit preparation (preparing data rooms, strengthening financials, taking responsibility for investor communications).",

		result:
			"I work alongside business owners and managers for 12-24 and position companies with the goal of achieving maximum value in M&A transactions or fundraising. ",

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
			"Something went wrong. Please try again or email me directly.",
	},
	it: {
		// Navbar
		chat: "Contatti",
		substack: "Substack",

		// Home Page
		title: "Operating Partner",

		intro:
			"Aiuto aziende di medie dimensioni (€2-18M di fatturato) snellire e automatizzare i processi e prepararsi per exit o raccolta di capitale.",

		approach:
			"Ogni business è in ultima analisi fatto di persone. Il mio lavoro consiste nell'affinare la visione, estrarre dati finanziari e migliorare la comunicazione finanziaria in modo che il valore aziendale sia cristallino per investitori e partner, standardizzare le operations affinché le persone interne sappiano cosa fare autonomamente, costruire l'ecosistema di partnership e canali di ricavo affinché le persone esterne amino e supportino ciò che facciamo.",

		dayToDay:
			"Attività quotidiane: scaling operativo (sistemi finanziari, documentazione processi, team building), sviluppo di un ecosistema di partner (costruzione canali di ricavi attraverso relazioni strategiche), preparazione exit (preparazione data room, rafforzamento dati finanziari, miglioramento comunicazione investitori).",

		result:
			"Lavoro al fianco di imprenditori e manager per 12-24 mesi con l'obiettivo di posizionare le aziende per ottenere il massimo valore in transazioni di M&A o raccolte di capitale",

		openTo: "Parliamo di come collaborare!",

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
		contactTitle: "Come posso essere utile?",
		contactSubtitle:
			"Il modo migliore per capire se ci sono le condizioni per collaborare e' mandarmi un messaggio. Rispondo rapidamente.",
		nameLabel: "Nome",
		namePlaceholder: "Il tuo nome",
		emailLabel: "Email",
		emailPlaceholder: "tua.email@esempio.com",
		messageLabel: "Messaggio",
		messagePlaceholder: "Il tuo messaggio...",
		submitButton: "Invia il tuo messaggio a Giacomo",
		submitting: "Invio in corso...",
		successMessage:
			"Il tuo messaggio è arrivato con successo nella mia casella di posta. Ti risponderò entro poche ore.",
		errorMessage:
			"Qualcosa è andato storto. Riprova o inviami un'email direttamente.",
	},
};

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;
