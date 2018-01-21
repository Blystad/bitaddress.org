// run unit tests
if (ninja.getQueryString()["unittests"] == "true" || ninja.getQueryString()["unittests"] == "1") {
	ninja.unitTests.runSynchronousTests(true);
	ninja.translator.showEnglishJson();
}
// run async unit tests
if (ninja.getQueryString()["asyncunittests"] == "true" || ninja.getQueryString()["asyncunittests"] == "1") {
	ninja.unitTests.runAsynchronousTests(true);
}
// testnet, check if testnet edition should be activated
if (ninja.getQueryString()["testnet"] == "true" || ninja.getQueryString()["testnet"] == "1") {
	document.getElementById("testnet").innerHTML = ninja.translator.get("testneteditionactivated");
	document.getElementById("testnet").style.display = "block";
	document.getElementById("detailwifprefix").innerHTML = "'9'";
	document.getElementById("detailcompwifprefix").innerHTML = "'c'";
	Bitcoin.Address.networkVersion = QTUM_TESTNET_PUBKEY_ADDRESS;
	Bitcoin.ECKey.privateKeyPrefix = QTUM_TESTNET_SECRET_KEY;
	ninja.testnetMode = true;
} else {
    Bitcoin.Address.networkVersion = QTUM_MAINNET_PUBKEY_ADDRESS;
    Bitcoin.ECKey.privateKeyPrefix = QTUM_MAINNET_SECRET_KEY;
}
if (ninja.getQueryString()["showseedpool"] == "true" || ninja.getQueryString()["showseedpool"] == "1") {
	document.getElementById("seedpoolarea").style.display = "block";
}
