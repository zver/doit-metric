function(a,b) {
    var c=b, d=a || (new Date).getTime(), e=(c-d)/1e3, f=Math.floor(e/86400);
    if(!(isNaN(f)||0>f)) {
            var g=Time.formatDateAndTime({
                    dateFormat:Doit.dateFormat,timeFormat:Doit.timeFormat,time:a
            });
            return 0==f&&(60>e&&[L.TIMEAGO_LESS_THAN_ONE,g]||120>e&&[L.TIMEAGO_ONE_MIN_GO,g]||3600>e&&[L.TIMEAGO_X_MINS_GO.format(Math.floor(e/60)),g]||7200>e&&[L.TIMEAGO_ONE_HOUR_GO,g]||86400>e&&[L.TIMEAGO_X_HOURS_GO.format(Math.floor(e/3600)),g])||[g,g]
    }
}
