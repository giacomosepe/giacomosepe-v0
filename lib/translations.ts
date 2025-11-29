export const translations = {
	en: {
		// Navbar
		chat: "Chat",
		substack: "Substack",

		// Home Page
		title: "Operations and product innovation",

		intro:
			"I am a operations and product innovation strategy manager working with shareholders to generate value for their companies.",

		approach:
			"Every business is ultimately about people and how they interact. I support leadership teams in organizing workflows, communicate the vision, deliver new products.",

		dayToDay:
			"Over many years and different experiences I developed specialized competencies for small businesses to add revenue streams, modernize go-to-market with technology and partnerships strategy, refine business positioning and messaging to new investors, distributors, and partners.",

		result:
			"Companies ended up having businesses equipped with modern, scalable, technology powered, valuable and viable solutions to customers problems.",

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
			"Sono specializzato in operations e innovazione di prodotto, e lavoro con azionisti di PMI per creare valore finanziario in azienda di piccola o media dimensione.",

		approach:
			"Ogni business riguarda in ultima analisi le persone e come queste interagiscono. Io supporto i team di leadership nell'organizzazione dei flussi di lavoro, comunicazione della visione, lancio di nuovi prodotti.",

		dayToDay:
			"Nel corso di molti anni e diverse esperienze ho sviluppato competenze specialistiche per aiutare le piccole imprese ad aggiungere fonti di fatturato, modernizzare l'approccio al mercato (Go to market) con software e strategie di partnership, con il posizionamento aziendale e con la comunicazione verso investitori, distributori e partner.",

		result:
			"Gli azionisti con cui ho lavorato hanno ottenuto business equipaggiati con soluzioni moderne, scalabili, basate sulla tecnologia, di valore e sostenibili per i problemi dei clienti.",

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
