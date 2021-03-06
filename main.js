//Constants and Variables
var WEATHER_API_KEY = "0fd7abb03e49159615b1dba2e6a2623f";
var geoDirection_API_KEY = "AIzaSyCq8nITzbFiHjoh2U0_jh0Pa-OtLAUZyAQ";
var geolocation_API_KEY = "AIzaSyC4EA0q_MYWqb514AVmYLOezWoT8n5Of08";
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();
const http = require('http'); //npm install http
const https = require('https'); //npm install https
const q = require('q');
const clientId = 'kumarmca1@gmail.com';
const accessCode = '72S2V55I';

const transactions = [
    {
        "Transaction Date": "31/08/2016",
        "Transaction Remarks": "BIL/001031868185/data/AIRT25916731917",
        "Withdrawal Amount (INR )": 255,
        "Deposit Amount (INR )": 0,
        "Balance (INR )": 3774.92
    },
    {
        "Transaction Date": "19/09/2016",
        "Transaction Remarks": "BIL/001043898748/netpack/AIRT25916818846",
        "Withdrawal Amount (INR )": 101,
        "Deposit Amount (INR )": 0,
        "Balance (INR )": 3673.92
    },
    {
        "Transaction Date": "29/09/2016",
        "Transaction Remarks": "086601503071:Int.Pd:29-06-2016 to 28-09-2016",
        "Withdrawal Amount (INR )": 0,
        "Deposit Amount (INR )": 42,
        "Balance (INR )": 3512.92
    },
    {
        "Transaction Date": "15/03/2017",
        "Transaction Remarks": "BIL/001069066859/net pack/AIRT25916928205",
        "Withdrawal Amount (INR )": 164,
        "Deposit Amount (INR )": 0,
        "Balance (INR )": 3348.92
    },
    {
        "Transaction Date": "15/02/2017",
        "Transaction Remarks": "BIL/001069199986/net pack/AIRT25916929623",
        "Withdrawal Amount (INR )": 142,
        "Deposit Amount (INR )": 0,
        "Balance (INR )": 3206.92
    },
    {
        "Transaction Date": "29/10/2016",
        "Transaction Remarks": "BIL/001069244424/PGMIB-Talk time/AIRT25916929854",
        "Withdrawal Amount (INR )": 200,
        "Deposit Amount (INR )": 0,
        "Balance (INR )": 3006.92
    },
    {
        "Transaction Date": "28/11/2016",
        "Transaction Remarks": "BIL/001088461485/mom recharge/IDEACELLULAR_HI",
        "Withdrawal Amount (INR )": 120,
        "Deposit Amount (INR )": 0,
        "Balance (INR )": 2886.92
    },
    {
        "Transaction Date": "22/12/2016",
        "Transaction Remarks": "Ac xfr from gl 08050 to 08022",
        "Withdrawal Amount (INR )": 2886.92,
        "Deposit Amount (INR )": 0,
        "Balance (INR )": 0
    },
    {
        "Transaction Date": "22/12/2016",
        "Transaction Remarks": "Ac xfr from gl 08050 to 08022",
        "Withdrawal Amount (INR )": 0,
        "Deposit Amount (INR )": 2886.92,
        "Balance (INR )": 2886.92
    },
    {
        "Transaction Date": "30/12/2016",
        "Transaction Remarks": "086601503071:WTax.Pd:29-09-2016to 29-12-2016",
        "Withdrawal Amount (INR )": 10,
        "Deposit Amount (INR )": 0,
        "Balance (INR )": 2876.92
    },
    {
        "Transaction Date": "30/12/2016",
        "Transaction Remarks": "086601503071:Int.Pd:29-09-2016 to 29-12-2016",
        "Withdrawal Amount (INR )": 0,
        "Deposit Amount (INR )": 32,
        "Balance (INR )": 2908.92
    },
    {
        "Transaction Date": "13/01/2017",
        "Transaction Remarks": "BIL/001126226458/Rent a car/AIRT01170100154",
        "Withdrawal Amount (INR )": 200,
        "Deposit Amount (INR )": 0,
        "Balance (INR )": 2708.92
    },
    {
        "Transaction Date": "13/01/2017",
        "Transaction Remarks": "BIL/001126228275/PGMIB-/AIRT01170100154",
        "Withdrawal Amount (INR )": 157,
        "Deposit Amount (INR )": 0,
        "Balance (INR )": 2551.92
    },
    {
        "Transaction Date": "23/01/2017",
        "Transaction Remarks": "BIL/001131483851/PGMIB-/AIRT01170100178",
        "Withdrawal Amount (INR )": 200,
        "Deposit Amount (INR )": 0,
        "Balance (INR )": 2351.92
    },
    {
        "Transaction Date": "23/01/2017",
        "Transaction Remarks": "BIL/001131549672/PGMIB-/AIRT01170100179",
        "Withdrawal Amount (INR )": 200,
        "Deposit Amount (INR )": 0,
        "Balance (INR )": 2151.92
    },
    {
        "Transaction Date": "23/01/2017",
        "Transaction Remarks": "BIL/001131555720/PGMIB-/HTTPS://PAY.AIR",
        "Withdrawal Amount (INR )": 143,
        "Deposit Amount (INR )": 0,
        "Balance (INR )": 2008.92
    },
    {
        "Transaction Date": "23/01/2017",
        "Transaction Remarks": "BIL/001131765592/PGMIB-/HTTPS://PAY.AIR",
        "Withdrawal Amount (INR )": 69,
        "Deposit Amount (INR )": 0,
        "Balance (INR )": 1939.92
    },
    {
        "Transaction Date": "30/01/2017",
        "Transaction Remarks": "DCARDFEE1018DEC16-NOV17ST29.85",
        "Withdrawal Amount (INR )": 228.85,
        "Deposit Amount (INR )": 0,
        "Balance (INR )": 1711.07
    },
    {
        "Transaction Date": "30/01/2017",
        "Transaction Remarks": "BIL/001135086752/PGMIB-/HTTPS://PAY.AIR",
        "Withdrawal Amount (INR )": 200,
        "Deposit Amount (INR )": 0,
        "Balance (INR )": 1511.07
    },
    {
        "Transaction Date": "30/01/2017",
        "Transaction Remarks": "BIL/001135087709/PGMIB-/HTTPS://PAY.AIR",
        "Withdrawal Amount (INR )": 69,
        "Deposit Amount (INR )": 0,
        "Balance (INR )": 1442.07
    },
    {
        "Transaction Date": "07/02/2017",
        "Transaction Remarks": "BIL/001142971962/Flight Ticket/NSP",
        "Withdrawal Amount (INR )": 0,
        "Deposit Amount (INR )": 3800,
        "Balance (INR )": 5242.07
    },
    {
        "Transaction Date": "13/02/2017",
        "Transaction Remarks": "BIL/001147074404/PGMIB-/IDEACELLULAR_HI",
        "Withdrawal Amount (INR )": 120,
        "Deposit Amount (INR )": 0,
        "Balance (INR )": 5122.07
    },
    {
        "Transaction Date": "22/02/2017",
        "Transaction Remarks": "BIL/001152819940/dad rate cutter/AIRT01170200270",
        "Withdrawal Amount (INR )": 94,
        "Deposit Amount (INR )": 0,
        "Balance (INR )": 5028.07
    },
    {
        "Transaction Date": "27/02/2017",
        "Transaction Remarks": "BIL/001168441506/Hotel Mariate/AIRT01170300334",
        "Withdrawal Amount (INR )": 549.52,
        "Deposit Amount (INR )": 0,
        "Balance (INR )": 4478.55
    },
    {
        "Transaction Date": "07/03/2017",
        "Transaction Remarks": "MABChgs- Jan17+STax71.52",
        "Withdrawal Amount (INR )": 549.52,
        "Deposit Amount (INR )": 0,
        "Balance (INR )": 3929.03
    },
    {
        "Transaction Date": "15/03/2017",
        "Transaction Remarks": "BIL/001168441506/sister recharge/AIRT01170300334",
        "Withdrawal Amount (INR )": 110,
        "Deposit Amount (INR )": 0,
        "Balance (INR )": 3819.03
    },
    {
        "Transaction Date": "15/03/2017",
        "Transaction Remarks": "BIL/001168445429/mom recharge/IDEACELLULAR_II",
        "Withdrawal Amount (INR )": 120,
        "Deposit Amount (INR )": 0,
        "Balance (INR )": 3699.03
    },
    {
        "Transaction Date": "20/03/2017",
        "Transaction Remarks": "BIL/001171366065/PGMIB-Dad net pack/AIRT011703003",
        "Withdrawal Amount (INR )": 178,
        "Deposit Amount (INR )": 0,
        "Balance (INR )": 3521.03
    },
    {
        "Transaction Date": "23/03/2017",
        "Transaction Remarks": "MABChgs-Feb17+STax75",
        "Withdrawal Amount (INR )": 575,
        "Deposit Amount (INR )": 0,
        "Balance (INR )": 2946.03
    },
    {
        "Transaction Date": "25/03/2017",
        "Transaction Remarks": "BIL/001175238789/dad recharge/HTTPS://PAY.AIR",
        "Withdrawal Amount (INR )": 350,
        "Deposit Amount (INR )": 0,
        "Balance (INR )": 2596.03
    },
    {
        "Transaction Date": "31/03/2017",
        "Transaction Remarks": "086601503071:WTax.Pd:30-12-2016to 30-03-2017",
        "Withdrawal Amount (INR )": 11,
        "Deposit Amount (INR )": 0,
        "Balance (INR )": 2585.03
    },
    {
        "Transaction Date": "31/03/2017",
        "Transaction Remarks": "086601503071:Int.Pd:30-12-2016 to 30-03-2017",
        "Withdrawal Amount (INR )": 0,
        "Deposit Amount (INR )": 34,
        "Balance (INR )": 2619.03
    },
    {
        "Transaction Date": "03/04/2017",
        "Transaction Remarks": "INF/000037579636/MIB-Minimum",
        "Withdrawal Amount (INR )": 0,
        "Deposit Amount (INR )": 20000,
        "Balance (INR )": 22619.03
    },
    {
        "Transaction Date": "03/04/2017",
        "Transaction Remarks": "BIL/001181052968/dad net pack/HTTPS://PAY.AIR",
        "Withdrawal Amount (INR )": 178,
        "Deposit Amount (INR )": 0,
        "Balance (INR )": 22441.03
    },
    {
        "Transaction Date": "04/04/2017",
        "Transaction Remarks": "INF/000037606665/back to main",
        "Withdrawal Amount (INR )": 0,
        "Deposit Amount (INR )": 14000,
        "Balance (INR )": 36441.03
    },
    {
        "Transaction Date": "05/04/2017",
        "Transaction Remarks": "BIL/001183166078/nandhanaa school fee/HANMAHS_IIC",
        "Withdrawal Amount (INR )": 26928.75,
        "Deposit Amount (INR )": 0,
        "Balance (INR )": 9512.28
    }
];

const server = app.listen(process.env.PORT || 4040, () => {
    console.log('Express server listening on port %d in %s mode', server.address().port, app.settings.env);
});

//Definitons for our application
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

var groupBy = function (xs, key) {
    return xs.reduce(function (rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
    }, {});
};

function httpGet(url, callback) {

    var deferred = q.defer();
    https.get(url, (data) => {
        const statusCode = data.statusCode;
        const contentType = data.headers['content-type'];
        let error;
        if (statusCode !== 200) {
            error = new Error(`Request Failed.\n` +
                `Status Code: ${statusCode}`);
        }
        if (error) {
            console.log(error.message);
            data.resume();
            return;
        }
        data.setEncoding('utf8');
        let rawData = '';
        data.on('data', (chunk) => rawData += chunk);
        data.on('end', () => {
            try {
                let parsedData = JSON.parse(rawData);
                //console.log(parsedData);
                deferred.resolve(parsedData);
            } catch (e) {
                deferred.reject(e);
            }
        });
    }).on('error', (e) => {
        deferred.reject(e);
    });
    return deferred.promise.nodeify(callback) // the promise is returned
}

app.post('/account', (req, res) => {

    console.log('*** Webhook for api.ai query ***');
    console.log(req.body.result);

    // Extras - weather

    if (req.body.result.action === 'weatherda') {
        console.log('*** weather ***');
        let city = req.body.result.parameters['geo-city'];
        let restUrl = 'http://api.openweathermap.org/data/2.5/weather?APPID=' + WEATHER_API_KEY + '&q=' + city;

        request.get(restUrl, (err, response, body) => {
            if (!err && response.statusCode == 200) {
                let json = JSON.parse(body);
                console.log(json);
                let tempF = ~~(json.main.temp * 9 / 5 - 459.67);
                let tempC = ~~(json.main.temp - 273.15);
                let msg = 'The current condition in ' + json.name + ' is ' + json.weather[0].description + ' and the temperature is ' + tempF + ' ℉ (' + tempC + ' ℃).'
                return res.json({
                    speech: msg,
                    displayText: msg,
                    source: 'weather'
                });
            } else {
                let errorMessage = 'I failed to look up the city name.';
                return res.status(400).json({
                    status: {
                        code: 400,
                        errorType: errorMessage
                    }
                });
            }
        })
    }

    // 7. Participant Data Mapping
    if (req.body.result.action === 'account') {
        console.log('*** Account info ***');
        let restUrl = 'https://retailbanking.mybluemix.net/banking/icicibank/participantmapping?client_id=kumarmca1@gmail.com';
        request.get(restUrl, (err, response, body) => {
            if (!err && response.statusCode == 200) {

                let json = JSON.parse(response.body);
                console.log(json.length);
                var accounts = [];
                for (let i = 0; i < json.length; i++) {
                    if (json[i].account_no !== undefined && json[i].account_no !== '') {
                        accounts.push(json[i].account_no);
                    }
                }
                let msg = 'hello';
                if (accounts.length > 1) {
                    msg = 'You have more than one acount, specify last four digit of your account to know the details.';
                } else if (accounts.length == 0) {
                    msg = 'You have no active account.'
                } else {
                    msg = 'Your account number is ' + accounts[0] + '.'
                }

                return res.json({
                    speech: msg,
                    displayText: msg,
                    source: 'weather'
                });
            } else {
                let errorMessage = 'I failed to look up your account.';
                return res.status(400).json({
                    status: {
                        code: 400,
                        errorType: errorMessage
                    }
                });
            }
        })
    }

    // 8.1 Balance Enquiry
    if (req.body.result.action === 'balanceenquiry') {

        console.log('inside balance enquiry');
        var accesscode;
        var msg;
        var accountno;

        getaccesscode();

        function getaccesscode() {
            "use strict";
            let restUrl1 = 'https://corporateapiprojectwar.mybluemix.net/corporate_banking/mybank/authenticate_client?client_id=kumarmca1@gmail.com&password=72S2V55I'
            request.get(restUrl1, (err, response1, body) => {
                if (!err && response1.statusCode == 200) {
                    let json1 = JSON.parse(response1.body);
                    console.log(json1);
                    console.log(json1.length);
                    accesscode = json1[0].token;
                    console.log(accesscode);
                    getaccountno();
                } else {
                    let errorMessage = 'I failed to get Access Code';
                    return res.json({
                        speech: errorMessage,
                        displayText: errorMessage,
                        source: 'balanceenquiry'
                    });
                }
            })
        }

        function getaccountno() {

            let restUrl = 'https://retailbanking.mybluemix.net/banking/icicibank/participantmapping?client_id=kumarmca1@gmail.com';
            request.get(restUrl, (err, response, body) => {
                if (!err && response.statusCode == 200) {

                    let json = JSON.parse(response.body);
                    console.log(json.length);
                    var accounts = [];
                    if (json[0].account_no !== undefined && json[0].account_no !== '') {
                        accounts.push(json[0]);
                    }
                    accountno = accounts[0].account_no;
                    getaccountbalenq();

                }
            });
        }

        function getaccountbalenq() {
            "use strict";
            console.log('access code entry');
            console.log(accesscode, 'enter');
            console.log(accountno, 'enter account no')

            let restUrl2 = 'https://retailbanking.mybluemix.net/banking/icicibank/balanceenquiry?client_id=kumarmca1@gmail.com&token=' + accesscode + '&accountno=' + accountno + '';
            console.log(restUrl2);
            request.get(restUrl2, (err, response2, body) => {
                if (!err && response2.statusCode == 200) {
                    let json2 = JSON.parse(response2.body);
                    console.log(json2.length);
                    console.log('Reached Entry after call');
                    console.log(json2);
                    var accountbalance = [];
                    if (json2[0].code == 200) {
                        accountbalance.push(json2[1]);
                        console.log('Fetched account info');
                        var actlastfour = accountbalance[0].accountno.substr(accountbalance[0].accountno.length - 4);
                        var baltimeraw = accountbalance[0].balancetime.toString();
                        var baltime = baltimeraw.substr(0, 14);
                        msg = 'Your ' + accountbalance[0].accounttype + ' number with last 4 digits ' + actlastfour + ' has a balance of ' + accountbalance[0].balance + ' Indian Rupees as of ' + baltime + '. ';
                    } else {
                        let errorMessage = 'I failed to retrieve account info.';
                        console.log('Reached3');
                        return res.json({
                            speech: errorMessage,
                            displayText: errorMessage,
                            source: 'balanceenquiry'
                        });
                    }

                    return res.json({
                        speech: msg,
                        displayText: msg,
                        source: 'balanceenquiry'
                    });

                } else {
                    console.log(response3);
                    console.log('Reached4');
                    let errorMessage = 'I failed to retrieve account details';

                    return res.json({
                        speech: errorMessage,
                        displayText: errorMessage,
                        source: 'balanceenquiry'
                    });
                }
            });
        }
    }

    // 8.2 Account Summary
    if (req.body.result.action === 'accountsummary') {

        console.log('inside Account Summary');
        var accesscode;
        var msg;
        var accountno;
        var custno;

        getaccesscode();

        function getaccesscode() {
            "use strict";
            let restUrl1 = 'https://corporateapiprojectwar.mybluemix.net/corporate_banking/mybank/authenticate_client?client_id=kumarmca1@gmail.com&password=72S2V55I'
            request.get(restUrl1, (err, response1, body) => {
                if (!err && response1.statusCode == 200) {
                    let json1 = JSON.parse(response1.body);
                    console.log(json1);
                    console.log(json1.length);
                    accesscode = json1[0].token;
                    console.log(accesscode);
                    getaccountcustno();
                } else {
                    let errorMessage = 'I failed to get Access Code';
                    return res.json({
                        speech: errorMessage,
                        displayText: errorMessage,
                        source: 'accountsummary'
                    });
                }
            })
        }

        function getaccountcustno() {

            let restUrl = 'https://retailbanking.mybluemix.net/banking/icicibank/participantmapping?client_id=kumarmca1@gmail.com';
            request.get(restUrl, (err, response, body) => {
                if (!err && response.statusCode == 200) {

                    let json = JSON.parse(response.body);
                    console.log(json.length);
                    var accounts = [];
                    if (json[0].account_no !== undefined && json[0].account_no !== '') {
                        accounts.push(json[0]);
                    }
                    accountno = accounts[0].account_no;
                    custno = accounts[0].cust_id;
                    getaccountsummary();

                }
            });
        }

        function getaccountsummary() {
            "use strict";
            console.log('access code entry');
            console.log(accesscode, 'enter');
            console.log(accountno, 'enter account no');
            console.log(custno, 'enter account no');

            let restUrl2 = 'https://retailbanking.mybluemix.net/banking/icicibank/account_summary?client_id=kumarmca1@gmail.com&token=' + accesscode + '&custid=' + custno + '&accountno=' + accountno + '';

            console.log(restUrl2);
            request.get(restUrl2, (err, response2, body) => {
                if (!err && response2.statusCode == 200) {
                    let json2 = JSON.parse(response2.body);
                    console.log(json2.length);
                    console.log('Reached Entry after call');
                    console.log(json2);
                    var accountsummary = [];
                    if (json2[0].code == 200) {
                        accountsummary.push(json2[1]);
                        console.log('Fetched account summary');
                        var actlastfour = accountsummary[0].accountno.substr(accountsummary[0].accountno.length - 4);
                        var dA = accountsummary[0].balance;
                        var sA = dA + '';
                        var balan = parseFloat(Math.round(sA * 100) / 100).toFixed(2);
                        msg = 'Hello Customer !! Your ' + accountsummary[0].product_desc + ' ending with ' + actlastfour + ' has balance of ' + balan + ' INR, Your wallet ' + accountsummary[0].wallet_id + ' has ' + accountsummary[0].wallet_balance + ' Rupees and ' + accountsummary[0].reward_point + ' reward points. ';
                    } else {
                        let errorMessage = 'I failed to retrieve account info.';
                        console.log('Reached3');
                        return res.json({
                            speech: errorMessage,
                            displayText: errorMessage,
                            source: 'accountsummary'
                        });
                    }

                    return res.json({
                        speech: msg,
                        displayText: msg,
                        source: 'accountsummary'
                    });

                } else {
                    console.log(response3);
                    console.log('Reached4');
                    let errorMessage = 'I failed to retrieve account details';

                    return res.json({
                        speech: errorMessage,
                        displayText: errorMessage,
                        source: 'accountsummary'
                    });
                }
            });
        }
    }

    // 8.3 Mini Statement
    if (req.body.result.action === 'ministatement') {

        console.log('inside Mini Statement');
        var accesscode;
        var msg;
        var accountno;

        getaccesscode();

        function getaccesscode() {
            "use strict";
            let restUrl1 = 'https://corporateapiprojectwar.mybluemix.net/corporate_banking/mybank/authenticate_client?client_id=kumarmca1@gmail.com&password=72S2V55I'
            request.get(restUrl1, (err, response1, body) => {
                if (!err && response1.statusCode == 200) {
                    let json1 = JSON.parse(response1.body);
                    console.log(json1);
                    console.log(json1.length);
                    accesscode = json1[0].token;
                    console.log(accesscode);
                    getaccountcustno();
                } else {
                    let errorMessage = 'I failed to get Access Code';
                    return res.json({
                        speech: errorMessage,
                        displayText: errorMessage,
                        source: 'ministatement'
                    });
                }
            })
        }

        function getaccountcustno() {

            let restUrl = 'https://retailbanking.mybluemix.net/banking/icicibank/participantmapping?client_id=kumarmca1@gmail.com';
            request.get(restUrl, (err, response, body) => {
                if (!err && response.statusCode == 200) {

                    let json = JSON.parse(response.body);
                    console.log(json.length);
                    var accounts = [];
                    if (json[0].account_no !== undefined && json[0].account_no !== '') {
                        accounts.push(json[0]);
                    }
                    accountno = accounts[0].account_no;
                    getministatement();

                }
            });
        }

        function getministatement() {
            "use strict";
            console.log('access code entry');
            console.log(accesscode, 'enter');
            console.log(accountno, 'enter account no');
            let restUrl2 = 'https://retailbanking.mybluemix.net/banking/icicibank/recenttransaction?client_id=kumarmca1@gmail.com&token=' + accesscode + '&accountno=' + accountno + '';
            console.log(restUrl2);
            request.get(restUrl2, (err, response2, body) => {
                if (!err && response2.statusCode == 200) {
                    let json2 = JSON.parse(response2.body);
                    console.log(json2.length);
                    console.log('Reached Entry after call');
                    console.log(json2);
                    var tranhistory = [];

                    var i, j;
                    if (json2[0].code == 200) {
                        for (i = 0; i < json2.length - 1; i++) {
                            let j = i + 1;
                            console.log(j);
                            console.log(json2[j].transactiondate);
                            var transacdateraw = json2[j].transactiondate.toString();
                            var transacdate = transacdateraw.substr(0, 16);

                            var dA = json2[j].transaction_amount;
                            var sA = dA + '';
                            var tranamnt = parseFloat(Math.round(sA * 100) / 100).toFixed(2);



                            switch (json2[j].credit_debit_flag) {
                                case 'Dr.':
                                    {
                                        var trantype = 'Debit';
                                        break;
                                    }
                                case 'Cr.':
                                    {
                                        var trantype = 'Credit';
                                        break;
                                    }

                            }
                            var tranh = {
                                trandesc: json2[j].remark,
                                trandate: transacdate,
                                trantype: trantype,
                                tranamnt: tranamnt
                            };


                            tranhistory.push(tranh);
                        }
                        console.log('Fetched account summary');
                        var actlastfour = accountno.substr(accountno.length - 4);
                        msg = 'Your transaction history is, Transaction 1, ' + tranhistory[0].trantype + ' of ' + tranhistory[0].tranamnt + ' for ' + tranhistory[0].trandesc + ' on ' + tranhistory[0].trantype + '.';
                    } else {
                        let errorMessage = 'I failed to retrieve account info.';
                        console.log('Reached3');
                        return res.json({
                            speech: errorMessage,
                            displayText: errorMessage,
                            source: 'ministatement'
                        });
                    }

                    return res.json({
                        speech: msg,
                        displayText: msg,
                        source: 'ministatement'
                    });


                } else {
                    console.log(response3);
                    console.log('Reached4');
                    let errorMessage = 'I failed to retrieve account details';

                    return res.json({
                        speech: errorMessage,
                        displayText: errorMessage,
                        source: 'ministatement'
                    });
                }
            });
        }
    }

    // 8. 9 ATM Locations
    if (req.body.result.action === 'atmlocation') {

        var accesscode;
        var lati;
        var logi;
        var msg;

        let city = req.body.result.parameters['cityname'];
        getlocationinfo();

        function getlocationinfo() {

            "use strict";
            let resturl = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + city + '&key=' + geolocation_API_KEY + ''
            request.get(resturl, (err, response, body) => {
                if (!err && response.statusCode == 200) {
                    console.log(response.body);
                    let json = JSON.parse(response.body);
                    lati = json.results[0].geometry.location.lat;
                    logi = json.results[0].geometry.location.lng;
                    console.log(lati);
                    console.log(logi);
                    getaccesscode();
                } else {
                    let errorMessage = 'I failed to get location info';
                    return res.json({
                        speech: errorMessage,
                        displayText: errorMessage,
                        source: 'atmlocations'
                    });
                }
            })
        }


        function getaccesscode() {
            "use strict";
            let restUrl1 = 'https://corporateapiprojectwar.mybluemix.net/corporate_banking/mybank/authenticate_client?client_id=kumarmca1@gmail.com&password=72S2V55I'
            request.get(restUrl1, (err, response1, body) => {
                if (!err && response1.statusCode == 200) {
                    let json1 = JSON.parse(response1.body);
                    console.log(json1);
                    console.log(json1.length);
                    accesscode = json1[0].token;
                    console.log(accesscode);
                    getatmlocations();
                } else {
                    let errorMessage = 'I failed to get Access Code';
                    return res.json({
                        speech: errorMessage,
                        displayText: errorMessage,
                        source: 'atmlocations'
                    });
                }
            })
        }

        function getatmlocations() {
            "use strict";
            console.log(lati, 'final');
            console.log(logi, 'final');
            console.log(accesscode, 'final');
            console.log('access code entry');
            console.log(accesscode, 'enter');
            let restUrl3 = 'https://retailbanking.mybluemix.net/banking/icicibank/BranchAtmLocator?client_id=kumarmca1@gmail.com&token=' + accesscode + '&locate=ATM&lat=' + lati + '&long=' + logi + '';
            console.log(restUrl3);
            request.get(restUrl3, (err, response3, body) => {
                if (!err && response3.statusCode == 200) {
                    let json2 = JSON.parse(response3.body);
                    console.log(json2.length);
                    console.log('Reached1');
                    console.log(json2);
                    var atmlocations = [];
                    var atmlocationsno = (json2.length - 1);
                    console.log(atmlocationsno);
                    msg = 'I have ' + atmlocationsno + ' ATM Locations available nearby. Please select a number within ' + atmlocationsno + ' to get respective ATM location details.';
                    for (let i = 1; i < json2.length; i++) {
                        if (json2[i].pincode !== undefined && json2[i].pincode !== '') {
                            atmlocations.push(json2[i]);
                            console.log('Reached2');
                            console.log(atmlocations[i - 1]);

                        } else {
                            let errorMessage = 'I failed to retrieve ATM details though authorized';
                            console.log('Reached3');
                            return res.json({
                                speech: errorMessage,
                                displayText: errorMessage,
                                source: 'atmlocations'
                            });
                        }
                    }
                    return res.json({
                        speech: msg,
                        displayText: msg,
                        source: 'atmlocations'
                    });
                } else {
                    console.log(response3);
                    console.log('Reached4');
                    let errorMessage = 'I failed to retrieve ATM details';

                    return res.json({
                        speech: errorMessage,
                        displayText: errorMessage,
                        source: 'atmlocations'
                    });
                }
            });
        }
    }

    if (req.body.result.action === 'atmlocation_fetchone') {

        var accesscode;
        var lati;
        var logi;
        var msg;
        var atmnotofetch

        let city = req.body.result.parameters['cityname'];
        let atmno = req.body.result.parameters['atmlocationdetails'];


        getlocationinfo();

        function getlocationinfo() {

            "use strict";
            let resturl = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + city + '&key=' + geolocation_API_KEY + ''
            request.get(resturl, (err, response, body) => {
                if (!err && response.statusCode == 200) {
                    console.log(response.body);
                    let json = JSON.parse(response.body);
                    lati = json.results[0].geometry.location.lat;
                    logi = json.results[0].geometry.location.lng;
                    console.log(lati);
                    console.log(logi);
                    getaccesscode();
                } else {
                    let errorMessage = 'I failed to get location info';
                    return res.json({
                        speech: errorMessage,
                        displayText: errorMessage,
                        source: 'atmlocations'
                    });
                }
            })
        }


        function getaccesscode() {
            "use strict";
            let restUrl1 = 'https://corporateapiprojectwar.mybluemix.net/corporate_banking/mybank/authenticate_client?client_id=kumarmca1@gmail.com&password=72S2V55I'
            request.get(restUrl1, (err, response1, body) => {
                if (!err && response1.statusCode == 200) {
                    let json1 = JSON.parse(response1.body);
                    console.log(json1);
                    console.log(json1.length);
                    accesscode = json1[0].token;
                    console.log(accesscode);
                    getatmlocations();
                } else {
                    let errorMessage = 'I failed to get Access Code';
                    return res.json({
                        speech: errorMessage,
                        displayText: errorMessage,
                        source: 'atmlocations'
                    });
                }
            })
        }

        function getatmlocations() {
            "use strict";
            console.log(lati, 'final');
            console.log(logi, 'final');
            console.log(accesscode, 'final');
            console.log('access code entry');
            console.log(accesscode, 'enter');
            console.log(atmno);
            let restUrl3 = 'https://retailbanking.mybluemix.net/banking/icicibank/BranchAtmLocator?client_id=kumarmca1@gmail.com&token=' + accesscode + '&locate=ATM&lat=' + lati + '&long=' + logi + '';
            console.log(restUrl3);
            request.get(restUrl3, (err, response3, body) => {
                if (!err && response3.statusCode == 200) {
                    let json2 = JSON.parse(response3.body);
                    console.log(json2.length);
                    console.log('Reached1');
                    var atmlocations = [];
                    var i = atmno++;
                    console.log(i);
                    if (json2[i].pincode !== undefined && json2[i].pincode !== '') {
                        atmlocations.push(json2[i]);
                        console.log('Reached2');
                        console.log(atmlocations[0]);
                        msg = 'Address of ATM Location No ' + i + ' is ' + atmlocations[0].address + ', ' + atmlocations[0].city + 'and Phone number is ' + atmlocations[0].phoneno + ' ';

                    } else {
                        let errorMessage = 'I failed to retrieve ATM details though authorized';
                        console.log('Reached3');
                        return res.json({
                            speech: errorMessage,
                            displayText: errorMessage,
                            source: 'atmlocations'
                        });
                    }

                    return res.json({
                        speech: msg,
                        displayText: msg,
                        source: 'atmlocations'
                    });
                } else {
                    console.log(response3);
                    console.log('Reached4');
                    let errorMessage = 'I failed to retrieve ATM details';

                    return res.json({
                        speech: errorMessage,
                        displayText: errorMessage,
                        source: 'atmlocations'
                    });
                }
            });
        }
    }

    //suggestion per month
    if (req.body.result.action === 'suggestions') {
        var url = 'https://retailbanking.mybluemix.net/banking/icicibank/participantmapping?client_id=' + clientId;
        httpGet(url).then(function (response) {
            //console.log(response);
            httpGet('https://corporateapiprojectwar.mybluemix.net/corporate_banking/mybank/authenticate_client?client_id=' + clientId + '&password=' + accessCode)
                .then(function (response) {
                    var token = response[0].token;
                    httpGet('https://retailbanking.mybluemix.net/banking/icicibank/ndaystransaction?client_id=kumarmca1@gmail.com&token=' + token + '&accountno=4444777755552276&days=10')
                        .then(function (response) {
                            try {
                                console.log("cp1");

                                transactions.forEach(function (transaction) {
                                    transaction.TranMonth = transaction["Transaction Date"].substring(3, 10);
                                }, this);


                                var groupedTransByMonth = groupBy(transactions, 'TranMonth');
                                //var debitTrans = filterBy(transactions, 'Withdrawal Amount (INR )', 0);

                                var debitTrans = transactions.filter(function (tran) {
                                    return tran["Withdrawal Amount (INR )"] > 0;
                                });
                                var creditTrans = transactions.filter(function (tran) {
                                    return tran["Deposit Amount (INR )"] > 0;
                                });

                                var groupByDebit = groupBy(debitTrans, 'Withdrawal Amount (INR )');
                                var groupByCredit = groupBy(creditTrans, 'Deposit Amount (INR )');

                                var repeatingDebits = [];
                                var amounts = Object.keys(groupByDebit);
                                for (var i = 0; i < amounts.length; i++) {
                                    var amount = amounts[i];
                                    if (groupByDebit[amount].length > 2) {
                                        var remarks = groupByDebit[amount][0]["Transaction Remarks"].match(/[a-z]*/ig);
                                        var remark = '';
                                        remarks.forEach(function (rem) {
                                            if (rem !== '')
                                                remark = remark + ' ' + rem;
                                        });
                                        var tran = {
                                            remarks: remark.trim(),
                                            amount: groupByDebit[amount][0]["Withdrawal Amount (INR )"]
                                        };
                                        repeatingDebits.push(tran);
                                    }
                                }

                                console.log("cp2");

                                var repeatingCredits = [];
                                amounts = Object.keys(groupByCredit);
                                for (var i = 0; i < amounts.length; i++) {
                                    var amount = amounts[i];
                                    if (groupByCredit[amount].length > 2) {
                                        var remarks = groupByCredit[amount][0]["Transaction Remarks"].match(/[a-z]*/ig);
                                        var remark = '';
                                        remarks.forEach(function (rem) {
                                            if (rem !== '')
                                                remark = remark + ' ' + rem;
                                        });
                                        var tran = {
                                            remarks: remark.trim(),
                                            amount: groupByCredit[amount][0]["Withdrawal Amount (INR )"]
                                        };

                                        console.log("CP2");
                                        repeatingCredits.push(tran);
                                    }
                                }

                                var resultedTransactions = {
                                    "repeatingDebits": repeatingDebits,
                                    "repeatingCredits": repeatingCredits
                                }
                                console.log(resultedTransactions);
                                return res.json(resultedTransactions);
                            } catch (e) {
                                console.log("error da mudhevi");
                                var msg='System not available now, please try after sometime.';
                                return res.json({
                                            speech: msg,
                                            displayText: msg,
                                            source: 'weather'
                                });
                            }

                        });
                });
        });
    }

    //Suggestion per specific day
    if(req.body.result.action === 'specificdaysuggestion'){
        var spendAmount = 0;
        var url = 'https://retailbanking.mybluemix.net/banking/icicibank/participantmapping?client_id=' + clientId;
        httpGet(url).then(function (response) {
            //console.log(response);
            httpGet('https://corporateapiprojectwar.mybluemix.net/corporate_banking/mybank/authenticate_client?client_id=' + clientId + '&password=' + accessCode)
                .then(function (response) {
                    var token = response[0].token;
                    httpGet('https://retailbanking.mybluemix.net/banking/icicibank/ndaystransaction?client_id=kumarmca1@gmail.com&token=' + token + '&accountno=4444777755552276&days=10')
                        .then(function (response) {
                            response = transactions; //overriding the response to moc data
                            try {
                            
                                var date = new Date();
                                date.setMonth(date.getMonth() -1);
                                // 31/08/2016
                                var todayLastMonth = ("00" + date.getDate()).slice(-2)+'/'+("00" + (date.getMonth()+1)).slice(-2)+'/'+date.getFullYear();
                                date.setMonth(date.getMonth() -1);
                                var todayLastToPreviousMonth = ("00" + date.getDate()).slice(-2)+'/'+("00" + (date.getMonth()+1)).slice(-2)+'/'+date.getFullYear();
                                
                                var todayLastMonthTrans = [];
                                transactions.forEach(function(transaction){
                                    if(transaction["Transaction Date"] == todayLastMonth.toString()) {
                                        todayLastMonthTrans.push(transaction);
                                    }
                                });

                                var todayLastToPreviousMonthTrans = [];
                                transactions.forEach(function(transaction){
                                    if(transaction["Transaction Date"] == todayLastToPreviousMonth.toString()) {
                                        todayLastToPreviousMonthTrans.push(transaction);
                                    }
                                });
                                var repeatedTrans = [];
                                todayLastMonthTrans.forEach(function(lastMonthTransaction){
                                    todayLastToPreviousMonthTrans.forEach(function(todayLastToPreviousMonthTransaction){
                                        //console.log(lastMonthTransaction["Transaction Remarks"].match(/[a-z]*/ig) 
                                        //  +'='+ todayLastToPreviousMonthTransaction["Transaction Remarks"].match(/[a-z]*/ig));

                                        var remarkLastMonth = '';
                                        lastMonthTransaction["Transaction Remarks"].match(/[a-z]*/ig).forEach(function (rem) {
                                            if (rem !== '')
                                                remarkLastMonth = remarkLastMonth + ' ' + rem;
                                        });
                                        var remarkLastToPreviousMonth = '';
                                        todayLastToPreviousMonthTransaction["Transaction Remarks"].match(/[a-z]*/ig).forEach(function (rem) {
                                            if (rem !== '')
                                                remarkLastToPreviousMonth = remarkLastToPreviousMonth + ' ' + rem;
                                        });

                                        if(remarkLastMonth === remarkLastToPreviousMonth){
                                            repeatedTrans.push(remarkLastMonth);
                                        }
                                    });
                                });
                                var msg = "You made a transaction in previous months with remark of '"+repeatedTrans[0].trim()+"',. Do you want to make this today?"
                                return res.json({
                                                    speech: msg,
                                                    displayText: msg,
                                                    source: 'weather'
                                                });
                            } catch (e) {
                                console.log(e);
                                var msg='System not available now, please try after sometime.';
                                return res.json({
                                            speech: msg,
                                            displayText: msg,
                                            source: 'weather'
                                });
                            }
                        });
                });
        });
    }

    //Credit card suggestion
    if(req.body.result.action === 'placestockorder') {
        var spendAmount = 0;
        var url = 'https://retailbanking.mybluemix.net/banking/icicibank/participantmapping?client_id=' + clientId;
        httpGet(url).then(function (response) {
            //console.log(response);
            httpGet('https://corporateapiprojectwar.mybluemix.net/corporate_banking/mybank/authenticate_client?client_id=' + clientId + '&password=' + accessCode)
                .then(function (response) {
                    var token = response[0].token;
                    httpGet('https://retailbanking.mybluemix.net/banking/icicibank/ndaystransaction?client_id=kumarmca1@gmail.com&token=' + token + '&accountno=4444777755552276&days=10')
                        .then(function (response) {
                            response = transactions; //overriding the response to moc data
                            try {
                                var keyWordsForTravel = ["flight", "car", "hotel", "trip", "toor", "bus", "train"];
                                console.log(keyWordsForTravel);
                                response.forEach(function(transaction) {
                                    keyWordsForTravel.forEach(function (keyWord){
                                            if(transaction["Transaction Remarks"].toLowerCase().includes(keyWord)){
                                                spendAmount = spendAmount + transaction["Withdrawal Amount (INR )"];
                                            }
                                    });
                                }, this);

                                var msg = "You have spend "+spendAmount+" in last 3 months, so you can prefer applying for ICICI Bank Travel Card. Do you want to hear more about that?"
                                return res.json({
                                                    speech: msg,
                                                    displayText: msg,
                                                    source: 'weather'
                                                });
                            } catch (e) {
                                var msg='System not available now, please try after sometime.';
                                return res.json({
                                        speech: msg,
                                        displayText: msg,
                                        source: 'weather'
                                });
                            }
                        });
                });
        });
    }

    //8.8 Fund Transfer - Problem with unavailable data
    if (req.body.result.action === 'fundtransfer') {

        var accesscode;
        var lati;
        var logi;
        var msg;
        var errorMessage;
        var destaccntno;
        var destpayid;
        var destpayeename = req.body.result.parameters['FTPayee'];
        var destamount = req.body.result.parameters['FTAmount'];
        var transremark = req.body.result.parameters['FTComment'];

        getaccesscodeFT();

        function getaccesscodeFT() {
            "use strict";
            let restUrl1 = 'https://corporateapiprojectwar.mybluemix.net/corporate_banking/mybank/authenticate_client?client_id=kumarmca1@gmail.com&password=72S2V55I'
            request.get(restUrl1, (err, response1, body) => {
                if (!err && response1.statusCode == 200) {
                    let json1 = JSON.parse(response1.body);
                    console.log(json1);
                    console.log(json1.length);
                    accesscode = json1[0].token;
                    console.log(accesscode);
                    getaccountcustnoFT();
                } else {
                    let errorMessage = 'I failed to get Access Code';
                    return res.json({
                        speech: errorMessage,
                        displayText: errorMessage,
                        source: 'fundtransfer'
                    });
                }
            })
        }

        function getaccountcustnoFT() {

            let restUrl2 = 'https://retailbanking.mybluemix.net/banking/icicibank/participantmapping?client_id=kumarmca1@gmail.com';
            request.get(restUrl2, (err, response2, body) => {
                if (!err && response2.statusCode == 200) {

                    let json2 = JSON.parse(response2.body);
                    console.log(json2.length);
                    var accounts = [];
                    if (json2[0].account_no !== undefined && json2[0].account_no !== '') {
                        accounts.push(json2[0]);
                    }
                    accountno = accounts[0].account_no;
                    custno = accounts[0].cust_id;
                    getregpayee();

                }
            });
        }

        function getregpayee() {
            "use strict";
            console.log(accesscode, 'final');
            console.log('access code entry');
            console.log(accesscode, 'enter');
            let resturl3 = 'https://retailbanking.mybluemix.net/banking/icicibank/listpayee?client_id=kumarmca1@gmail.com&token=' + accesscode + '&custid=' + custno + '';
            console.log(resturl3);
            request.get(resturl3, (err, response3, body) => {
                if (!err && response3.statusCode == 200) {
                    let json3 = JSON.parse(response3.body);
                    console.log(json3.length);
                    console.log('Reached1');
                    console.log(json3);
                    var payees = [];
                    var payeesno = (json3.length - 1);
                    console.log(payeesno);
                    console.log('I have ' + payeesno + ' payees mapped to your id ');
                    for (let i = 1; i < json3.length; i++) {
                        if (json3[i].payeename !== undefined && json3[i].payeename !== '') {
                            payees.push(json3[i]);
                            console.log('Reached2');
                            console.log(payees[i - 1]);
                            console.log(destpayeename, 'check');
                            console.log(payees[i - 1].payeename, 'check');
                            if (payees[i - 1].payeename.toUpperCase() == destpayeename.toUpperCase()) {
                                destaccntno = json3[i].payeeaccountno;
                                destpayid = json3[i].payeeid;
                                console.log('Reached21');
                                performtransfer();

                                console.log('Reached22');
                            }
                            console.log('Reached24');

                        }
                        console.log('Reached25');

                    }

                    console.log('Reached26');
                } else {
                    console.log(response3);
                    console.log('Reached4');
                    errorMessage = 'I failed to retrieve Payee details';

                    return res.json({
                        speech: errorMessage,
                        displayText: errorMessage,
                        source: 'fundtransfer'
                    });
                }
            });
        }


        function performtransfer() {

            let resturl4 = 'https://retailbanking.mybluemix.net/banking/icicibank/fundTransfer?client_id=kumarmca1@gmail.com&token=' + accesscode + '&srcAccount=' + accountno + '&destAccount=' + destaccntno + '&amt=' + destamount + '&payeeDesc=NA&payeeId=' + destpayid + '&type_of_transaction=' + transremark + '';
            console.log(resturl4);

            request.get(resturl4, (err, response4, body) => {
                if (!err && response4.statusCode == 200) {

                    let json4 = JSON.parse(response4.body);
                    console.log(json4);

                    msg = 'Hooray! Your transaction for amount ' + json4[1].transaction_amount + ' INR to ' + json4[1].payee_name + ' is successfull ! ';
                    console.log(msg);

                } else {
                    msg = 'Oops! Your transaction for amount ' + json[1].transaction_amount + ' INR to ' + json[1].payee_name + ' failed ! ';

                }

                return res.json({
                    speech: msg,
                    displayText: msg,
                    source: 'fundtransfer'
                });



            });

        }

    }

    //13.6 Block my card
    if (req.body.result.action === 'blockmycard') {

        console.log('inside block my card Statement');
        var accesscode;
        var msg;
        var custnocard;

        getaccesscode();

        function getaccesscode() {
            "use strict";
            let restUrl1 = 'https://corporateapiprojectwar.mybluemix.net/corporate_banking/mybank/authenticate_client?client_id=kumarmca1@gmail.com&password=72S2V55I'
            request.get(restUrl1, (err, response1, body) => {
                if (!err && response1.statusCode == 200) {
                    let json1 = JSON.parse(response1.body);
                    console.log(json1);
                    console.log(json1.length);
                    accesscode = json1[0].token;
                    console.log(accesscode);
                    getaccountcustno();
                } else {
                    let errorMessage = 'I failed to get Access Code';
                    return res.json({
                        speech: errorMessage,
                        displayText: errorMessage,
                        source: 'blockmycard'
                    });
                }
            })
        }

        function getaccountcustno() {

            let restUrl = 'https://retailbanking.mybluemix.net/banking/icicibank/participantmapping?client_id=kumarmca1@gmail.com';
            request.get(restUrl, (err, response, body) => {
                if (!err && response.statusCode == 200) {

                    let json = JSON.parse(response.body);
                    console.log(json.length);
                    var accounts = [];
                    if (json[0].account_no !== undefined && json[0].account_no !== '') {
                        accounts.push(json[0]);
                    }
                    custnocard = accounts[0].cust_id;
                    blockmycard();

                }
            });
        }

        function blockmycard() {
            "use strict";
            console.log('access code entry');
            console.log(accesscode, 'enter');
            console.log(custnocard, 'customer no');

            let restUrl2 = 'https://creditcardapi.mybluemix.net/banking/icicibank/changeCardStatus?client_id=kumarmca1@gmail.COM&token=' + accesscode + '&custId=' + custnocard + '&cardStatus=inactive';
            console.log(restUrl2);
            request.get(restUrl2, (err, response2, body) => {
                if (!err && response2.statusCode == 200) {
                    let json2 = JSON.parse(response2.body);
                    console.log(json2);
                    if (json2[0].code == 200) {
                        msg = json2[1].response;
                    } else {
                        errorMessage = json2[0].description;
                        console.log('Reached3');
                        return res.json({
                            speech: errorMessage,
                            displayText: errorMessage,
                            source: 'blockmycard'
                        });
                    }

                    return res.json({
                        speech: msg,
                        displayText: msg,
                        source: 'blockmycard'
                    });


                } else {
                    let errorMessage = "failed to block card";
                    return res.json({
                        speech: errorMessage,
                        displayText: errorMessage,
                        source: 'blockmycard'
                    });
                }
            });
        }
    }

    //13.6 Unblock my card
    if (req.body.result.action === 'unblockmycard') {
        console.log('inside unblock my card Statement');
        var accesscode;
        var msg;
        var custnocard;

        getaccesscode();

        function getaccesscode() {
            "use strict";
            let restUrl1 = 'https://corporateapiprojectwar.mybluemix.net/corporate_banking/mybank/authenticate_client?client_id=kumarmca1@gmail.com&password=72S2V55I'
            request.get(restUrl1, (err, response1, body) => {
                if (!err && response1.statusCode == 200) {
                    let json1 = JSON.parse(response1.body);
                    console.log(json1);
                    console.log(json1.length);
                    accesscode = json1[0].token;
                    console.log(accesscode);
                    getaccountcustno();
                } else {
                    let errorMessage = 'I failed to get Access Code';
                    return res.json({
                        speech: errorMessage,
                        displayText: errorMessage,
                        source: 'unblockmycard'
                    });
                }
            })
        }

        function getaccountcustno() {

            let restUrl = 'https://retailbanking.mybluemix.net/banking/icicibank/participantmapping?client_id=kumarmca1@gmail.com';
            request.get(restUrl, (err, response, body) => {
                if (!err && response.statusCode == 200) {

                    let json = JSON.parse(response.body);
                    console.log(json.length);
                    var accounts = [];
                    if (json[0].account_no !== undefined && json[0].account_no !== '') {
                        accounts.push(json[0]);
                    }
                    custnocard = accounts[0].cust_id;
                    blockmycard();

                }
            });
        }

        function blockmycard() {
            "use strict";
            console.log('access code entry');
            console.log(accesscode, 'enter');
            console.log(custnocard, 'customer no');

            let restUrl2 = 'https://creditcardapi.mybluemix.net/banking/icicibank/changeCardStatus?client_id=kumarmca1@gmail.COM&token=' + accesscode + '&custId=' + custnocard + '&cardStatus=active';
            console.log(restUrl2);
            request.get(restUrl2, (err, response2, body) => {
                if (!err && response2.statusCode == 200) {
                    let json2 = JSON.parse(response2.body);
                    console.log(json2);
                    if (json2[0].code == 200) {
                        msg = json2[1].response;
                    } else {
                        errorMessage = json2[0].description;
                        console.log('Reached3');
                        return res.json({
                            speech: errorMessage,
                            displayText: errorMessage,
                            source: 'unblockmycard'
                        });
                    }

                    return res.json({
                        speech: msg,
                        displayText: msg,
                        source: 'unblockmycard'
                    });


                } else {
                    let errorMessage = "failed to unblock card";
                    return res.json({
                        speech: errorMessage,
                        displayText: errorMessage,
                        source: 'unblockmycard'
                    });
                }
            });
        }
    }

    //17.6 Place Order
    if (req.body.result.action === 'placestockorder') {
        console.log('inside placestockorder');
        var accesscode;
        var msg;
        var custnostock;
        var stockname = req.body.result.parameters['stockcode'];
        var stockprice = req.body.result.parameters['stockprice'];
        var stockquantity = req.body.result.parameters['stockquantity'];
        var action = req.body.result.parameters['stockaction'];

        getaccesscode();

        function getaccesscode() {
            "use strict";
            let restUrl1 = 'https://corporateapiprojectwar.mybluemix.net/corporate_banking/mybank/authenticate_client?client_id=kumarmca1@gmail.com&password=72S2V55I'
            request.get(restUrl1, (err, response1, body) => {
                if (!err && response1.statusCode == 200) {
                    let json1 = JSON.parse(response1.body);
                    console.log(json1);
                    console.log(json1.length);
                    accesscode = json1[0].token;
                    console.log(accesscode);
                    getaccountcustno();
                } else {
                    let errorMessage = 'I failed to get Access Code';
                    return res.json({
                        speech: errorMessage,
                        displayText: errorMessage,
                        source: 'placestockorder'
                    });
                }
            })
        }

        function getaccountcustno() {

            let restUrl = 'https://retailbanking.mybluemix.net/banking/icicibank/participantmapping?client_id=kumarmca1@gmail.com';
            request.get(restUrl, (err, response, body) => {
                if (!err && response.statusCode == 200) {

                    let json = JSON.parse(response.body);
                    console.log(json.length);
                    var accounts = [];
                    if (json[0].account_no !== undefined && json[0].account_no !== '') {
                        accounts.push(json[0]);
                    }
                    custnostock = accounts[0].cust_id;
                    placestockorder();

                }
            });
        }

        function placestockorder() {
            "use strict";
            console.log('access code entry');
            console.log(accesscode, 'enter');
            console.log(custnostock, 'customer no');
            console.log(stockname, 'enter');
            console.log(action, 'enter');
            console.log(stockquantity, 'enter');
            console.log(stockprice, 'enter');

            let restUrl2 = 'https://stockexchange.mybluemix.net/stockexc/icicibank/tradestock?client_id=kumarmca1@gmail.com&token=' + accesscode + '&custid=' + custnostock + '&stockcode=' + stockname + '&exchange=NSE&ordertype=' + action + '&quantity=' + stockquantity + '&orderprice=' + stockprice + '';
            console.log(restUrl2);
            request.get(restUrl2, (err, response2, body) => {
                if (!err && response2.statusCode == 200) {
                    let json2 = JSON.parse(response2.body);
                    console.log(json2);
                    if (json2[0].code == 200) {
                        msg = json2[1].Success;
                    } else {
                        errorMessage = json2[0].description;
                        console.log('Reached3');
                        return res.json({
                            speech: errorMessage,
                            displayText: errorMessage,
                            source: 'placestockorder'
                        });
                    }

                    return res.json({
                        speech: msg,
                        displayText: msg,
                        source: 'placestockorder'
                    });


                } else {
                    let errorMessage = "failed to place stock order";
                    return res.json({
                        speech: errorMessage,
                        displayText: errorMessage,
                        source: 'placestockorder'
                    });
                }
            });
        }
    }

    //bill pay
    if(req.body.result.action === 'billpay') {
        var amount = req.body.result.amount;
        var url = 'https://retailbanking.mybluemix.net/banking/icicibank/participantmapping?client_id=' + clientId;
        httpGet(url).then(function (response) {
            //console.log(response);
            httpGet('https://corporateapiprojectwar.mybluemix.net/corporate_banking/mybank/authenticate_client?client_id=' + clientId + '&password=' + accessCode)
                .then(function (response) {
                    var token = response[0].token;
                    try {
                        var url = 'https://biller.mybluemix.net/biller/icicibank/billpay?client_id='+clientId+'&token='+token+'&custid=33337273&nickname=A2274&amount='+amount;
                        httpGet(url).then(function(response){
                            var msg='';
                            if(response[0].code === 200){
                                msg=response[1].Success;
                            }
                            else {
                                msg='Opps something wrong, please try after sometime.';
                            }
                            return res.json({
                                            speech: msg,
                                            displayText: msg,
                                            source: 'weather'
                                        });
                        }).then(function(){
                            var msg='System not available now, please try after sometime.';
                            return res.json({
                                            speech: msg,
                                            displayText: msg,
                                            source: 'weather'
                                        });
                        });
                        
                        
                    } catch (e) {
                        console.log(e);
                        var msg='System not available now, please try after sometime.';
                        return res.json({
                                        speech: msg,
                                        displayText: msg,
                                        source: 'weather'
                        });
                    }
            });
        });
    }
});