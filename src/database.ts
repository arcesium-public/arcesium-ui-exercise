import { WireDetail } from './api';

let currentWires: WireDetail[] = [
    {
      "wireId": 232,
      "category": "OTC_Settlement",
      "wireDate": "2016-09-14",
      "valueDate": "2016-09-21",
      "currency": "USD",
      "amount": 220000,
      "sourceEntity": "OUTSIDEWIRES",
      "sourceCompany": "OUTSIDEWIRES",
      "sourceAccountName": "HSBC USD",
      "sourceAccountNumber": "145697403670",
      "destinationEntity": "MACRO PORT",
      "destinationCompany": "Demo Master Fund",
      "destinationAccountName": "HSBC USD",
      "destinationAccountNumber": "251173872003",
      "statusCode": "PENDING_APPROVAL",
      "subject": "Test Transfer 1",
      "createdBy": "nparks",
      "reviewer": "mwheatley",
      "signatory": "",
      "comments": [
        {
          "name": "kpinto",
          "timestamp": "2016-09-14T04:05:07.429Z",
          "comment": "Amount reset"
        },
        {
          "name": "gharvin",
          "timestamp": "2016-09-14T04:39:42.322Z",
          "comment": "Amount modified"
        },
        {
          "name": "oardon",
          "timestamp": "2016-09-14T05:30:05.157Z",
          "comment": "Subject double checked"
        }
      ]
    },
    {
      "wireId": 231,
      "category": "OTC_Settlement",
      "wireDate": "2016-09-14",
      "valueDate": "2016-09-21",
      "currency": "USD",
      "amount": 571000,
      "sourceEntity": "OUTSIDEWIRES",
      "sourceCompany": "OUTSIDEWIRES",
      "sourceAccountName": "Credit Suisse USD",
      "sourceAccountNumber": "157314371826",
      "destinationEntity": "MACRO PORT",
      "destinationCompany": "Demo Master Fund",
      "destinationAccountName": "Credit Suisse USD",
      "destinationAccountNumber": "260674935620",
      "statusCode": "PENDING_APPROVAL",
      "subject": "Test Transfer 1",
      "createdBy": "sweyand",
      "reviewer": "gharvin",
      "signatory": "",
      "comments": [
        {
          "name": "vharryman",
          "timestamp": "2016-09-14T04:11:35.497Z",
          "comment": "Destination reviewed"
        },
        {
          "name": "ahedley",
          "timestamp": "2016-09-14T05:12:44.311Z",
          "comment": "Source reviewed"
        },
        {
          "name": "lraskin",
          "timestamp": "2016-09-14T05:31:51.744Z",
          "comment": "Source reset"
        }
      ]
    },
    {
      "wireId": 230,
      "category": "OTC_Settlement",
      "wireDate": "2016-09-14",
      "valueDate": "2016-09-21",
      "currency": "USD",
      "amount": 673000,
      "sourceEntity": "OUTSIDEWIRES",
      "sourceCompany": "OUTSIDEWIRES",
      "sourceAccountName": "JPMorgan Chase USD",
      "sourceAccountNumber": "207642345774",
      "destinationEntity": "MACRO PORT",
      "destinationCompany": "Demo Master Fund",
      "destinationAccountName": "JPMorgan Chase USD",
      "destinationAccountNumber": "262E1744932",
      "statusCode": "PENDING_APPROVAL",
      "subject": "Test Transfer 1",
      "createdBy": "slonzo",
      "reviewer": "dgrier",
      "signatory": "",
      "comments": [
        {
          "name": "kpinto",
          "timestamp": "2016-09-14T04:16:36.140Z",
          "comment": "Account verified"
        },
        {
          "name": "mwheatley",
          "timestamp": "2016-09-14T04:23:33.200Z",
          "comment": "Subject changed"
        },
        {
          "name": "mstender",
          "timestamp": "2016-09-14T04:40:33.206Z",
          "comment": "Category changed"
        }
      ]
    },
    {
      "wireId": 229,
      "category": "OTC_Settlement",
      "wireDate": "2016-09-14",
      "valueDate": "2016-09-21",
      "currency": "USD",
      "amount": 560000,
      "sourceEntity": "OUTSIDEWIRES",
      "sourceCompany": "OUTSIDEWIRES",
      "sourceAccountName": "Barclays Capital USD",
      "sourceAccountNumber": "93917396261",
      "destinationEntity": "MACRO PORT",
      "destinationCompany": "Demo Master Fund",
      "destinationAccountName": "Barclays Capital USD",
      "destinationAccountNumber": "23A881277253",
      "statusCode": "PENDING_APPROVAL",
      "subject": "Test Transfer 1",
      "createdBy": "iazevedo",
      "reviewer": "ecofield",
      "signatory": "",
      "comments": [
        {
          "name": "zbrabham",
          "timestamp": "2016-09-14T05:11:29.072Z",
          "comment": "Category modified"
        },
        {
          "name": "lraskin",
          "timestamp": "2016-09-14T05:12:59.723Z",
          "comment": "Account confirmed"
        },
        {
          "name": "sadelson",
          "timestamp": "2016-09-14T05:28:40.476Z",
          "comment": "Account confirmed"
        }
      ]
    },
    {
      "wireId": 228,
      "category": "OTC_Settlement",
      "wireDate": "2016-09-14",
      "valueDate": "2016-09-21",
      "currency": "USD",
      "amount": 423000,
      "sourceEntity": "OUTSIDEWIRES",
      "sourceCompany": "OUTSIDEWIRES",
      "sourceAccountName": "JPMorgan Chase USD",
      "sourceAccountNumber": "89354550128",
      "destinationEntity": "MACRO PORT",
      "destinationCompany": "Demo Master Fund",
      "destinationAccountName": "JPMorgan Chase USD",
      "destinationAccountNumber": "135B10999070",
      "statusCode": "PENDING_APPROVAL",
      "subject": "Test Transfer 1",
      "createdBy": "iazevedo",
      "reviewer": "dbarcelo",
      "signatory": "",
      "comments": [
        {
          "name": "taikins",
          "timestamp": "2016-09-14T04:23:32.329Z",
          "comment": "Destination double checked"
        },
        {
          "name": "lcaswell",
          "timestamp": "2016-09-14T04:47:59.902Z",
          "comment": "Destination verified"
        },
        {
          "name": "lrosser",
          "timestamp": "2016-09-14T05:53:23.692Z",
          "comment": "Amount modified"
        }
      ]
    },
    {
      "wireId": 226,
      "category": "Swap_Payment",
      "wireDate": "2016-09-14",
      "valueDate": "2016-09-14",
      "currency": "USD",
      "amount": 895000,
      "sourceEntity": "OUTSIDEWIRES",
      "sourceCompany": "OUTSIDEWIRES",
      "sourceAccountName": "Morgan Stanley USD",
      "sourceAccountNumber": "26802154240",
      "destinationEntity": "MACRO PORT",
      "destinationCompany": "Demo Master Fund",
      "destinationAccountName": "Morgan Stanley USD",
      "destinationAccountNumber": "206D70357864",
      "statusCode": "PENDING_APPROVAL",
      "subject": "Test Transfer 2",
      "createdBy": "khammel",
      "reviewer": "btheel",
      "signatory": "",
      "comments": [
        {
          "name": "mlagace",
          "timestamp": "2016-09-14T04:42:19.822Z",
          "comment": "Amount reset"
        },
        {
          "name": "rhauk",
          "timestamp": "2016-09-14T04:55:21.667Z",
          "comment": "Destination updated"
        },
        {
          "name": "lnanney",
          "timestamp": "2016-09-14T05:54:52.757Z",
          "comment": "Amount modified"
        }
      ]
    },
    {
      "wireId": 225,
      "category": "Swap_Payment",
      "wireDate": "2016-09-14",
      "valueDate": "2016-09-14",
      "currency": "USD",
      "amount": 749000,
      "sourceEntity": "OUTSIDEWIRES",
      "sourceCompany": "OUTSIDEWIRES",
      "sourceAccountName": "HSBC USD",
      "sourceAccountNumber": "1CBB52626798",
      "destinationEntity": "MACRO PORT",
      "destinationCompany": "Demo Master Fund",
      "destinationAccountName": "HSBC USD",
      "destinationAccountNumber": "CC732373733",
      "statusCode": "PENDING_APPROVAL",
      "subject": "Test Transfer 2",
      "createdBy": "hschaefer",
      "reviewer": "taikins",
      "signatory": "",
      "comments": [
        {
          "name": "dlarocco",
          "timestamp": "2016-09-14T04:03:13.177Z",
          "comment": "Subject modified"
        },
        {
          "name": "iazevedo",
          "timestamp": "2016-09-14T04:58:44.605Z",
          "comment": "Source confirmed"
        },
        {
          "name": "lburkhart",
          "timestamp": "2016-09-14T05:16:06.491Z",
          "comment": "Source verified"
        }
      ]
    },
    {
      "wireId": 224,
      "category": "Swap_Payment",
      "wireDate": "2016-09-14",
      "valueDate": "2016-09-14",
      "currency": "USD",
      "amount": 207000,
      "sourceEntity": "OUTSIDEWIRES",
      "sourceCompany": "OUTSIDEWIRES",
      "sourceAccountName": "Wells Fargo USD",
      "sourceAccountNumber": "61592279088",
      "destinationEntity": "MACRO PORT",
      "destinationCompany": "Demo Master Fund",
      "destinationAccountName": "Wells Fargo USD",
      "destinationAccountNumber": "160342394245",
      "statusCode": "PENDING_APPROVAL",
      "subject": "Test Transfer 2",
      "createdBy": "lbuffkin",
      "reviewer": "mstender",
      "signatory": "",
      "comments": [
        {
          "name": "mlagace",
          "timestamp": "2016-09-14T04:24:10.292Z",
          "comment": "Source verified"
        },
        {
          "name": "gharvin",
          "timestamp": "2016-09-14T05:32:16.890Z",
          "comment": "Amount double checked"
        },
        {
          "name": "pfarnum",
          "timestamp": "2016-09-14T05:47:20.219Z",
          "comment": "Subject double checked"
        }
      ]
    },
    {
      "wireId": 223,
      "category": "Swap_Payment",
      "wireDate": "2016-09-14",
      "valueDate": "2016-09-14",
      "currency": "USD",
      "amount": 954000,
      "sourceEntity": "OUTSIDEWIRES",
      "sourceCompany": "OUTSIDEWIRES",
      "sourceAccountName": "Morgan Stanley USD",
      "sourceAccountNumber": "100A70566210",
      "destinationEntity": "MACRO PORT",
      "destinationCompany": "Demo Master Fund",
      "destinationAccountName": "Morgan Stanley USD",
      "destinationAccountNumber": "12BC49744555",
      "statusCode": "PENDING_APPROVAL",
      "subject": "Test Transfer 2",
      "createdBy": "mlagace",
      "reviewer": "ecofield",
      "signatory": "",
      "comments": [
        {
          "name": "lbuffkin",
          "timestamp": "2016-09-14T04:22:49.542Z",
          "comment": "Destination modified"
        },
        {
          "name": "taikins",
          "timestamp": "2016-09-14T04:35:05.330Z",
          "comment": "Destination reviewed"
        },
        {
          "name": "mlagace",
          "timestamp": "2016-09-14T05:26:01.649Z",
          "comment": "Category changed"
        }
      ]
    },
    {
      "wireId": 222,
      "category": "Swap_Payment",
      "wireDate": "2016-09-14",
      "valueDate": "2016-09-14",
      "currency": "USD",
      "amount": 259000,
      "sourceEntity": "OUTSIDEWIRES",
      "sourceCompany": "OUTSIDEWIRES",
      "sourceAccountName": "Morgan Stanley USD",
      "sourceAccountNumber": "5F48174158",
      "destinationEntity": "MACRO PORT",
      "destinationCompany": "Demo Master Fund",
      "destinationAccountName": "Morgan Stanley USD",
      "destinationAccountNumber": "23EB8865474",
      "statusCode": "PENDING_APPROVAL",
      "subject": "Test Transfer 2",
      "createdBy": "nmcbath",
      "reviewer": "hschaefer",
      "signatory": "",
      "comments": [
        {
          "name": "lrosser",
          "timestamp": "2016-09-14T04:30:02.739Z",
          "comment": "Amount confirmed"
        },
        {
          "name": "khammel",
          "timestamp": "2016-09-14T04:50:39.705Z",
          "comment": "Destination reviewed"
        },
        {
          "name": "mdurgin",
          "timestamp": "2016-09-14T04:57:58.369Z",
          "comment": "Destination double checked"
        }
      ]
    },
    {
      "wireId": 221,
      "category": "Swap_Payment",
      "wireDate": "2016-09-14",
      "valueDate": "2016-09-14",
      "currency": "USD",
      "amount": 287000,
      "sourceEntity": "OUTSIDEWIRES",
      "sourceCompany": "OUTSIDEWIRES",
      "sourceAccountName": "JPMorgan Chase USD",
      "sourceAccountNumber": "178D47907602",
      "destinationEntity": "MACRO PORT",
      "destinationCompany": "Demo Master Fund",
      "destinationAccountName": "JPMorgan Chase USD",
      "destinationAccountNumber": "E2A97269832",
      "statusCode": "PENDING_APPROVAL",
      "subject": "Test Transfer 2",
      "createdBy": "dmott",
      "reviewer": "btheel",
      "signatory": "",
      "comments": [
        {
          "name": "gharvin",
          "timestamp": "2016-09-14T04:08:45.487Z",
          "comment": "Amount modified"
        },
        {
          "name": "rmeares",
          "timestamp": "2016-09-14T05:05:11.613Z",
          "comment": "Category changed"
        },
        {
          "name": "slonzo",
          "timestamp": "2016-09-14T05:06:43.395Z",
          "comment": "Amount double checked"
        }
      ]
    }
  ]

export const getCurrentWires = async () => Promise.resolve(JSON.parse(JSON.stringify(currentWires)) as WireDetail[]);
export const setCurrentWires = async (wires: WireDetail[]) => { currentWires = JSON.parse(JSON.stringify(wires)) };
