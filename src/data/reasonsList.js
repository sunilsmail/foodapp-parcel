const reasonsList = [
    {
        "facilityServiceId": 26,
        "facilityTestType": "COVID INFECTION TEST",
        "facilityTestTypeValue": "COVID-19 or COVID-19/Flu Test",
        "testDesc": "COVID-19: This swab detects whether you currently have an active COVID-19 infection. A diagnosis can guide you and your doctor or healthcare provider to make an informed decision about self-isolating to protect your family and friends.<br>COVID-19/Flu Test: This swab detects whether you currently have an active COVID-19 infection and the influenza A and B viruses.",
        "precedence": 1,
        "serviceRequestor": null,
        "activeInd": true,
        "skipInsurance": false,
        "deeplinkReason": "CV19",
        "children": [

        ]
    },
    {
        "facilityServiceId": 25,
        "facilityTestType": "COVID ANTIBODY TEST",
        "facilityTestTypeValue": "COVID-19 Antibody Test",
        "testDesc": "This blood test detects antibodies that are the result of past or recent exposure to COVID-19, also known as the novel coronavirus. Test results may help identify if you have developed an immune response to this virus and thus may be in the process of or have overcome a COVID-19 infection, whether or not you have had symptoms.",
        "precedence": 2,
        "serviceRequestor": null,
        "activeInd": true,
        "skipInsurance": false,
        "deeplinkReason": "CVAB",
        "children": [

        ]
    },
    {
        "facilityServiceId": 2,
        "facilityTestType": "Employer Drug and Alcohol",
        "facilityTestTypeValue": "Employer Drug and Alcohol",
        "testDesc": "Select this option if your employer ordered a drug and alcohol test for you.",
        "precedence": 3,
        "serviceRequestor": "EMPLOYER",
        "activeInd": true,
        "skipInsurance": true,
        "deeplinkReason": "EDA",
        "children": [
            {
                "facilityServiceId": 12,
                "facilityTestType": "ELECTRONIC CFF",
                "facilityTestTypeValue": "Electronic Order",
                "testDesc": "Select this option if you were NOT provided a multi-part paper form for drug testing.",
                "precedence": 1,
                "serviceRequestor": null,
                "activeInd": false,
                "skipInsurance": true,
                "deeplinkReason": "EO"
            },
            {
                "facilityServiceId": 18,
                "facilityTestType": "SAP (NON-DOT) COLLECTIONS",
                "facilityTestTypeValue": "Urine",
                "testDesc": "Detects the presence of drugs using a urine sample. Typically used for pre-employment, random or post-accident testing. Donor provided paper order form.",
                "precedence": 2,
                "serviceRequestor": null,
                "activeInd": true,
                "skipInsurance": true,
                "deeplinkReason": "Urine"
            },
            {
                "facilityServiceId": 20,
                "facilityTestType": "NIDA (DOT) COLLECTIONS",
                "facilityTestTypeValue": "Urine - Federally mandated",
                "testDesc": "For employees covered under U.S. Department of Transportation (DOT), Health & Human Services (HHS), and Nuclear Regulatory Commission (NRC) workforce drug testing programs.",
                "precedence": 3,
                "serviceRequestor": null,
                "activeInd": true,
                "skipInsurance": true,
                "deeplinkReason": "UFM"
            },
            {
                "facilityServiceId": 7,
                "facilityTestType": "NETWORK BREATH",
                "facilityTestTypeValue": "Urine - Observed",
                "testDesc": "Not commonly selected by donors. Observed collections are typically required for Department of Transportation (DOT) testing, return to duty, follow-up testing or in instances where something atypical occurs during standard drug screen collection.",
                "precedence": 4,
                "serviceRequestor": null,
                "activeInd": true,
                "skipInsurance": true,
                "deeplinkReason": "UO"
            },
            {
                "facilityServiceId": 8,
                "facilityTestType": "URINE POCT",
                "facilityTestTypeValue": "Urine - Express Results<sup>TM</sup>  Online",
                "testDesc": "Not commonly selected by donors, unless specifically directed by their employer. Donors likely should not choose this option.",
                "precedence": 5,
                "serviceRequestor": null,
                "activeInd": true,
                "skipInsurance": true,
                "deeplinkReason": "UER"
            },
            {
                "facilityServiceId": 9,
                "facilityTestType": "ORAL FLUID COLLECTIONS",
                "facilityTestTypeValue": "Oral Fluid",
                "testDesc": "Detects the presence of drugs using an oral fluid sample.",
                "precedence": 6,
                "serviceRequestor": null,
                "activeInd": true,
                "skipInsurance": true,
                "deeplinkReason": "OF"
            },
            {
                "facilityServiceId": 10,
                "facilityTestType": "HAIR COLLECTIONS",
                "facilityTestTypeValue": "Hair",
                "testDesc": "Detects the presence of drugs using a hair sample.",
                "precedence": 7,
                "serviceRequestor": null,
                "activeInd": true,
                "skipInsurance": true,
                "deeplinkReason": "Hair"
            },
            {
                "facilityServiceId": 11,
                "facilityTestType": "ELECTRONIC BREATH ALCOHOL",
                "facilityTestTypeValue": "Breath Alcohol",
                "testDesc": "Detects the presence of alcohol using a breathalyzer.",
                "precedence": 8,
                "serviceRequestor": null,
                "activeInd": true,
                "skipInsurance": true,
                "deeplinkReason": "BA"
            }
        ]
    },
    {
        "facilityServiceId": 3,
        "facilityTestType": "BLUEPRINT FOR WELLNESS",
        "facilityTestTypeValue": "Employer Health and Wellness",
        "testDesc": "Employer or health plan sponsored health screening.",
        "precedence": 4,
        "serviceRequestor": null,
        "activeInd": true,
        "skipInsurance": false,
        "deeplinkReason": "EHW",
        "children": [

        ]
    },
    {
        "facilityServiceId": 4,
        "facilityTestType": "Glucose",
        "facilityTestTypeValue": "Glucose",
        "testDesc": "Select this option to let us know your specific glucose testing need.",
        "precedence": 5,
        "serviceRequestor": "GLUCOSE",
        "activeInd": true,
        "skipInsurance": false,
        "deeplinkReason": "GLC",
        "children": [
            {
                "facilityServiceId": 16,
                "facilityTestType": "PHLEBOTOMY",
                "facilityTestTypeValue": "Glucose (most common)",
                "testDesc": "This is a typical 15-minute draw to determine your blood sugar (glucose) levels.",
                "precedence": 1,
                "serviceRequestor": null,
                "activeInd": true,
                "skipInsurance": false,
                "deeplinkReason": "GMC"
            },
            {
                "facilityServiceId": 15,
                "facilityTestType": "GLUCOSE TOLERANCE",
                "facilityTestTypeValue": "Glucose Tolerance (1-3 hours) ",
                "testDesc": "Determines your blood sugar (glucose) levels taken at timed intervals over 1-3 hours to screen for diabetes, prediabetes, and gestational diabetes.",
                "precedence": 2,
                "serviceRequestor": null,
                "activeInd": true,
                "skipInsurance": false,
                "deeplinkReason": "GT"
            }
        ]
    },
    {
        "facilityServiceId": 6,
        "facilityTestType": "PHLEBOTOMY",
        "facilityTestTypeValue": "Purchased a test from Quest",
        "testDesc": "Select this option if you have purchased a test from Quest.",
        "precedence": 6,
        "serviceRequestor": "PURCHASETEST",
        "activeInd": true,
        "skipInsurance": true,
        "deeplinkReason": "PQD",
        "children": [

        ]
    },
    {
        "facilityServiceId": 5,
        "facilityTestType": "T-SPOT.TB TEST",
        "facilityTestTypeValue": "T-SPOT.<i>TB</i> test (tuberculosis)",
        "testDesc": "T-SPOT.TB test is a blood test for tuberculosis (TB) screening performed in one visit, using one blood collection tube.",
        "precedence": 7,
        "serviceRequestor": null,
        "activeInd": true,
        "skipInsurance": false,
        "deeplinkReason": "TSPOT",
        "children": [

        ]
    },
    {
        "facilityServiceId": 36,
        "facilityTestType": "PFIZER COVID COUGH TEST",
        "facilityTestTypeValue": "Pfizer Covid Cough Test",
        "testDesc": "Pfizer Covid Cought Test",
        "precedence": 8,
        "serviceRequestor": null,
        "activeInd": false,
        "skipInsurance": true,
        "deeplinkReason": "COUGH",
        "children": [

        ]
    },
    {
        "facilityServiceId": 37,
        "facilityTestType": "Q-NATAL",
        "facilityTestTypeValue": "CA Prenatal Screen / GDSP cfDNA Panel",
        "testDesc": "This prenatal cell-free DNA (cfDNA) screening test is for California pregnant individuals only who are participating in the California Prenatal Program. cfDNA is a screening test ordered by your physician for the common chromosomal conditions of trisomy 21, trisomy 18, and trisomy 13, with the option to learn the sex of the fetus starting at 10 weeks of gestation.",
        "precedence": 9,
        "serviceRequestor": null,
        "activeInd": true,
        "skipInsurance": false,
        "deeplinkReason": "QNTL",
        "children": [

        ]
    },
    {
        "facilityServiceId": 28,
        "facilityTestType": "ASYMPTOMATIC COVID TEST",
        "facilityTestTypeValue": "Asymptomatic Covid Test",
        "testDesc": "Asymptomatic Covid Testing tool tip",
        "precedence": 9,
        "serviceRequestor": null,
        "activeInd": false,
        "skipInsurance": false,
        "deeplinkReason": "CVASMP",
        "children": [

        ]
    },
    {
        "facilityServiceId": 29,
        "facilityTestType": "ASYMPTOMATIC PCR TEST",
        "facilityTestTypeValue": "Asymptomatic PCR Test",
        "testDesc": "Asymptomatic PCR Testing tool tip",
        "precedence": 10,
        "serviceRequestor": null,
        "activeInd": false,
        "skipInsurance": false,
        "deeplinkReason": "APCR",
        "children": [

        ]
    },
    {
        "facilityServiceId": 32,
        "facilityTestType": "KIT COLLECTION",
        "facilityTestTypeValue": "Galleri Test",
        "testDesc": "Grails Screening tool tip",
        "precedence": 12,
        "serviceRequestor": null,
        "activeInd": false,
        "skipInsurance": true,
        "deeplinkReason": "GALLERI",
        "children": [

        ]
    },
    {
        "facilityServiceId": 31,
        "facilityTestType": "OSTEO TEST",
        "facilityTestTypeValue": "Osteoporosis Screening",
        "testDesc": "Osteoporosis Screening tool tip",
        "precedence": 13,
        "serviceRequestor": null,
        "activeInd": false,
        "skipInsurance": true,
        "deeplinkReason": "OSTEO",
        "children": [

        ]
    },
    {
        "facilityServiceId": 30,
        "facilityTestType": "DRS TEST",
        "facilityTestTypeValue": "Diabetic Retinopathy Screening",
        "testDesc": "Diabetic Retinopathy Screening tool tip",
        "precedence": 14,
        "serviceRequestor": null,
        "activeInd": false,
        "skipInsurance": false,
        "deeplinkReason": "DRS",
        "children": [

        ]
    },
    {
        "facilityServiceId": 34,
        "facilityTestType": "KIT COLLECTION",
        "facilityTestTypeValue": "Shield by Guardant Health",
        "testDesc": "Guardant Testing tool tip",
        "precedence": 16,
        "serviceRequestor": null,
        "activeInd": false,
        "skipInsurance": true,
        "deeplinkReason": "GUARDANT",
        "children": [

        ]
    },
    {
        "facilityServiceId": 33,
        "facilityTestType": "PHLEBOTOMY",
        "facilityTestTypeValue": "Specimen Pickup/Dropoff",
        "testDesc": "Use this selection if you need to pick up supplies to collect a sample at home (such as a urine or stool sample), or if you are dropping off a sample that you collected at home that was ordered by your doctor.",
        "precedence": 17,
        "serviceRequestor": null,
        "activeInd": true,
        "skipInsurance": false,
        "deeplinkReason": "SPD",
        "children": [

        ]
    },
    {
        "facilityServiceId": 35,
        "facilityTestType": "SLEEP APNEA KIT",
        "facilityTestTypeValue": "Sleep Apnea Kit",
        "testDesc": "Sleep Apnea Kit Test",
        "precedence": 18,
        "serviceRequestor": null,
        "activeInd": false,
        "skipInsurance": true,
        "deeplinkReason": "SLEEPAPNEA",
        "children": [

        ]
    },
    {
        "facilityServiceId": 38,
        "facilityTestType": "H-PYLORI",
        "facilityTestTypeValue": "Breath Test <i>(H. pylori)</i>",
        "testDesc": "Select this option if you have a sample collection order for Helicobacter pylori, Urea Breath Test, TC14839. Select this appointment option whether you have the breath collection alone or with additional sample collection requests.",
        "precedence": 19,
        "serviceRequestor": null,
        "activeInd": true,
        "skipInsurance": false,
        "deeplinkReason": "HPYL",
        "children": [

        ]
    },
    {
        "facilityServiceId": 39,
        "facilityTestType": "PHLEBOTOMY",
        "facilityTestTypeValue": "Routine Labwork",
        "testDesc": "google fitbit - 'Routine Labwork'",
        "precedence": 20,
        "serviceRequestor": null,
        "activeInd": false,
        "skipInsurance": true,
        "deeplinkReason": "RTLW",
        "children": [

        ]
    },
    {
        "facilityServiceId": 1,
        "facilityTestType": "PHLEBOTOMY",
        "facilityTestTypeValue": "All Other Tests",
        "testDesc": "Select this option for the majority of your testing needs that are not listed below.",
        "precedence": 50,
        "serviceRequestor": null,
        "activeInd": true,
        "skipInsurance": false,
        "deeplinkReason": "OTHR",
        "children": [

        ]
    }
];

export default reasonsList;