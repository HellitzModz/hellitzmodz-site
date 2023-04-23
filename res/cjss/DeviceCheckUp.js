console.log("Verifying Device")
    var deviceName = '';

    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        Datalogic: function() {
            return navigator.userAgent.match(/DL-AXIS/i);
        },
        Bluebird: function() {
            return navigator.userAgent.match(/EF500/i);
        },
        Honeywell: function() {
            return navigator.userAgent.match(/CT50/i);
        },
        Zebra: function() {
            return navigator.userAgent.match(/TC70|TC55/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Datalogic() || isMobile.Bluebird() || isMobile.Honeywell() || isMobile.Zebra() || isMobile.BlackBerry() || isMobile.Android() || isMobile.iOS() || isMobile.Windows());
        }
    };

    if (isMobile.Datalogic())
        deviceName = 'Datalogic';
    else if (isMobile.Bluebird())
        deviceName = 'Bluebird';
    else if (isMobile.Honeywell())
        deviceName = 'Honeywell';
    else if (isMobile.Zebra())
        deviceName = 'Zebra';
    else if (isMobile.BlackBerry())
        deviceName = 'BlackBerry';
    else if (isMobile.iOS())
        deviceName = 'iOS';
    else if ((deviceName == '') && (isMobile.Android()))
        deviceName = 'Android';
    else if ((deviceName == '') && (isMobile.Windows()))
        deviceName = 'Windows';

    if (deviceName != '') {
        console.log('Devices information deviceName = ' + deviceName);
        console.log('Devices information any = ' + isMobile.any());
        console.log('navigator.userAgent = ' + navigator.userAgent);
    }





if (deviceName == "Android" ) {
  alert("Unsupported Device !! \n Please Use Desktop");
  window.stop()
}
else if (deviceName == "iOS") {
  alert("Unsupported Device!! \n Please Use Desktop");
  window.stop()
}