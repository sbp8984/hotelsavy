var e1start = e1.start.getTime();
var e1end = e1.end.getTime();
var e2start = e2.start.getTime();
var e2end = e2.end.getTime();

return (e1start > e2start && e1start < e2end || e2start > e1start && e2start < e1end);