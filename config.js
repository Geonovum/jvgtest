//-- ==================================================================================
//-- File. . . :  config.js
//-- Bevat . . :  Template voor de  configuratie voor respec  
//--              Gebaseerd op https://github.com/Geonovum/respec/wiki
//--              Deze file moet worden neergezet in de root-directory van de 
//--              betreffende standaard. 
//-- Door. . . :  Jan van Gelder 
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-- Log . . . :  20181015 - JvG - Initiele versie 
//-------------------------------------------------------------------------------------

//-- ==================================================================================
var respecConfig = 
{
  //-- specStatus is verplicht! (activeer 1 van de volgende) --------------------------
  specStatus: "GN-WV",                // Werk Versie
  //specStatus: "GN-CV",              // Consultatie Versie
  //specStatus: "GN-VV",              // Vaststellings Versie
  //specStatus: "GN-DEF",             // Definitieve Versie
  //-- specType is verplicht! (activeer 1 van de volgende) ----------------------------
  //specType: "NO",			// Norm
  //specType: "ST",                     // Standaard
  specType: "IM",			// Informatie Model
  //specType: "PR",			// Praktijk Richtlijn
  //specType: "HR",			// HandReiking
  //specType: "WA",			// Werkafspraak
  //specType: "US",			// Uitwisselings standaard
  //specType: "PS",			// Presentatie sstandaard
  //-- format is verplicht! -----------------------------------------------------------
  format: "markdown",			// altijd "markdown"     
  //-- publishDate is verplicht -------------------------------------------------------
  //-- NB: in de werkversie uitzetten, want dan pakt Respec de pushdate ---------------
  //publishDate: "2017-06-14",		// Format is "YYYY-MM-DD"
  //-- de namen van de Editor(s) ------------------------------------------------------
  //-- vul in: per Editor: name:, company:, companyURL: -------------------------------
  editors: 
  [
    {
      name:       "Naam van de editor(s)",
      company:    "Geonovum",
      companyURL: "https://www.geonovum.nl"
    }, 
  ],
  //-- de namen van de Author(s) ------------------------------------------------------
  //-- vul in: per Author: name:, company:, companyURL: -------------------------------
  authors: 
  [
    {
      name:       "Naam van de auteur(s)",
      company:    "Geonovum",
      companyURL: "https://www.geonovum.nl"
    }, 
  ],
  //-- shortName is verplicht! (komt in de URL: kies logische naam) --------------------
  shortName: "jvg", 	     		// Wordt gebruikt in de document URL
  //-- pubDomain is verplicht! (komt in de URL: Activeer 1 van de volgende) ------------
  pubDomain: "test",			// Informatiemodel Geluid
  //pubDomain: "mim",			// Metamodel Informatie Modellering
  //pubDomain: "bor",			// Beheer Openbare Ruimte
  //pubDomain: "bro",			// Basisregistratie Ondergrond
  //pubDomain: "imgeo",			// IMGeo / BGT
  //pubDomain: "kl",			// Kabels en Leidingen
  //pubDomain: "liv",			// Landelijke Informatievoorziening Vastgoedgebruik
  //pubDomain: "md",			// Metadata
  //pubDomain: "nen3610",		// Basismodel NEN3610
  //pubDomain: "oov",			// Openbare Orde en Veiligheid
  //pubDomain: "ro",			// Ruimtelijke Ordening
  //pubDomain: "serv",			// Services
  //pubDomain: "visu",			// Visualisatie
  //pubDomain: "wp",			// White Paper
  //-- Repositorynaam op GitHub -------------------------------------------------------
  github: "https://github.com/Geonovum/jvgtest",
  //-- Repositorynaam/issues op GitHub ------------------------------------------------
  issueBase: "https://github.com/Geonovum/jvgtest/issues/",
  //-- edDraftURI: de URI van de werkversie van het document
  edDraftURI: "https://geonovum.github.io/jvgtest",
  //-- license: voor de geldende gebruiksvoorwaarden
  licence: "cc-by-nd",			//-- bronvermelding, geen afgeleide werken (default)
  // licence: "cc0",			//-- Public Domain Dedication
  // licence: "cc-by",			//-- Attribution, met bronvermelding
  
  //-- localBiblio: lokale bibliografie, voor verwijzigingen
  //-- NB: kijk eerst naar de beschikbare www.specref.org voor verwijziging 
  localBiblio: 
  {
    "CITAAT":
      {
        title:      "Titel van het Citaat",
        href:       "http://url van de publicatie",
        status:     "versie van de publicatie",
        publisher:  "naam van de publiceerder",
        company:    "eventueel naam van bedrijf",
    }
  },

  //-- Voor dit blok geldt: alleen als er eerdere versies zijn en altijd beiden aan/uit! 
  //previousPublishDate: "2017-06-14",	// Format is "YYYY-MM-DD"
  //previousMaturity: "GN-DEF",		// kies 1 van deze 3 regels
  //previousMaturity: "CV",		// kies 1 van deze 3 regels  	  
  //previousMaturity: "VV",		// kies 1 van deze 3 regels

  //-- Optionele parameters:
  //emailComments: "helpdesknaam@geonovum.nl",	// reactie mailadres, alleen bij CV!
  //subtitle: "iets",                         	// Subtitel van het document
  //maxTocLevel: 3,                           	// Aantal niveau's ToC, default is 0
};