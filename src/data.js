var day1 = new Date().toISOString().slice(0,10)
var nextDay = new Date();
nextDay.setDate(new Date().getDate() + 1);
var day2 = nextDay.toISOString().slice(0,10);
var palleroj = new Date();
palleroj.setDate(new Date().getDate() + 2);
var day3 = palleroj.toISOString().slice(0,10);
export default [
    {
        "flight_date": day2,
        "flight_status": "active",
        "departure": {
            "airport": "Manchester Airport",
            "timezone": "Europe/London",
            "iata": "MAN",
            "icao": "EGCC",
            "terminal": "2",
            "gate": null,
            "delay": null,
            "scheduled": day2+"T07:35:00+00:00",
            "estimated": day2+"T07:35:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Souda",
            "timezone": "Europe/Athens",
            "iata": "CHQ",
            "icao": "LGSA",
            "terminal": null,
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": day2+"T13:45:00+00:00",
            "estimated": day2+"T13:45:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "TUIfly",
            "iata": "X3",
            "icao": "TUI"
        },
        "flight": {
            "number": "2204",
            "iata": "X32204",
            "icao": "TUI2204",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": day3,
        "flight_status": "active",
        "arrival": {
            "airport": "Manchester Airport",
            "timezone": "Europe/London",
            "iata": "MAN",
            "icao": "EGCC",
            "terminal": "2",
            "gate": null,
            "delay": null,
            "scheduled": day3+"T11:50:00+00:00",
            "estimated": day3+"T11:50:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "departure": {
            "airport": "Souda",
            "timezone": "Europe/Athens",
            "iata": "CHQ",
            "icao": "LGSA",
            "terminal": null,
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": day3+"T05:20:00+00:00",
            "estimated": day3+"T05:20:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "TUIfly",
            "iata": "X3",
            "icao": "TUI"
        },
        "flight": {
            "number": "2204",
            "iata": "X32204",
            "icao": "TUI2204",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": day2,
        "flight_status": "scheduled",
        "departure": {
            "airport": "Barajas",
            "timezone": "Europe/Madrid",
            "iata": "MAD",
            "icao": "LEMD",
            "terminal": "4",
            "gate": null,
            "delay": null,
            "scheduled": day2+"T11:30:00+00:00",
            "estimated": day2+"T11:30:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Arlanda",
            "timezone": "Europe/Stockholm",
            "iata": "ARN",
            "icao": "ESSA",
            "terminal": "5",
            "gate": "F37",
            "baggage": "3",
            "delay": null,
            "scheduled": day2+"T15:25:00+00:00",
            "estimated": day2+"T15:25:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Finnair",
            "iata": "AY",
            "icao": "FIN"
        },
        "flight": {
            "number": "5634",
            "iata": "AY5634",
            "icao": "FIN5634",
            "codeshared": {
                "airline_name": "iberia",
                "airline_iata": "ib",
                "airline_icao": "ibe",
                "flight_number": "3314",
                "flight_iata": "ib3314",
                "flight_icao": "ibe3314"
            }
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": day3,
        "flight_status": "scheduled",
        "arrival": {
            "airport": "Barajas",
            "timezone": "Europe/Madrid",
            "iata": "MAD",
            "icao": "LEMD",
            "terminal": "4",
            "gate": null,
            "delay": null,
            "scheduled": day3+"T13:40:00+00:00",
            "estimated": day3+"T13:40:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "departure": {
            "airport": "Arlanda",
            "timezone": "Europe/Stockholm",
            "iata": "ARN",
            "icao": "ESSA",
            "terminal": "5",
            "gate": "F37",
            "baggage": "3",
            "delay": null,
            "scheduled": day3+"T09:25:00+00:00",
            "estimated": day3+"T09:25:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Finnair",
            "iata": "AY",
            "icao": "FIN"
        },
        "flight": {
            "number": "5634",
            "iata": "AY5634",
            "icao": "FIN5634",
            "codeshared": {
                "airline_name": "iberia",
                "airline_iata": "ib",
                "airline_icao": "ibe",
                "flight_number": "3314",
                "flight_iata": "ib3314",
                "flight_icao": "ibe3314"
            }
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": day2,
        "flight_status": "scheduled",
        "departure": {
            "airport": "Barajas",
            "timezone": "Europe/Madrid",
            "iata": "MAD",
            "icao": "LEMD",
            "terminal": "4",
            "gate": null,
            "delay": null,
            "scheduled": day2+"T11:30:00+00:00",
            "estimated": day2+"T11:30:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Arlanda",
            "timezone": "Europe/Stockholm",
            "iata": "ARN",
            "icao": "ESSA",
            "terminal": "5",
            "gate": "F37",
            "baggage": "3",
            "delay": null,
            "scheduled": day2+"T15:25:00+00:00",
            "estimated": day2+"T15:25:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "American Airlines",
            "iata": "AA",
            "icao": "AAL"
        },
        "flight": {
            "number": "8680",
            "iata": "AA8680",
            "icao": "AAL8680",
            "codeshared": {
                "airline_name": "iberia",
                "airline_iata": "ib",
                "airline_icao": "ibe",
                "flight_number": "3314",
                "flight_iata": "ib3314",
                "flight_icao": "ibe3314"
            }
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": day2,
        "flight_status": "scheduled",
        "departure": {
            "airport": "Barajas",
            "timezone": "Europe/Madrid",
            "iata": "MAD",
            "icao": "LEMD",
            "terminal": "4",
            "gate": "S38",
            "delay": 21,
            "scheduled": day2+"T11:05:00+00:00",
            "estimated": day2+"T11:05:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Dallas/Fort Worth International",
            "timezone": "America/Chicago",
            "iata": "DFW",
            "icao": "KDFW",
            "terminal": "D",
            "gate": "D30",
            "baggage": "CUST",
            "delay": null,
            "scheduled": day2+"T14:25:00+00:00",
            "estimated": day2+"T14:25:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Iberia",
            "iata": "IB",
            "icao": "IBE"
        },
        "flight": {
            "number": "4608",
            "iata": "IB4608",
            "icao": "IBE4608",
            "codeshared": {
                "airline_name": "american airlines",
                "airline_iata": "aa",
                "airline_icao": "aal",
                "flight_number": "37",
                "flight_iata": "aa37",
                "flight_icao": "aal37"
            }
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": day2,
        "flight_status": "scheduled",
        "departure": {
            "airport": "Barajas",
            "timezone": "Europe/Madrid",
            "iata": "MAD",
            "icao": "LEMD",
            "terminal": "4",
            "gate": "S38",
            "delay": 21,
            "scheduled": day2+"T11:05:00+00:00",
            "estimated": day2+"T11:05:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Dallas/Fort Worth International",
            "timezone": "America/Chicago",
            "iata": "DFW",
            "icao": "KDFW",
            "terminal": "D",
            "gate": "D30",
            "baggage": "CUST",
            "delay": null,
            "scheduled": day2+"T14:25:00+00:00",
            "estimated": day2+"T14:25:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "British Airways",
            "iata": "BA",
            "icao": "BAW"
        },
        "flight": {
            "number": "1513",
            "iata": "BA1513",
            "icao": "BAW1513",
            "codeshared": {
                "airline_name": "american airlines",
                "airline_iata": "aa",
                "airline_icao": "aal",
                "flight_number": "37",
                "flight_iata": "aa37",
                "flight_icao": "aal37"
            }
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": day2,
        "flight_status": "active",
        "departure": {
            "airport": "Barajas",
            "timezone": "Europe/Madrid",
            "iata": "MAD",
            "icao": "LEMD",
            "terminal": "4",
            "gate": "J56",
            "delay": null,
            "scheduled": day2+"T08:30:00+00:00",
            "estimated": day2+"T08:30:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Norte Los Rodeos",
            "timezone": "Atlantic/Canary",
            "iata": "TFN",
            "icao": "GCXO",
            "terminal": null,
            "gate": null,
            "baggage": "1",
            "delay": null,
            "scheduled": day2+"T10:20:00+00:00",
            "estimated": day2+"T10:20:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Iberia Express",
            "iata": "I2",
            "icao": "IBS"
        },
        "flight": {
            "number": "3942",
            "iata": "I23942",
            "icao": "IBS3942",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": day2,
        "flight_status": "scheduled",
        "departure": {
            "airport": "Cincinnati/Northern Kentucky",
            "timezone": "America/New_York",
            "iata": "CVG",
            "icao": "KCVG",
            "terminal": null,
            "gate": null,
            "delay": null,
            "scheduled": day2+"T06:42:00+00:00",
            "estimated": day2+"T06:42:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Philadelphia International",
            "timezone": "America/New_York",
            "iata": "PHL",
            "icao": "KPHL",
            "terminal": null,
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": day2+"T08:18:00+00:00",
            "estimated": day2+"T08:18:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Atlas Air",
            "iata": "5Y",
            "icao": "GTI"
        },
        "flight": {
            "number": "587",
            "iata": "5Y587",
            "icao": "GTI587",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": day2,
        "flight_status": "scheduled",
        "departure": {
            "airport": "Cincinnati/Northern Kentucky",
            "timezone": "America/New_York",
            "iata": "CVG",
            "icao": "KCVG",
            "terminal": null,
            "gate": null,
            "delay": 28,
            "scheduled": day2+"T05:20:00+00:00",
            "estimated": day2+"T05:20:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Wilkes-Barre/Scranton International Airport",
            "timezone": "America/New_York",
            "iata": "AVP",
            "icao": "KAVP",
            "terminal": null,
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": day2+"T07:39:00+00:00",
            "estimated": day2+"T07:39:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Aerolink Uganda",
            "iata": "A8",
            "icao": "XAU"
        },
        "flight": {
            "number": "1326",
            "iata": "A81326",
            "icao": "XAU1326",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": day2,
        "flight_status": "scheduled",
        "departure": {
            "airport": "Cincinnati/Northern Kentucky",
            "timezone": "America/New_York",
            "iata": "CVG",
            "icao": "KCVG",
            "terminal": null,
            "gate": null,
            "delay": 23,
            "scheduled": day2+"T05:05:00+00:00",
            "estimated": day2+"T05:05:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Los Angeles International",
            "timezone": "America/Los_Angeles",
            "iata": "LAX",
            "icao": "KLAX",
            "terminal": null,
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": day2+"T06:15:00+00:00",
            "estimated": day2+"T06:15:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Kalitta Air",
            "iata": "K4",
            "icao": "CKS"
        },
        "flight": {
            "number": "803",
            "iata": "K4803",
            "icao": "CKS803",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": day2,
        "flight_status": "scheduled",
        "departure": {
            "airport": "Qingdao",
            "timezone": "Asia/Shanghai",
            "iata": "TAO",
            "icao": "ZSQD",
            "terminal": null,
            "gate": "28",
            "delay": null,
            "scheduled": day2+"T20:30:00+00:00",
            "estimated": day2+"T20:30:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Beijing Capital International",
            "timezone": "Asia/Shanghai",
            "iata": "PEK",
            "icao": "ZBAA",
            "terminal": "3",
            "gate": null,
            "baggage": "30",
            "delay": null,
            "scheduled": day2+"T22:10:00+00:00",
            "estimated": day2+"T22:10:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Shenzhen Airlines",
            "iata": "ZH",
            "icao": "CSZ"
        },
        "flight": {
            "number": "2843",
            "iata": "ZH2843",
            "icao": "CSZ2843",
            "codeshared": {
                "airline_name": "shandong airlines",
                "airline_iata": "sc",
                "airline_icao": "cdg",
                "flight_number": "4657",
                "flight_iata": "sc4657",
                "flight_icao": "cdg4657"
            }
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": day2,
        "flight_status": "scheduled",
        "departure": {
            "airport": "Qingdao",
            "timezone": "Asia/Shanghai",
            "iata": "TAO",
            "icao": "ZSQD",
            "terminal": null,
            "gate": "28",
            "delay": null,
            "scheduled": day2+"T20:30:00+00:00",
            "estimated": day2+"T20:30:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Beijing Capital International",
            "timezone": "Asia/Shanghai",
            "iata": "PEK",
            "icao": "ZBAA",
            "terminal": "3",
            "gate": null,
            "baggage": "30",
            "delay": null,
            "scheduled": day2+"T22:10:00+00:00",
            "estimated": day2+"T22:10:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Air China LTD",
            "iata": "CA",
            "icao": "CCA"
        },
        "flight": {
            "number": "4657",
            "iata": "CA4657",
            "icao": "CCA4657",
            "codeshared": {
                "airline_name": "shandong airlines",
                "airline_iata": "sc",
                "airline_icao": "cdg",
                "flight_number": "4657",
                "flight_iata": "sc4657",
                "flight_icao": "cdg4657"
            }
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": day2,
        "flight_status": "scheduled",
        "departure": {
            "airport": "El Prat De Llobregat",
            "timezone": "Europe/Madrid",
            "iata": "BCN",
            "icao": "LEBL",
            "terminal": "1",
            "gate": "660",
            "delay": null,
            "scheduled": day2+"T12:15:00+00:00",
            "estimated": day2+"T12:15:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Leonardo Da Vinci (Fiumicino)",
            "timezone": "Europe/Rome",
            "iata": "FCO",
            "icao": "LIRF",
            "terminal": "3",
            "gate": null,
            "baggage": "7",
            "delay": null,
            "scheduled": day2+"T14:05:00+00:00",
            "estimated": day2+"T14:05:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Air Europa",
            "iata": "UX",
            "icao": "AEA"
        },
        "flight": {
            "number": "3126",
            "iata": "UX3126",
            "icao": "AEA3126",
            "codeshared": {
                "airline_name": "alitalia",
                "airline_iata": "az",
                "airline_icao": "aza",
                "flight_number": "77",
                "flight_iata": "az77",
                "flight_icao": "aza77"
            }
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": day2,
        "flight_status": "scheduled",
        "departure": {
            "airport": "El Prat De Llobregat",
            "timezone": "Europe/Madrid",
            "iata": "BCN",
            "icao": "LEBL",
            "terminal": "1",
            "gate": "660",
            "delay": null,
            "scheduled": day2+"T12:15:00+00:00",
            "estimated": day2+"T12:15:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Leonardo Da Vinci (Fiumicino)",
            "timezone": "Europe/Rome",
            "iata": "FCO",
            "icao": "LIRF",
            "terminal": "3",
            "gate": null,
            "baggage": "7",
            "delay": null,
            "scheduled": day2+"T14:05:00+00:00",
            "estimated": day2+"T14:05:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Saudia",
            "iata": "SV",
            "icao": "SVA"
        },
        "flight": {
            "number": "6238",
            "iata": "SV6238",
            "icao": "SVA6238",
            "codeshared": {
                "airline_name": "alitalia",
                "airline_iata": "az",
                "airline_icao": "aza",
                "flight_number": "77",
                "flight_iata": "az77",
                "flight_icao": "aza77"
            }
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": day2,
        "flight_status": "scheduled",
        "departure": {
            "airport": "El Prat De Llobregat",
            "timezone": "Europe/Madrid",
            "iata": "BCN",
            "icao": "LEBL",
            "terminal": "1",
            "gate": "660",
            "delay": null,
            "scheduled": day2+"T12:15:00+00:00",
            "estimated": day2+"T12:15:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Leonardo Da Vinci (Fiumicino)",
            "timezone": "Europe/Rome",
            "iata": "FCO",
            "icao": "LIRF",
            "terminal": "3",
            "gate": null,
            "baggage": "7",
            "delay": null,
            "scheduled": day2+"T14:05:00+00:00",
            "estimated": day2+"T14:05:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "China Eastern Airlines",
            "iata": "MU",
            "icao": "CES"
        },
        "flight": {
            "number": "8196",
            "iata": "MU8196",
            "icao": "CES8196",
            "codeshared": {
                "airline_name": "alitalia",
                "airline_iata": "az",
                "airline_icao": "aza",
                "flight_number": "77",
                "flight_iata": "az77",
                "flight_icao": "aza77"
            }
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": day2,
        "flight_status": "scheduled",
        "departure": {
            "airport": "El Prat De Llobregat",
            "timezone": "Europe/Madrid",
            "iata": "BCN",
            "icao": "LEBL",
            "terminal": "1",
            "gate": "660",
            "delay": null,
            "scheduled": day2+"T12:15:00+00:00",
            "estimated": day2+"T12:15:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Leonardo Da Vinci (Fiumicino)",
            "timezone": "Europe/Rome",
            "iata": "FCO",
            "icao": "LIRF",
            "terminal": "3",
            "gate": null,
            "baggage": "7",
            "delay": null,
            "scheduled": day2+"T14:05:00+00:00",
            "estimated": day2+"T14:05:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Korean Air",
            "iata": "KE",
            "icao": "KAL"
        },
        "flight": {
            "number": "6304",
            "iata": "KE6304",
            "icao": "KAL6304",
            "codeshared": {
                "airline_name": "alitalia",
                "airline_iata": "az",
                "airline_icao": "aza",
                "flight_number": "77",
                "flight_iata": "az77",
                "flight_icao": "aza77"
            }
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": day2,
        "flight_status": "scheduled",
        "departure": {
            "airport": "El Prat De Llobregat",
            "timezone": "Europe/Madrid",
            "iata": "BCN",
            "icao": "LEBL",
            "terminal": "1",
            "gate": "660",
            "delay": null,
            "scheduled": day2+"T12:15:00+00:00",
            "estimated": day2+"T12:15:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Leonardo Da Vinci (Fiumicino)",
            "timezone": "Europe/Rome",
            "iata": "FCO",
            "icao": "LIRF",
            "terminal": "3",
            "gate": null,
            "baggage": "7",
            "delay": null,
            "scheduled": day2+"T14:05:00+00:00",
            "estimated": day2+"T14:05:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Air Serbia",
            "iata": "JU",
            "icao": "ASL"
        },
        "flight": {
            "number": "7285",
            "iata": "JU7285",
            "icao": "ASL7285",
            "codeshared": {
                "airline_name": "alitalia",
                "airline_iata": "az",
                "airline_icao": "aza",
                "flight_number": "77",
                "flight_iata": "az77",
                "flight_icao": "aza77"
            }
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": day2,
        "flight_status": "scheduled",
        "departure": {
            "airport": "El Prat De Llobregat",
            "timezone": "Europe/Madrid",
            "iata": "BCN",
            "icao": "LEBL",
            "terminal": "1",
            "gate": "660",
            "delay": null,
            "scheduled": day2+"T12:15:00+00:00",
            "estimated": day2+"T12:15:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Leonardo Da Vinci (Fiumicino)",
            "timezone": "Europe/Rome",
            "iata": "FCO",
            "icao": "LIRF",
            "terminal": "3",
            "gate": null,
            "baggage": "7",
            "delay": null,
            "scheduled": day2+"T14:05:00+00:00",
            "estimated": day2+"T14:05:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Bulgaria Air",
            "iata": "FB",
            "icao": "LZB"
        },
        "flight": {
            "number": "1730",
            "iata": "FB1730",
            "icao": "LZB1730",
            "codeshared": {
                "airline_name": "alitalia",
                "airline_iata": "az",
                "airline_icao": "aza",
                "flight_number": "77",
                "flight_iata": "az77",
                "flight_icao": "aza77"
            }
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": day2,
        "flight_status": "scheduled",
        "departure": {
            "airport": "El Prat De Llobregat",
            "timezone": "Europe/Madrid",
            "iata": "BCN",
            "icao": "LEBL",
            "terminal": "1",
            "gate": "660",
            "delay": null,
            "scheduled": day2+"T12:15:00+00:00",
            "estimated": day2+"T12:15:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Leonardo Da Vinci (Fiumicino)",
            "timezone": "Europe/Rome",
            "iata": "FCO",
            "icao": "LIRF",
            "terminal": "3",
            "gate": null,
            "baggage": "7",
            "delay": null,
            "scheduled": day2+"T14:05:00+00:00",
            "estimated": day2+"T14:05:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Etihad Airways",
            "iata": "EY",
            "icao": "ETD"
        },
        "flight": {
            "number": "2804",
            "iata": "EY2804",
            "icao": "ETD2804",
            "codeshared": {
                "airline_name": "alitalia",
                "airline_iata": "az",
                "airline_icao": "aza",
                "flight_number": "77",
                "flight_iata": "az77",
                "flight_icao": "aza77"
            }
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": day2,
        "flight_status": "scheduled",
        "departure": {
            "airport": "El Prat De Llobregat",
            "timezone": "Europe/Madrid",
            "iata": "BCN",
            "icao": "LEBL",
            "terminal": "1",
            "gate": "660",
            "delay": null,
            "scheduled": day2+"T12:15:00+00:00",
            "estimated": day2+"T12:15:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Leonardo Da Vinci (Fiumicino)",
            "timezone": "Europe/Rome",
            "iata": "FCO",
            "icao": "LIRF",
            "terminal": "3",
            "gate": null,
            "baggage": "7",
            "delay": null,
            "scheduled": day2+"T14:05:00+00:00",
            "estimated": day2+"T14:05:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Delta Air Lines",
            "iata": "DL",
            "icao": "DAL"
        },
        "flight": {
            "number": "6590",
            "iata": "DL6590",
            "icao": "DAL6590",
            "codeshared": {
                "airline_name": "alitalia",
                "airline_iata": "az",
                "airline_icao": "aza",
                "flight_number": "77",
                "flight_iata": "az77",
                "flight_icao": "aza77"
            }
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": day2,
        "flight_status": "scheduled",
        "departure": {
            "airport": "El Prat De Llobregat",
            "timezone": "Europe/Madrid",
            "iata": "BCN",
            "icao": "LEBL",
            "terminal": "1",
            "gate": "660",
            "delay": null,
            "scheduled": day2+"T12:15:00+00:00",
            "estimated": day2+"T12:15:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Leonardo Da Vinci (Fiumicino)",
            "timezone": "Europe/Rome",
            "iata": "FCO",
            "icao": "LIRF",
            "terminal": "3",
            "gate": null,
            "baggage": "7",
            "delay": null,
            "scheduled": day2+"T14:05:00+00:00",
            "estimated": day2+"T14:05:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Aerolineas Argentinas",
            "iata": "AR",
            "icao": "ARG"
        },
        "flight": {
            "number": "7227",
            "iata": "AR7227",
            "icao": "ARG7227",
            "codeshared": {
                "airline_name": "alitalia",
                "airline_iata": "az",
                "airline_icao": "aza",
                "flight_number": "77",
                "flight_iata": "az77",
                "flight_icao": "aza77"
            }
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": day2,
        "flight_status": "scheduled",
        "departure": {
            "airport": "El Prat De Llobregat",
            "timezone": "Europe/Madrid",
            "iata": "BCN",
            "icao": "LEBL",
            "terminal": "1",
            "gate": "B25",
            "delay": null,
            "scheduled": day2+"T12:05:00+00:00",
            "estimated": day2+"T12:05:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Norte Los Rodeos",
            "timezone": "Atlantic/Canary",
            "iata": "TFN",
            "icao": "GCXO",
            "terminal": null,
            "gate": null,
            "baggage": "4",
            "delay": null,
            "scheduled": day2+"T14:35:00+00:00",
            "estimated": day2+"T14:35:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "LATAM Airlines",
            "iata": "LA",
            "icao": "LAN"
        },
        "flight": {
            "number": "5807",
            "iata": "LA5807",
            "icao": "LAN5807",
            "codeshared": {
                "airline_name": "vueling",
                "airline_iata": "vy",
                "airline_icao": "vlg",
                "flight_number": "3216",
                "flight_iata": "vy3216",
                "flight_icao": "vlg3216"
            }
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": day2,
        "flight_status": "scheduled",
        "departure": {
            "airport": "El Prat De Llobregat",
            "timezone": "Europe/Madrid",
            "iata": "BCN",
            "icao": "LEBL",
            "terminal": "1",
            "gate": "A06",
            "delay": null,
            "scheduled": day2+"T12:05:00+00:00",
            "estimated": day2+"T12:05:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Gran Canaria",
            "timezone": "Atlantic/Canary",
            "iata": "LPA",
            "icao": "GCLP",
            "terminal": null,
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": day2+"T14:35:00+00:00",
            "estimated": day2+"T14:35:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "LATAM Airlines",
            "iata": "LA",
            "icao": "LAN"
        },
        "flight": {
            "number": "5783",
            "iata": "LA5783",
            "icao": "LAN5783",
            "codeshared": {
                "airline_name": "vueling",
                "airline_iata": "vy",
                "airline_icao": "vlg",
                "flight_number": "3002",
                "flight_iata": "vy3002",
                "flight_icao": "vlg3002"
            }
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": day1,
        "flight_status": "scheduled",
        "departure": {
            "airport": "Hector Field",
            "timezone": "America/Chicago",
            "iata": "FAR",
            "icao": "KFAR",
            "terminal": null,
            "gate": null,
            "delay": 29,
            "scheduled": day1+"T06:30:00+00:00",
            "estimated": day1+"T06:30:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Bismarck",
            "timezone": "America/Chicago",
            "iata": "BIS",
            "icao": "KBIS",
            "terminal": null,
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": day1+"T07:50:00+00:00",
            "estimated": day1+"T07:50:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Gryphon Airlines",
            "iata": "Y3",
            "icao": "VOS"
        },
        "flight": {
            "number": "620M",
            "iata": "Y3620M",
            "icao": "VOS620M",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": day1,
        "flight_status": "scheduled",
        "departure": {
            "airport": "Hector Field",
            "timezone": "America/Chicago",
            "iata": "FAR",
            "icao": "KFAR",
            "terminal": null,
            "gate": null,
            "delay": 29,
            "scheduled": day1+"T07:00:00+00:00",
            "estimated": day1+"T07:00:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "International",
            "timezone": "America/Chicago",
            "iata": "MOT",
            "icao": "KMOT",
            "terminal": null,
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": day1+"T08:23:00+00:00",
            "estimated": day1+"T08:23:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Nordic Regional Airlines",
            "iata": "N7",
            "icao": "FCM"
        },
        "flight": {
            "number": "00CT",
            "iata": "N700CT",
            "icao": "FCM00CT",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": day1,
        "flight_status": "scheduled",
        "departure": {
            "airport": "Hector Field",
            "timezone": "America/Chicago",
            "iata": "FAR",
            "icao": "KFAR",
            "terminal": null,
            "gate": null,
            "delay": 18,
            "scheduled": day1+"T07:00:00+00:00",
            "estimated": day1+"T07:00:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Tulsa International",
            "timezone": "America/Chicago",
            "iata": "TUL",
            "icao": "KTUL",
            "terminal": null,
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": day1+"T08:52:00+00:00",
            "estimated": day1+"T08:52:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "UPS Airlines",
            "iata": "5X",
            "icao": "UPS"
        },
        "flight": {
            "number": "9874",
            "iata": "5X9874",
            "icao": "UPS9874",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": day1,
        "flight_status": "active",
        "departure": {
            "airport": "Vienna International",
            "timezone": "Europe/Vienna",
            "iata": "VIE",
            "icao": "LOWW",
            "terminal": null,
            "gate": "F17",
            "delay": null,
            "scheduled": day1+"T07:25:00+00:00",
            "estimated": day1+"T07:25:00+00:00",
            "actual": day1+"T07:23:00+00:00",
            "estimated_runway": day1+"T07:23:00+00:00",
            "actual_runway": day1+"T07:23:00+00:00"
        },
        "arrival": {
            "airport": "Alicante El Altet",
            "timezone": "Europe/Madrid",
            "iata": "ALC",
            "icao": "LEAL",
            "terminal": "N",
            "gate": null,
            "baggage": "10B",
            "delay": null,
            "scheduled": day1+"T10:15:00+00:00",
            "estimated": day1+"T10:15:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Laudamotion",
            "iata": "OE",
            "icao": "LDM"
        },
        "flight": {
            "number": "7283",
            "iata": "OE7283",
            "icao": "LDM7283",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": day1,
        "flight_status": "scheduled",
        "departure": {
            "airport": "Faro",
            "timezone": "Europe/Lisbon",
            "iata": "FAO",
            "icao": "LPFR",
            "terminal": null,
            "gate": null,
            "delay": null,
            "scheduled": day1+"T12:50:00+00:00",
            "estimated": day1+"T12:50:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Dublin International",
            "timezone": "Europe/Dublin",
            "iata": "DUB",
            "icao": "EIDW",
            "terminal": "1",
            "gate": "103",
            "baggage": "5",
            "delay": null,
            "scheduled": day1+"T15:45:00+00:00",
            "estimated": day1+"T15:45:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Ryanair",
            "iata": "FR",
            "icao": "RYR"
        },
        "flight": {
            "number": "7035",
            "iata": "FR7035",
            "icao": "RYR7035",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": day1,
        "flight_status": "scheduled",
        "departure": {
            "airport": "Faro",
            "timezone": "Europe/Lisbon",
            "iata": "FAO",
            "icao": "LPFR",
            "terminal": null,
            "gate": null,
            "delay": null,
            "scheduled": day1+"T12:25:00+00:00",
            "estimated": day1+"T12:25:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Leeds/bradford",
            "timezone": "Europe/London",
            "iata": "LBA",
            "icao": "EGNM",
            "terminal": null,
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": day1+"T15:30:00+00:00",
            "estimated": day1+"T15:30:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Jet2",
            "iata": "LS",
            "icao": "EXS"
        },
        "flight": {
            "number": "252",
            "iata": "LS252",
            "icao": "EXS252",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": day1,
        "flight_status": "scheduled",
        "departure": {
            "airport": "Pointe-Noire",
            "timezone": "Africa/Brazzaville",
            "iata": "PNR",
            "icao": "FCPP",
            "terminal": null,
            "gate": null,
            "delay": null,
            "scheduled": day1+"T08:00:00+00:00",
            "estimated": day1+"T08:00:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Maya Maya",
            "timezone": "Africa/Brazzaville",
            "iata": "BZV",
            "icao": "FCBB",
            "terminal": null,
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": day1+"T08:55:00+00:00",
            "estimated": day1+"T08:55:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Trans Air Congo",
            "iata": "Q8",
            "icao": "TSG"
        },
        "flight": {
            "number": "201",
            "iata": "Q8201",
            "icao": "TSG201",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": day1,
        "flight_status": "scheduled",
        "departure": {
            "airport": "Fort Worth Alliance",
            "timezone": "America/Chicago",
            "iata": "AFW",
            "icao": "KAFW",
            "terminal": null,
            "gate": null,
            "delay": null,
            "scheduled": day1+"T03:00:00+00:00",
            "estimated": day1+"T03:00:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Lubbock Preston Smith International",
            "timezone": "America/Chicago",
            "iata": "LBB",
            "icao": "KLBB",
            "terminal": null,
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": day1+"T05:06:00+00:00",
            "estimated": day1+"T05:06:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Baron Aviation Services",
            "iata": "BVN",
            "icao": "BVN"
        },
        "flight": {
            "number": "8285",
            "iata": "BVN8285",
            "icao": "BVN8285",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": day1,
        "flight_status": "scheduled",
        "departure": {
            "airport": "Taiwan Taoyuan International (Chiang Kai Shek International)",
            "timezone": "Asia/Taipei",
            "iata": "TPE",
            "icao": "RCTP",
            "terminal": null,
            "gate": null,
            "delay": null,
            "scheduled": day1+"T13:20:00+00:00",
            "estimated": day1+"T13:20:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Seoul (Incheon)",
            "timezone": "Asia/Seoul",
            "iata": "ICN",
            "icao": "RKSI",
            "terminal": "2",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": day1+"T16:50:00+00:00",
            "estimated": day1+"T16:50:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Jin Air",
            "iata": "LJ",
            "icao": "JNA"
        },
        "flight": {
            "number": "82",
            "iata": "LJ82",
            "icao": "JNA82",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": day1,
        "flight_status": "active",
        "departure": {
            "airport": "Athens International Airport \"Eleftherios Venizelos\"",
            "timezone": "Europe/Athens",
            "iata": "ATH",
            "icao": "LGAV",
            "terminal": "M",
            "gate": "B23",
            "delay": 4,
            "scheduled": day1+"T08:05:00+00:00",
            "estimated": day1+"T08:05:00+00:00",
            "actual": day1+"T08:09:00+00:00",
            "estimated_runway": day1+"T08:09:00+00:00",
            "actual_runway": day1+"T08:09:00+00:00"
        },
        "arrival": {
            "airport": "Nikos Kazantzakis Airport",
            "timezone": "Europe/Athens",
            "iata": "HER",
            "icao": "LGIR",
            "terminal": null,
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": day1+"T08:55:00+00:00",
            "estimated": day1+"T08:55:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Aegean Airlines",
            "iata": "A3",
            "icao": "AEE"
        },
        "flight": {
            "number": "300",
            "iata": "A3300",
            "icao": "AEE300",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": day1,
        "flight_status": "active",
        "departure": {
            "airport": "Athens International Airport \"Eleftherios Venizelos\"",
            "timezone": "Europe/Athens",
            "iata": "ATH",
            "icao": "LGAV",
            "terminal": "M",
            "gate": "B19",
            "delay": 6,
            "scheduled": day1+"T08:00:00+00:00",
            "estimated": day1+"T08:00:00+00:00",
            "actual": day1+"T08:06:00+00:00",
            "estimated_runway": day1+"T08:06:00+00:00",
            "actual_runway": day1+"T08:06:00+00:00"
        },
        "arrival": {
            "airport": "Samos",
            "timezone": "Europe/Athens",
            "iata": "SMI",
            "icao": "LGSM",
            "terminal": null,
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": day1+"T08:55:00+00:00",
            "estimated": day1+"T08:55:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Aegean Airlines",
            "iata": "A3",
            "icao": "AEE"
        },
        "flight": {
            "number": "240",
            "iata": "A3240",
            "icao": "AEE240",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": day1,
        "flight_status": "cancelled",
        "departure": {
            "airport": "Soekarno-Hatta International",
            "timezone": "Asia/Jakarta",
            "iata": "CGK",
            "icao": "WIII",
            "terminal": null,
            "gate": null,
            "delay": null,
            "scheduled": day1+"T13:30:00+00:00",
            "estimated": day1+"T13:30:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Juanda",
            "timezone": "Asia/Jakarta",
            "iata": "SUB",
            "icao": "WARR",
            "terminal": "1",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": day1+"T15:05:00+00:00",
            "estimated": day1+"T15:05:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Garuda Indonesia",
            "iata": "GA",
            "icao": "GIA"
        },
        "flight": {
            "number": "316",
            "iata": "GA316",
            "icao": "GIA316",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": day1,
        "flight_status": "active",
        "departure": {
            "airport": "Hakodate",
            "timezone": "Asia/Tokyo",
            "iata": "HKD",
            "icao": "RJCH",
            "terminal": null,
            "gate": "5",
            "delay": 2,
            "scheduled": day1+"T13:45:00+00:00",
            "estimated": day1+"T13:45:00+00:00",
            "actual": day1+"T13:47:00+00:00",
            "estimated_runway": day1+"T13:47:00+00:00",
            "actual_runway": day1+"T13:47:00+00:00"
        },
        "arrival": {
            "airport": "Itami",
            "timezone": "Asia/Tokyo",
            "iata": "ITM",
            "icao": "RJOO",
            "terminal": null,
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": day1+"T15:25:00+00:00",
            "estimated": day1+"T15:25:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "JAL",
            "iata": "JL",
            "icao": "JAL"
        },
        "flight": {
            "number": "2124",
            "iata": "JL2124",
            "icao": "JAL2124",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": day1,
        "flight_status": "active",
        "departure": {
            "airport": "Itami",
            "timezone": "Asia/Tokyo",
            "iata": "ITM",
            "icao": "RJOO",
            "terminal": null,
            "gate": "18",
            "delay": null,
            "scheduled": day1+"T15:20:00+00:00",
            "estimated": day1+"T15:20:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Haneda Airport",
            "timezone": "Asia/Tokyo",
            "iata": "HND",
            "icao": "RJTT",
            "terminal": "1",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": day1+"T16:40:00+00:00",
            "estimated": day1+"T16:40:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "JAL",
            "iata": "JL",
            "icao": "JAL"
        },
        "flight": {
            "number": "124",
            "iata": "JL124",
            "icao": "JAL124",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": day1,
        "flight_status": "scheduled",
        "departure": {
            "airport": "Timmins",
            "timezone": "America/Toronto",
            "iata": "YTS",
            "icao": "CYTS",
            "terminal": null,
            "gate": null,
            "delay": null,
            "scheduled": day1+"T08:00:00+00:00",
            "estimated": day1+"T08:00:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Moosonee",
            "timezone": "America/Toronto",
            "iata": "YMO",
            "icao": "CYMO",
            "terminal": null,
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": day1+"T10:05:00+00:00",
            "estimated": day1+"T10:05:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Air Creebec",
            "iata": "YN",
            "icao": "CRQ"
        },
        "flight": {
            "number": "641",
            "iata": "YN641",
            "icao": "CRQ641",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": day1,
        "flight_status": "scheduled",
        "departure": {
            "airport": "Timmins",
            "timezone": "America/Toronto",
            "iata": "YTS",
            "icao": "CYTS",
            "terminal": null,
            "gate": null,
            "delay": null,
            "scheduled": day1+"T08:00:00+00:00",
            "estimated": day1+"T08:00:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Moosonee",
            "timezone": "America/Toronto",
            "iata": "YMO",
            "icao": "CYMO",
            "terminal": null,
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": day1+"T10:05:00+00:00",
            "estimated": day1+"T10:05:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Air Creebec",
            "iata": "YN",
            "icao": "CRQ"
        },
        "flight": {
            "number": "650",
            "iata": "YN650",
            "icao": "CRQ650",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": day1,
        "flight_status": "scheduled",
        "departure": {
            "airport": "Frankfurt International Airport",
            "timezone": "Europe/Berlin",
            "iata": "FRA",
            "icao": "EDDF",
            "terminal": "1",
            "gate": "A17",
            "delay": null,
            "scheduled": day1+"T14:05:00+00:00",
            "estimated": day1+"T14:05:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Vilnius",
            "timezone": "Europe/Vilnius",
            "iata": "VNO",
            "icao": "EYVI",
            "terminal": null,
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": day1+"T17:05:00+00:00",
            "estimated": day1+"T17:05:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Lufthansa",
            "iata": "LH",
            "icao": "DLH"
        },
        "flight": {
            "number": "896",
            "iata": "LH896",
            "icao": "DLH896",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": day1,
        "flight_status": "scheduled",
        "departure": {
            "airport": "Frankfurt International Airport",
            "timezone": "Europe/Berlin",
            "iata": "FRA",
            "icao": "EDDF",
            "terminal": "1",
            "gate": "B4",
            "delay": null,
            "scheduled": day1+"T14:05:00+00:00",
            "estimated": day1+"T14:05:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Keflavik International",
            "timezone": "Atlantic/Reykjavik",
            "iata": "KEF",
            "icao": "BIKF",
            "terminal": null,
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": day1+"T15:40:00+00:00",
            "estimated": day1+"T15:40:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Icelandair",
            "iata": "FI",
            "icao": "ICE"
        },
        "flight": {
            "number": "521",
            "iata": "FI521",
            "icao": "ICE521",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": day1,
        "flight_status": "scheduled",
        "departure": {
            "airport": "Frankfurt International Airport",
            "timezone": "Europe/Berlin",
            "iata": "FRA",
            "icao": "EDDF",
            "terminal": "1",
            "gate": "B27",
            "delay": null,
            "scheduled": day1+"T14:00:00+00:00",
            "estimated": day1+"T14:00:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Heathrow",
            "timezone": "Europe/London",
            "iata": "LHR",
            "icao": "EGLL",
            "terminal": "2",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": day1+"T14:40:00+00:00",
            "estimated": day1+"T14:40:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Lufthansa",
            "iata": "LH",
            "icao": "DLH"
        },
        "flight": {
            "number": "908",
            "iata": "LH908",
            "icao": "DLH908",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": day1,
        "flight_status": "scheduled",
        "departure": {
            "airport": "Frankfurt International Airport",
            "timezone": "Europe/Berlin",
            "iata": "FRA",
            "icao": "EDDF",
            "terminal": "1",
            "gate": "A22",
            "delay": null,
            "scheduled": day1+"T14:00:00+00:00",
            "estimated": day1+"T14:00:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Findel",
            "timezone": "Europe/Luxembourg",
            "iata": "LUX",
            "icao": "ELLX",
            "terminal": null,
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": day1+"T14:40:00+00:00",
            "estimated": day1+"T14:40:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Lufthansa",
            "iata": "LH",
            "icao": "DLH"
        },
        "flight": {
            "number": "394",
            "iata": "LH394",
            "icao": "DLH394",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": day1,
        "flight_status": "scheduled",
        "departure": {
            "airport": "Frankfurt International Airport",
            "timezone": "Europe/Berlin",
            "iata": "FRA",
            "icao": "EDDF",
            "terminal": "1",
            "gate": "A21",
            "delay": null,
            "scheduled": day1+"T14:00:00+00:00",
            "estimated": day1+"T14:00:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "El Prat De Llobregat",
            "timezone": "Europe/Madrid",
            "iata": "BCN",
            "icao": "LEBL",
            "terminal": "1",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": day1+"T16:00:00+00:00",
            "estimated": day1+"T16:00:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Lufthansa",
            "iata": "LH",
            "icao": "DLH"
        },
        "flight": {
            "number": "1134",
            "iata": "LH1134",
            "icao": "DLH1134",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": day1,
        "flight_status": "scheduled",
        "departure": {
            "airport": "Frankfurt International Airport",
            "timezone": "Europe/Berlin",
            "iata": "FRA",
            "icao": "EDDF",
            "terminal": "1",
            "gate": "B20",
            "delay": 10,
            "scheduled": day1+"T14:00:00+00:00",
            "estimated": day1+"T14:00:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Juan Santamaría International",
            "timezone": "America/Costa_Rica",
            "iata": "SJO",
            "icao": "MROC",
            "terminal": "M",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": day1+"T18:10:00+00:00",
            "estimated": day1+"T18:10:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Lufthansa",
            "iata": "LH",
            "icao": "DLH"
        },
        "flight": {
            "number": "518",
            "iata": "LH518",
            "icao": "DLH518",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": day1,
        "flight_status": "scheduled",
        "departure": {
            "airport": "Frankfurt International Airport",
            "timezone": "Europe/Berlin",
            "iata": "FRA",
            "icao": "EDDF",
            "terminal": "1",
            "gate": "A56",
            "delay": null,
            "scheduled": day1+"T14:00:00+00:00",
            "estimated": day1+"T14:00:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Leonardo Da Vinci (Fiumicino)",
            "timezone": "Europe/Rome",
            "iata": "FCO",
            "icao": "LIRF",
            "terminal": "3",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": day1+"T15:50:00+00:00",
            "estimated": day1+"T15:50:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Lufthansa",
            "iata": "LH",
            "icao": "DLH"
        },
        "flight": {
            "number": "236",
            "iata": "LH236",
            "icao": "DLH236",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": day1,
        "flight_status": "scheduled",
        "departure": {
            "airport": "Frankfurt International Airport",
            "timezone": "Europe/Berlin",
            "iata": "FRA",
            "icao": "EDDF",
            "terminal": "1",
            "gate": "A2",
            "delay": null,
            "scheduled": day1+"T14:00:00+00:00",
            "estimated": day1+"T14:00:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Nürnberg",
            "timezone": "Europe/Berlin",
            "iata": "NUE",
            "icao": "EDDN",
            "terminal": null,
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": day1+"T14:40:00+00:00",
            "estimated": day1+"T14:40:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Lufthansa",
            "iata": "LH",
            "icao": "DLH"
        },
        "flight": {
            "number": "144",
            "iata": "LH144",
            "icao": "DLH144",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": day1,
        "flight_status": "scheduled",
        "departure": {
            "airport": "Frankfurt International Airport",
            "timezone": "Europe/Berlin",
            "iata": "FRA",
            "icao": "EDDF",
            "terminal": "1",
            "gate": "A25",
            "delay": null,
            "scheduled": day1+"T14:00:00+00:00",
            "estimated": day1+"T14:00:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Hamburg Airport",
            "timezone": "Europe/Berlin",
            "iata": "HAM",
            "icao": "EDDH",
            "terminal": "2",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": day1+"T15:05:00+00:00",
            "estimated": day1+"T15:05:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Lufthansa",
            "iata": "LH",
            "icao": "DLH"
        },
        "flight": {
            "number": "18",
            "iata": "LH18",
            "icao": "DLH18",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": day1,
        "flight_status": "scheduled",
        "departure": {
            "airport": "Frankfurt International Airport",
            "timezone": "Europe/Berlin",
            "iata": "FRA",
            "icao": "EDDF",
            "terminal": "1",
            "gate": "Z22",
            "delay": 17,
            "scheduled": day1+"T13:55:00+00:00",
            "estimated": day1+"T13:55:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "San Francisco International",
            "timezone": "America/Los_Angeles",
            "iata": "SFO",
            "icao": "KSFO",
            "terminal": "INTL",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": day1+"T16:15:00+00:00",
            "estimated": day1+"T16:15:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "United Airlines",
            "iata": "UA",
            "icao": "UAL"
        },
        "flight": {
            "number": "59",
            "iata": "UA59",
            "icao": "UAL59",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": day1,
        "flight_status": "scheduled",
        "departure": {
            "airport": "Frankfurt International Airport",
            "timezone": "Europe/Berlin",
            "iata": "FRA",
            "icao": "EDDF",
            "terminal": "1",
            "gate": "A18",
            "delay": null,
            "scheduled": day1+"T13:55:00+00:00",
            "estimated": day1+"T13:55:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Francisco Sá Carneiro",
            "timezone": "Europe/Lisbon",
            "iata": "OPO",
            "icao": "LPPR",
            "terminal": null,
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": day1+"T15:40:00+00:00",
            "estimated": day1+"T15:40:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Lufthansa",
            "iata": "LH",
            "icao": "DLH"
        },
        "flight": {
            "number": "1178",
            "iata": "LH1178",
            "icao": "DLH1178",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": day1,
        "flight_status": "scheduled",
        "departure": {
            "airport": "Frankfurt International Airport",
            "timezone": "Europe/Berlin",
            "iata": "FRA",
            "icao": "EDDF",
            "terminal": "1",
            "gate": "Z58",
            "delay": null,
            "scheduled": day1+"T13:55:00+00:00",
            "estimated": day1+"T13:55:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Dublin International",
            "timezone": "Europe/Dublin",
            "iata": "DUB",
            "icao": "EIDW",
            "terminal": "1",
            "gate": "307A",
            "baggage": null,
            "delay": null,
            "scheduled": day1+"T15:00:00+00:00",
            "estimated": day1+"T15:00:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Lufthansa",
            "iata": "LH",
            "icao": "DLH"
        },
        "flight": {
            "number": "980",
            "iata": "LH980",
            "icao": "DLH980",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": day1,
        "flight_status": "scheduled",
        "departure": {
            "airport": "Frankfurt International Airport",
            "timezone": "Europe/Berlin",
            "iata": "FRA",
            "icao": "EDDF",
            "terminal": "1",
            "gate": "A23",
            "delay": null,
            "scheduled": day1+"T13:50:00+00:00",
            "estimated": day1+"T13:50:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Copernicus Airport",
            "timezone": "Europe/Warsaw",
            "iata": "WRO",
            "icao": "EPWR",
            "terminal": null,
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": day1+"T15:00:00+00:00",
            "estimated": day1+"T15:00:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Lufthansa",
            "iata": "LH",
            "icao": "DLH"
        },
        "flight": {
            "number": "1372",
            "iata": "LH1372",
            "icao": "DLH1372",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": day1,
        "flight_status": "scheduled",
        "departure": {
            "airport": "Frankfurt International Airport",
            "timezone": "Europe/Berlin",
            "iata": "FRA",
            "icao": "EDDF",
            "terminal": "1",
            "gate": "A14",
            "delay": null,
            "scheduled": day1+"T13:50:00+00:00",
            "estimated": day1+"T13:50:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Berlin-tegel / Otto Lilienthal",
            "timezone": "Europe/Berlin",
            "iata": "TXL",
            "icao": "EDDT",
            "terminal": "A",
            "gate": "5",
            "baggage": null,
            "delay": null,
            "scheduled": day1+"T15:00:00+00:00",
            "estimated": day1+"T15:00:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Lufthansa",
            "iata": "LH",
            "icao": "DLH"
        },
        "flight": {
            "number": "186",
            "iata": "LH186",
            "icao": "DLH186",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": day1,
        "flight_status": "scheduled",
        "departure": {
            "airport": "Frankfurt International Airport",
            "timezone": "Europe/Berlin",
            "iata": "FRA",
            "icao": "EDDF",
            "terminal": "1",
            "gate": "B54",
            "delay": null,
            "scheduled": day1+"T13:50:00+00:00",
            "estimated": day1+"T13:50:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Golubovci",
            "timezone": "Europe/Podgorica",
            "iata": "TGD",
            "icao": "LYPG",
            "terminal": null,
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": day1+"T15:50:00+00:00",
            "estimated": day1+"T15:50:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Montenegro Airlines",
            "iata": "YM",
            "icao": "MGX"
        },
        "flight": {
            "number": "161",
            "iata": "YM161",
            "icao": "MGX161",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": day1,
        "flight_status": "scheduled",
        "departure": {
            "airport": "Frankfurt International Airport",
            "timezone": "Europe/Berlin",
            "iata": "FRA",
            "icao": "EDDF",
            "terminal": "1",
            "gate": "A20",
            "delay": null,
            "scheduled": day1+"T13:50:00+00:00",
            "estimated": day1+"T13:50:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Bremen",
            "timezone": "Europe/Berlin",
            "iata": "BRE",
            "icao": "EDDW",
            "terminal": "1",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": day1+"T14:45:00+00:00",
            "estimated": day1+"T14:45:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Lufthansa",
            "iata": "LH",
            "icao": "DLH"
        },
        "flight": {
            "number": "354",
            "iata": "LH354",
            "icao": "DLH354",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": day1,
        "flight_status": "scheduled",
        "departure": {
            "airport": "Frankfurt International Airport",
            "timezone": "Europe/Berlin",
            "iata": "FRA",
            "icao": "EDDF",
            "terminal": "1",
            "gate": "A5",
            "delay": null,
            "scheduled": day1+"T13:50:00+00:00",
            "estimated": day1+"T13:50:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Dresden Airport",
            "timezone": "Europe/Berlin",
            "iata": "DRS",
            "icao": "EDDC",
            "terminal": null,
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": day1+"T14:45:00+00:00",
            "estimated": day1+"T14:45:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Lufthansa",
            "iata": "LH",
            "icao": "DLH"
        },
        "flight": {
            "number": "210",
            "iata": "LH210",
            "icao": "DLH210",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": day1,
        "flight_status": "scheduled",
        "departure": {
            "airport": "Frankfurt International Airport",
            "timezone": "Europe/Berlin",
            "iata": "FRA",
            "icao": "EDDF",
            "terminal": "1",
            "gate": "B47",
            "delay": null,
            "scheduled": day1+"T13:45:00+00:00",
            "estimated": day1+"T13:45:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Sabiha Gokcen",
            "timezone": "Europe/Istanbul",
            "iata": "SAW",
            "icao": "LTFJ",
            "terminal": null,
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": day1+"T17:45:00+00:00",
            "estimated": day1+"T17:45:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Turkish Airlines",
            "iata": "TK",
            "icao": "THY"
        },
        "flight": {
            "number": "7735",
            "iata": "TK7735",
            "icao": "THY7735",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": day1,
        "flight_status": "scheduled",
        "departure": {
            "airport": "Frankfurt International Airport",
            "timezone": "Europe/Berlin",
            "iata": "FRA",
            "icao": "EDDF",
            "terminal": "1",
            "gate": "B46",
            "delay": null,
            "scheduled": day1+"T13:45:00+00:00",
            "estimated": day1+"T13:45:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Hong Kong International",
            "timezone": "Asia/Hong_Kong",
            "iata": "HKG",
            "icao": "VHHH",
            "terminal": "1",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": day2+"T06:50:00+00:00",
            "estimated": day2+"T06:50:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Cathay Pacific",
            "iata": "CX",
            "icao": "CPA"
        },
        "flight": {
            "number": "288",
            "iata": "CX288",
            "icao": "CPA288",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": day1,
        "flight_status": "scheduled",
        "departure": {
            "airport": "Frankfurt International Airport",
            "timezone": "Europe/Berlin",
            "iata": "FRA",
            "icao": "EDDF",
            "terminal": "1",
            "gate": "A69",
            "delay": null,
            "scheduled": day1+"T13:40:00+00:00",
            "estimated": day1+"T13:40:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Frederic Chopin",
            "timezone": "Europe/Warsaw",
            "iata": "WAW",
            "icao": "EPWA",
            "terminal": null,
            "gate": null,
            "baggage": "3",
            "delay": null,
            "scheduled": day1+"T15:15:00+00:00",
            "estimated": day1+"T15:15:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Lufthansa",
            "iata": "LH",
            "icao": "DLH"
        },
        "flight": {
            "number": "1348",
            "iata": "LH1348",
            "icao": "DLH1348",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": day1,
        "flight_status": "scheduled",
        "departure": {
            "airport": "Frankfurt International Airport",
            "timezone": "Europe/Berlin",
            "iata": "FRA",
            "icao": "EDDF",
            "terminal": "1",
            "gate": "A64",
            "delay": null,
            "scheduled": day1+"T13:40:00+00:00",
            "estimated": day1+"T13:40:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Cote D'azur International Airport",
            "timezone": "Europe/Paris",
            "iata": "NCE",
            "icao": "LFMN",
            "terminal": "2",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": day1+"T15:10:00+00:00",
            "estimated": day1+"T15:10:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Lufthansa",
            "iata": "LH",
            "icao": "DLH"
        },
        "flight": {
            "number": "1060",
            "iata": "LH1060",
            "icao": "DLH1060",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": day1,
        "flight_status": "scheduled",
        "departure": {
            "airport": "Frankfurt International Airport",
            "timezone": "Europe/Berlin",
            "iata": "FRA",
            "icao": "EDDF",
            "terminal": "1",
            "gate": "B56",
            "delay": null,
            "scheduled": day1+"T13:40:00+00:00",
            "estimated": day1+"T13:40:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Pristina International",
            "timezone": "Europe/Belgrade",
            "iata": "PRN",
            "icao": "BKPR",
            "terminal": null,
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": day1+"T16:00:00+00:00",
            "estimated": day1+"T16:00:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Eurowings",
            "iata": "EW",
            "icao": "EWG"
        },
        "flight": {
            "number": "6613",
            "iata": "EW6613",
            "icao": "EWG6613",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": day1,
        "flight_status": "scheduled",
        "departure": {
            "airport": "Frankfurt International Airport",
            "timezone": "Europe/Berlin",
            "iata": "FRA",
            "icao": "EDDF",
            "terminal": "2",
            "gate": null,
            "delay": null,
            "scheduled": day1+"T13:35:00+00:00",
            "estimated": day1+"T13:35:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Gran Canaria",
            "timezone": "Atlantic/Canary",
            "iata": "LPA",
            "icao": "GCLP",
            "terminal": null,
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": day1+"T17:25:00+00:00",
            "estimated": day1+"T17:25:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "TUIfly",
            "iata": "X3",
            "icao": "TUI"
        },
        "flight": {
            "number": "2258",
            "iata": "X32258",
            "icao": "TUI2258",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": day1,
        "flight_status": "scheduled",
        "departure": {
            "airport": "Frankfurt International Airport",
            "timezone": "Europe/Berlin",
            "iata": "FRA",
            "icao": "EDDF",
            "terminal": "1",
            "gate": "B43",
            "delay": null,
            "scheduled": day1+"T13:30:00+00:00",
            "estimated": day1+"T13:30:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Haneda Airport",
            "timezone": "Asia/Tokyo",
            "iata": "HND",
            "icao": "RJTT",
            "terminal": "3",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": day2+"T07:55:00+00:00",
            "estimated": day2+"T07:55:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "ANA",
            "iata": "NH",
            "icao": "ANA"
        },
        "flight": {
            "number": "204",
            "iata": "NH204",
            "icao": "ANA204",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": day1,
        "flight_status": "scheduled",
        "departure": {
            "airport": "Frankfurt International Airport",
            "timezone": "Europe/Berlin",
            "iata": "FRA",
            "icao": "EDDF",
            "terminal": "1",
            "gate": "B23",
            "delay": 10,
            "scheduled": day1+"T13:30:00+00:00",
            "estimated": day1+"T13:30:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Internacional Benito Juarez",
            "timezone": "America/Mexico_City",
            "iata": "MEX",
            "icao": "MMMX",
            "terminal": "1",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": day1+"T18:30:00+00:00",
            "estimated": day1+"T18:30:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Lufthansa",
            "iata": "LH",
            "icao": "DLH"
        },
        "flight": {
            "number": "498",
            "iata": "LH498",
            "icao": "DLH498",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": day1,
        "flight_status": "scheduled",
        "departure": {
            "airport": "Frankfurt International Airport",
            "timezone": "Europe/Berlin",
            "iata": "FRA",
            "icao": "EDDF",
            "terminal": "1",
            "gate": "A3",
            "delay": null,
            "scheduled": day1+"T13:30:00+00:00",
            "estimated": day1+"T13:30:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Hanover Airport",
            "timezone": "Europe/Berlin",
            "iata": "HAJ",
            "icao": "EDDV",
            "terminal": "A",
            "gate": "5",
            "baggage": null,
            "delay": null,
            "scheduled": day1+"T14:20:00+00:00",
            "estimated": day1+"T14:20:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Lufthansa",
            "iata": "LH",
            "icao": "DLH"
        },
        "flight": {
            "number": "52",
            "iata": "LH52",
            "icao": "DLH52",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": day1,
        "flight_status": "scheduled",
        "departure": {
            "airport": "Frankfurt International Airport",
            "timezone": "Europe/Berlin",
            "iata": "FRA",
            "icao": "EDDF",
            "terminal": "1",
            "gate": "A58",
            "delay": null,
            "scheduled": day1+"T13:25:00+00:00",
            "estimated": day1+"T13:25:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Liszt Ferenc International",
            "timezone": "Europe/Budapest",
            "iata": "BUD",
            "icao": "LHBP",
            "terminal": "2B",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": day1+"T15:00:00+00:00",
            "estimated": day1+"T15:00:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Lufthansa",
            "iata": "LH",
            "icao": "DLH"
        },
        "flight": {
            "number": "1338",
            "iata": "LH1338",
            "icao": "DLH1338",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": day1,
        "flight_status": "scheduled",
        "departure": {
            "airport": "Frankfurt International Airport",
            "timezone": "Europe/Berlin",
            "iata": "FRA",
            "icao": "EDDF",
            "terminal": "1",
            "gate": "A16",
            "delay": null,
            "scheduled": day1+"T13:25:00+00:00",
            "estimated": day1+"T13:25:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Barajas",
            "timezone": "Europe/Madrid",
            "iata": "MAD",
            "icao": "LEMD",
            "terminal": "1",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": day1+"T16:00:00+00:00",
            "estimated": day1+"T16:00:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Lufthansa",
            "iata": "LH",
            "icao": "DLH"
        },
        "flight": {
            "number": "1114",
            "iata": "LH1114",
            "icao": "DLH1114",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": day1,
        "flight_status": "scheduled",
        "departure": {
            "airport": "Frankfurt International Airport",
            "timezone": "Europe/Berlin",
            "iata": "FRA",
            "icao": "EDDF",
            "terminal": "1",
            "gate": "Z50",
            "delay": null,
            "scheduled": day1+"T13:20:00+00:00",
            "estimated": day1+"T13:20:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Chhatrapati Shivaji International (Sahar International)",
            "timezone": "Asia/Kolkata",
            "iata": "BOM",
            "icao": "VABB",
            "terminal": "2",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": day2+"T01:20:00+00:00",
            "estimated": day2+"T01:20:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Lufthansa",
            "iata": "LH",
            "icao": "DLH"
        },
        "flight": {
            "number": "756",
            "iata": "LH756",
            "icao": "DLH756",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": day1,
        "flight_status": "scheduled",
        "departure": {
            "airport": "Frankfurt International Airport",
            "timezone": "Europe/Berlin",
            "iata": "FRA",
            "icao": "EDDF",
            "terminal": "1",
            "gate": "B25",
            "delay": null,
            "scheduled": day1+"T13:20:00+00:00",
            "estimated": day1+"T13:20:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Vancouver International",
            "timezone": "America/Vancouver",
            "iata": "YVR",
            "icao": "CYVR",
            "terminal": "I",
            "gate": "D55",
            "baggage": null,
            "delay": null,
            "scheduled": day1+"T14:50:00+00:00",
            "estimated": day1+"T14:50:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Lufthansa",
            "iata": "LH",
            "icao": "DLH"
        },
        "flight": {
            "number": "492",
            "iata": "LH492",
            "icao": "DLH492",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": day1,
        "flight_status": "scheduled",
        "departure": {
            "airport": "Frankfurt International Airport",
            "timezone": "Europe/Berlin",
            "iata": "FRA",
            "icao": "EDDF",
            "terminal": "1",
            "gate": "B24",
            "delay": null,
            "scheduled": day1+"T13:20:00+00:00",
            "estimated": day1+"T13:20:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Boryspil (Borispol)",
            "timezone": "Europe/Kiev",
            "iata": "KBP",
            "icao": "UKBB",
            "terminal": "D",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": day1+"T16:45:00+00:00",
            "estimated": day1+"T16:45:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Lufthansa",
            "iata": "LH",
            "icao": "DLH"
        },
        "flight": {
            "number": "1494",
            "iata": "LH1494",
            "icao": "DLH1494",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": day1,
        "flight_status": "scheduled",
        "departure": {
            "airport": "Frankfurt International Airport",
            "timezone": "Europe/Berlin",
            "iata": "FRA",
            "icao": "EDDF",
            "terminal": "1",
            "gate": "B22",
            "delay": null,
            "scheduled": day1+"T13:20:00+00:00",
            "estimated": day1+"T13:20:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Indira Gandhi International",
            "timezone": "Asia/Kolkata",
            "iata": "DEL",
            "icao": "VIDP",
            "terminal": "3",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": day2+"T00:55:00+00:00",
            "estimated": day2+"T00:55:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Lufthansa",
            "iata": "LH",
            "icao": "DLH"
        },
        "flight": {
            "number": "760",
            "iata": "LH760",
            "icao": "DLH760",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": day1,
        "flight_status": "scheduled",
        "departure": {
            "airport": "Frankfurt International Airport",
            "timezone": "Europe/Berlin",
            "iata": "FRA",
            "icao": "EDDF",
            "terminal": "1",
            "gate": "Z15",
            "delay": 10,
            "scheduled": day1+"T13:20:00+00:00",
            "estimated": day1+"T13:20:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Newark Liberty International",
            "timezone": "America/New_York",
            "iata": "EWR",
            "icao": "KEWR",
            "terminal": "B",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": day1+"T16:10:00+00:00",
            "estimated": day1+"T16:10:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Lufthansa",
            "iata": "LH",
            "icao": "DLH"
        },
        "flight": {
            "number": "402",
            "iata": "LH402",
            "icao": "DLH402",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": day1,
        "flight_status": "scheduled",
        "departure": {
            "airport": "Frankfurt International Airport",
            "timezone": "Europe/Berlin",
            "iata": "FRA",
            "icao": "EDDF",
            "terminal": "1",
            "gate": "A68",
            "delay": null,
            "scheduled": day1+"T13:15:00+00:00",
            "estimated": day1+"T13:15:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Lisbon Portela",
            "timezone": "Europe/Lisbon",
            "iata": "LIS",
            "icao": "LPPT",
            "terminal": "1",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": day1+"T15:15:00+00:00",
            "estimated": day1+"T15:15:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Lufthansa",
            "iata": "LH",
            "icao": "DLH"
        },
        "flight": {
            "number": "1168",
            "iata": "LH1168",
            "icao": "DLH1168",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": day1,
        "flight_status": "scheduled",
        "departure": {
            "airport": "Frankfurt International Airport",
            "timezone": "Europe/Berlin",
            "iata": "FRA",
            "icao": "EDDF",
            "terminal": "1",
            "gate": "A26",
            "delay": null,
            "scheduled": day1+"T13:15:00+00:00",
            "estimated": day1+"T13:15:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Marco Polo",
            "timezone": "Europe/Rome",
            "iata": "VCE",
            "icao": "LIPZ",
            "terminal": null,
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": day1+"T14:35:00+00:00",
            "estimated": day1+"T14:35:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Lufthansa",
            "iata": "LH",
            "icao": "DLH"
        },
        "flight": {
            "number": "326",
            "iata": "LH326",
            "icao": "DLH326",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": day1,
        "flight_status": "scheduled",
        "departure": {
            "airport": "Frankfurt International Airport",
            "timezone": "Europe/Berlin",
            "iata": "FRA",
            "icao": "EDDF",
            "terminal": "1",
            "gate": "A13",
            "delay": null,
            "scheduled": day1+"T13:10:00+00:00",
            "estimated": day1+"T13:10:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Son Sant Joan Airport",
            "timezone": "Europe/Madrid",
            "iata": "PMI",
            "icao": "LEPA",
            "terminal": null,
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": day1+"T15:15:00+00:00",
            "estimated": day1+"T15:15:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Lufthansa",
            "iata": "LH",
            "icao": "DLH"
        },
        "flight": {
            "number": "1158",
            "iata": "LH1158",
            "icao": "DLH1158",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": day1,
        "flight_status": "scheduled",
        "departure": {
            "airport": "Frankfurt International Airport",
            "timezone": "Europe/Berlin",
            "iata": "FRA",
            "icao": "EDDF",
            "terminal": "1",
            "gate": "A66",
            "delay": null,
            "scheduled": day1+"T13:10:00+00:00",
            "estimated": day1+"T13:10:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Arlanda",
            "timezone": "Europe/Stockholm",
            "iata": "ARN",
            "icao": "ESSA",
            "terminal": "5",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": day1+"T15:15:00+00:00",
            "estimated": day1+"T15:15:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Lufthansa",
            "iata": "LH",
            "icao": "DLH"
        },
        "flight": {
            "number": "806",
            "iata": "LH806",
            "icao": "DLH806",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": day1,
        "flight_status": "scheduled",
        "departure": {
            "airport": "Grand Bahama International",
            "timezone": "America/Nassau",
            "iata": "FPO",
            "icao": "MYGF",
            "terminal": null,
            "gate": null,
            "delay": null,
            "scheduled": day1+"T08:00:00+00:00",
            "estimated": day1+"T08:00:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Nassau International",
            "timezone": "America/Nassau",
            "iata": "NAS",
            "icao": "MYNN",
            "terminal": "A",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": day1+"T08:35:00+00:00",
            "estimated": day1+"T08:35:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Western Air",
            "iata": null,
            "icao": "WST"
        },
        "flight": {
            "number": "702",
            "iata": null,
            "icao": "WST702",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": day1,
        "flight_status": "scheduled",
        "departure": {
            "airport": "Grand Bahama International",
            "timezone": "America/Nassau",
            "iata": "FPO",
            "icao": "MYGF",
            "terminal": null,
            "gate": null,
            "delay": null,
            "scheduled": day1+"T07:45:00+00:00",
            "estimated": day1+"T07:45:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Nassau International",
            "timezone": "America/Nassau",
            "iata": "NAS",
            "icao": "MYNN",
            "terminal": "A",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": day1+"T08:30:00+00:00",
            "estimated": day1+"T08:30:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Bahamasair",
            "iata": "UP",
            "icao": "BHS"
        },
        "flight": {
            "number": "316",
            "iata": "UP316",
            "icao": "BHS316",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    }
]