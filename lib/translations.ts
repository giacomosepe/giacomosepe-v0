export const translations = {
	en: {
		// Navbar
		chat: "Chat",
		substack: "Substack",

		// Home Page
		title: "Operating Partner",

		intro:
			"I partner with shareholders of mid-market companies (€2-30M revenue) to scale operations and prepare for exits or capital raises.",

		approach:
			"I work alongside business owners and managers for 12-24 months to standardize operations, build an ecosystem of strategic partnerships and relationships, and position companies for maximum value in M&A transactions or fundraising.",

		dayToDay:
			"Day-to-day work includes: operational scaling (financial systems, process documentation, team building), partnership development (building revenue channels through strategic relationships), and exit preparation (preparing data rooms, strengthening financials, improving investor communications).",

		result:
			"After working together, companies achieve higher valuations thanks to clear financial positioning, documented operations, proven revenue channels, and professional management teams. ",

		// background section
		background:
			"20+ years in M&A (Fineurop Soditic), private equity (EQValue), and operations leadership (Hines, UBS, multiple COO/CEO roles). Columbia MBA.",

		// Completed Work
		completedWork: "Select experience",
		cotolicious: "IPE holding family office — ",
		cotoliciousDesc:
			"COO, Cotolicious (IPE Holdings portfolio company) - Built financial dashboards, streamlined operations, launched e-commerce. Successfully prepared and executed company sale.",
		picciotto: "Picciotto family office — ",
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
		contactTitle: "Easiest way to reach me",
		contactSubtitle:
			"Happy to talk about leadership, software and the transformations that make companies more valuable.",
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
			"Aiuto aziende di medie dimensioni (€2-30M di fatturato) snellire e automatizzare i processi e prepararsi per exit o raccolta di capitale.",

		approach:
			"Lavoro al fianco di imprenditori e azionisti per 12-24 mesi per semplficiare le operazioni, costruire l'ecosistema di partnership strategiche e relazioni e posizionare le aziende per massimizzare il valore in transazioni M&A o fundraising.",

		dayToDay:
			"Attività quotidiane: scaling operativo (sistemi finanziari, documentazione processi, team building), sviluppo di un ecosistema di partner (costruzione canali di ricavi attraverso relazioni strategiche), preparazione exit (preparazione data room, rafforzamento dati finanziari, miglioramento comunicazione investitori).",

		result:
			"L'obiettivo ultimo del mio lavoro e' raggiungere e giustificare valutazioni più alte grazie a: posizionamento finanziario chiaro, operazioni documentate, canali di ricavi comprovati, e team manageriali professionali.",

		// background section
		background:
			"20+ anni in M&A (Fineurop Soditic), private equity (EQValue), e leadership operativa (Hines, UBS, diversi ruoli COO/CEO). MBA da Columbia.",

		// Completed Work
		completedWork: "Casi di successo",
		cotolicious: "IPE holding family office — ",
		cotoliciousDesc:
			"Creazione dashboard finanziari, ottimizzazione operazioni, lancio e-commerce. Preparazione e vendita azienda completata con successo.",
		picciotto: "Picciotto family office —",
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
		contactTitle: "Il modo più semplice per contattarmi",
		contactSubtitle:
			"Felice di parlare di leadership, software e delle trasformazioni che rendono le aziende più preziose.",
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
